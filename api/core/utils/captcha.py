from django.utils import timezone

from core.models import CaptchaModel


def check_captcha(request):
    captcha_uuid = request.data.get("captcha_uuid", "")
    sent_captcha_code = request.data.get("user_captcha_code", "")
    if captcha_uuid and sent_captcha_code:
        captcha_queryset = CaptchaModel.objects.filter(uuid=captcha_uuid)
        if captcha_queryset.count():
            cur_captcha = captcha_queryset.first()
            if cur_captcha.is_active:
                cur_captcha.is_active = False
                cur_captcha.save()
                captcha_code = cur_captcha.captcha
                if captcha_code == sent_captcha_code:
                    return {"success": True, "message": "Captcha confirmed successfully"}
                return {"success": False, "message": "The captcha code does not match the one existing in our system"}
            else:
                return {"success": False, "message": "The captcha has been expired, please reload the captch code!"}
        return {"success": False, "message": "No captcha code found with the current uuid"}
    return {"success": False, "message": "Captcha information is not provided"}


def remove_old_captcha():
    try:
        three_days_ago = timezone.now() - timezone.timedelta(seconds=72 * 60 * 60)
        count = 0
        captcha_queryset = CaptchaModel.objects.filter(created_at__lt=three_days_ago)
        if captcha_queryset.count():
            for item in captcha_queryset:
                item.delete()
                count += 1
        print(f"Remove old captcha task was successfully done and {count} items removed!")
    except Exception as e:
        print(f"Remove old captcha task was failed!")
        print(str(e))
