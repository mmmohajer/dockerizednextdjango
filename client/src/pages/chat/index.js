import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { WEBSOCKET_CHAT_API_ROUTE } from '@/constants/apiRoutes';
import { websocketApiRoute } from '@/utils/helpers';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import TextBox from '@/baseComponents/TextBox';
import Button from '@/baseComponents/Button';

import styles from './Index.module.scss';

const Index = () => {
  const [message, setMessage] = useState('');
  const [chatSocket, setChatSocket] = useState();

  useEffect(() => {
    setChatSocket(new WebSocket(websocketApiRoute(WEBSOCKET_CHAT_API_ROUTE)));
  }, []);

  useEffect(() => {
    if (chatSocket) {
      chatSocket.onmessage = (e) => {
        let data = JSON.parse(e.data);
        console.log('Data:', data);
        if (data.type === 'chat') {
          console.log('Hello');
          console.log(data);
        }
      };
    }
  }, [chatSocket]);

  const submitHandler = () => {
    chatSocket.send(
      JSON.stringify({
        message: message
      })
    );
  };

  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <Div>Index</Div>
          <TextBox val={message} setVal={setMessage} />
          <Button onClick={submitHandler}>Submit</Button>
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
