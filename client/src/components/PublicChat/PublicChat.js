import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { WEBSOCKET_CHAT_API_ROUTE } from '@/constants/apiRoutes';
import { websocketApiRoute } from '@/utils/helpers';
import { getLocalStorage } from '@/utils/auth';

import TextBox from '@/baseComponents/TextBox';
import Button from '@/baseComponents/Button';

import styles from './PublicChat.module.scss';

const PublicChat = () => {
  const [accessToken, setAccessToken] = useState('');
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [chatSocket, setChatSocket] = useState();

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
      setChatSocket(
        new WebSocket(`${websocketApiRoute(WEBSOCKET_CHAT_API_ROUTE)}?token=${accessToken}`)
      );
    }
  }, [accessToken]);

  useEffect(() => {
    if (chatSocket) {
      chatSocket.onmessage = (message) => {
        try {
          const data = JSON.parse(message.data);
          console.log('Got chat websocket message', data);
        } catch (e) {
          console.log(e);
        }
      };

      chatSocket.addEventListener('open', (e) => {
        console.log('Public ChatSocket OPEN');
      });

      chatSocket.onclose = (e) => {
        console.error('Public ChatSocket closed.');
      };

      chatSocket.onOpen = (e) => {
        console.log('Public ChatSocket onOpen', e);
      };

      chatSocket.onerror = (e) => {
        console.log('Public ChatSocket error', e);
      };

      if (chatSocket.readyState == WebSocket.OPEN) {
        console.log('Public ChatSocket OPEN');
      } else if (chatSocket.readyState == WebSocket.CONNECTING) {
        console.log('Public ChatSocket connecting..');
      }
    }
  }, [chatSocket]);

  const submitHandler = () => {
    try {
      chatSocket.send(
        JSON.stringify({
          command: 'send',
          message
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  const joinRoomHandler = () => {
    chatSocket.send(
      JSON.stringify({
        command: 'join',
        room_id: 1
      })
    );
  };

  const leaveRoomHandler = () => {
    chatSocket.send(
      JSON.stringify({
        command: 'leave',
        room
      })
    );
  };

  const getRoomMessagesHandler = () => {
    chatSocket.send(
      JSON.stringify({
        command: 'get_room_chat_messages',
        page_number: 1
      })
    );
  };

  return (
    <>
      <TextBox val={message} setVal={setMessage} />
      <Button onClick={submitHandler}>Submit</Button>
      <br /> <br /> <br /> <br />
      <TextBox val={room} setVal={setRoom} />
      <Button onClick={joinRoomHandler}>Join Room</Button>
      <br /> <br /> <br /> <br />
      <Button onClick={leaveRoomHandler}>Leave Room</Button>
      <br /> <br /> <br /> <br />
      <Button onClick={getRoomMessagesHandler}>Get Room Chat Messages</Button>
    </>
  );
};

export default PublicChat;
