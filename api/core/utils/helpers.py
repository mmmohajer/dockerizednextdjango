from django.contrib.auth.models import Group
import random
import string
from django.contrib.auth import get_user_model

User = get_user_model()


def createNewGroup():
    group_name = ""
    while not group_name:
        group_name = input("What is the new group's name? ")
    new_group, created = Group.objects.get_or_create(name=group_name)
    if created:
        print(f"New group named {new_group} created successfully!")
    else:
        print(
            f"We couldn't create a group with name {group_name}. So, it seems {group_name} has already been declared as a group name.")
    return


def code_generator(size=16, chars=string.ascii_uppercase + string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))