from django.utils import timezone

from core.models import UnsucessfulLoggedInAttemptModel


def remove_old_unsuccessful_login_attempts():
    try:
        two_days_ago = timezone.now() - timezone.timedelta(seconds=48*60*60)
        print(two_days_ago)
        count = 0
        unsuccessful_loggedin_queryset = UnsucessfulLoggedInAttemptModel.objects.filter(
            created_at__lt=two_days_ago)
        for item in unsuccessful_loggedin_queryset:
            item.delete()
            count += 1
        print(
            f"Remove old unsuccessful attempts task was successfully done and {count} items removed!")
    except Exception as e:
        print(f"Remove old unsuccessful task was failed!")
        print(str(e))
