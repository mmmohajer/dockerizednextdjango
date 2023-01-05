import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { WEBSOCKET_CHAT_API_ROUTE } from '@/constants/apiRoutes';
import { websocketApiRoute } from '@/utils/helpers';
import { getLocalStorage } from '@/utils/auth';
import {
  chatSocketEventHandler,
  joinRoomHandler,
  leaveRoomHandler,
  sendMessageInRoomHandler,
  getRoomMessagesHandler
} from '@/utils/chatSocket';

import TextBox from '@/baseComponents/TextBox';
import Button from '@/baseComponents/Button';

import styles from './PublicChat.module.scss';

const PublicChat = () => {
  const [accessToken, setAccessToken] = useState('');
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [publicChatSocket, setPublicChatSocket] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (getLocalStorage('access_token')) {
        setAccessToken(getLocalStorage('access_token'));
      } else {
        console.log('No authentication');
      }
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      setPublicChatSocket(
        new WebSocket(`${websocketApiRoute(WEBSOCKET_CHAT_API_ROUTE)}?token=${accessToken}`)
      );
    }
  }, [accessToken]);

  useEffect(() => {
    if (publicChatSocket) {
      chatSocketEventHandler(publicChatSocket);
    }
  }, [publicChatSocket]);

  return (
    <>
      <TextBox val={message} setVal={setMessage} />
      <Button onClick={() => sendMessageInRoomHandler(publicChatSocket, message)}>Submit</Button>
      <br /> <br /> <br /> <br />
      <TextBox val={room} setVal={setRoom} />
      <Button onClick={() => joinRoomHandler(publicChatSocket, 1)}>Join Room</Button>
      <br /> <br /> <br /> <br />
      <Button onClick={() => leaveRoomHandler(publicChatSocket, room)}>Leave Room</Button>
      <br /> <br /> <br /> <br />
      <Button onClick={() => getRoomMessagesHandler(publicChatSocket, 1)}>
        Get Room Chat Messages
      </Button>
    </>
  );
};

export default PublicChat;
