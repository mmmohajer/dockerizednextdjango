import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { getLocalStorage, removeLocalStorage } from '@/utils/auth';
import { addAlertItem } from '@/utils/notifications';
import { LOGOUT_API_ROUTE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import styles from './Logout.module.scss';

const Logout = () => {
  const dispatch = useDispatch();

  const [refreshToken, setRefreshToken] = useState(false);

  const [sendLogoutReq, setSendLogoutReq] = useState(false);
  const bodyData = {
    refresh: refreshToken
  };
  const { data, error } = useApiCalls({
    sendReq: sendLogoutReq,
    setSendReq: setSendLogoutReq,
    method: 'POST',
    url: LOGOUT_API_ROUTE,
    bodyData
  });
  useEffect(() => {
    if (data) {
      if (data?.success) {
        removeLocalStorage('access_token');
        removeLocalStorage('refresh_token');
        addAlertItem(dispatch, 'You have successfully logged out.', 'success');
      }
    }
  }, [data]);

  useEffect(() => {
    if (refreshToken) {
      setSendLogoutReq(true);
    }
  }, [refreshToken]);

  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mouse-hand w-px-100 height-px-100 bgYellow my4"
        onClick={() => setRefreshToken(getLocalStorage('refresh_token'))}>
        Logout
      </Div>
    </>
  );
};

export default Logout;
