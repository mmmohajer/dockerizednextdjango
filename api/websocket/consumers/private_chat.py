from django.contrib.auth import get_user_model
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from channels.db import database_sync_to_async
import json
from urllib.parse import parse_qs
import jwt

from core.models import ProfileModel
from chat.models import PrivateChatRoomModel, PrivateChatRoomMessageModel
from chat.serializers import PrivateChatRoomSerializer, PrivateChatRoomMessageSerializer

User = get_user_model()


class PrivateChatConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        self.current_profile = None
        self.room = None
        self.room_serializable = None

        scope = dict(self.scope)
        query_params = parse_qs(scope["query_string"].decode())
        token = query_params.get("token", "")
        if len(token) > 0:
            self.current_profile = await get_current_profile(token[0])
            if self.current_profile:
                await self.accept()

    async def disconnect(self, code):
        try:
            if self.room:
                await self.leave_room()
        except Exception as e:
            print(e)

    async def receive_json(self, content):
        try:
            command = content.get("command", None)
            if command == "send":
                if len(content["message"].lstrip()) == 0:
                    raise Exception("You can't send an empty message.")
                await self.send_message(content["message"])
            elif command == "join":
                if self.room:
                    await self.leave_room()
                await self.join_room(content["room_id"])
            elif command == "leave":
                if self.room:
                    await self.leave_room()
            elif command == "get_room_chat_messages":
                await self.display_progress_bar(True)
                payload = await get_room_chat_messages(self.room, content['page_number'])
                if payload != None:
                    payload = json.loads(payload)
                    await self.send_messages_payload(payload)
                else:
                    raise
                await self.display_progress_bar(False)
        except Exception as e:
            print(e)
            raise

    async def send_message(self, message):
        try:
            payload = {
                "type": "chat.message",
                "message": message,
                "first_name": self.current_profile.user.first_name,
                "last_name": self.current_profile.user.last_name,
                "email": self.current_profile.user.email,
                "profile_photo": f"{self.current_profile.photo}" or "",
                "room": self.room_serializable,
            }
            await self.channel_layer.group_send(self.room.group_name, payload)
            await create_private_room_chat_message(self.room, self.current_profile.user, message)
        except Exception as e:
            print(e)
            raise

    # Custom Functions

    async def chat_message(self, event):
        payload = {}
        for attr in event:
            payload[attr] = event[attr]
        await self.send_json(payload)

    async def join_room(self, room_id):
        try:
            room = await get_room_or_none(room_id)
            if room:
                data = PrivateChatRoomSerializer(room).data
                await self.channel_layer.group_add(room.group_name, self.channel_name)
                await self.send_json({"join": data})
                self.room_serializable = data
                self.room = room
            else:
                print("There is not a room with the current name")
                raise
        except Exception as e:
            print(e)
            raise

    async def leave_room(self):
        try:
            if self.room:
                await self.channel_layer.group_discard(self.room.group_name, self.channel_name)
                await self.send_json({"left": self.room_serializable})
                self.room = None
            else:
                print("You are not looged in to any room!")
                raise
        except Exception as e:
            print(e)
            raise

    async def display_progress_bar(self, is_displayed):
        await self.send_json({"display_progress_bar": is_displayed})

    async def send_messages_payload(self, payload):
        await self.send_json(payload)


@database_sync_to_async
def get_current_profile(token):
    decoded = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
    user_id = decoded.get("user_id", "")
    cur_profile = None
    if user_id:
        try:
            cur_user = get_object_or_404(User, id=user_id)
            if cur_user:
                cur_profile = get_object_or_404(ProfileModel, user_id=cur_user.id)
                if cur_profile.user.id:
                    return cur_profile
        except Exception as e:
            return None
    return None


@database_sync_to_async
def get_room_or_none(room_id):
    qs = get_object_or_404(PrivateChatRoomModel, id=room_id)
    return qs


@database_sync_to_async
def create_private_room_chat_message(room, user, message):
    return PrivateChatRoomMessageModel.objects.create(user=user, room=room, message=message)


@database_sync_to_async
def get_room_chat_messages(room, page_number):
    DEFAULT_ROOM_CHAT_MESSAGE_PAGE_SIZE = 10
    qs = PrivateChatRoomMessageModel.objects.by_room(room)
    p = Paginator(qs, DEFAULT_ROOM_CHAT_MESSAGE_PAGE_SIZE)
    page_number = int(page_number)
    payload = {"messages": None, "number_of_pages": p.num_pages, "current_page": page_number,
               "num_of_messages_in_the_current_page": 0, "max_num_of_messages_per_page": DEFAULT_ROOM_CHAT_MESSAGE_PAGE_SIZE}
    if page_number <= p.num_pages:
        current_page_qs = p.page(page_number).object_list
        serializer = PrivateChatRoomMessageSerializer(current_page_qs, many=True)
        payload['messages'] = serializer.data
        payload["num_of_messages_in_the_current_page"] = len(serializer.data)
    return json.dumps(payload)
