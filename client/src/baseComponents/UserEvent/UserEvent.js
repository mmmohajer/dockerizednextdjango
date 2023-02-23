import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { USER_EVENT_API_ROUTE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import styles from './UserEvent.module.scss';

const UserEvent = ({ sendCreateEventReq, setSendCreateEventReq, event, children }) => {
  const userIPInfo = useSelector((state) => state.userIPInfo);

  const [bodyData, setBodyData] = useState({});

  useEffect(() => {
    if (userIPInfo && event) {
      const localBodyData = { ...userIPInfo, event };
      localBodyData['ip_address'] = userIPInfo['ip'];
      setBodyData(localBodyData);
    }
    if (!userIPInfo && event) {
      const localBodyData = { event };
      setBodyData(localBodyData);
    }
  }, [userIPInfo, event]);

  const { data, error } = useApiCalls({
    sendReq: sendCreateEventReq,
    setSendReq: setSendCreateEventReq,
    method: 'POST',
    url: USER_EVENT_API_ROUTE,
    bodyData,
    showLoading: false,
    showErrorMessage: false
  });
  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data]);

  return <>{children}</>;
};

export default UserEvent;
