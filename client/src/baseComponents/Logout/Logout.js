import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Div } from 'basedesign-iswad';

import { getLocalStorage, removeLocalStorage } from '@/utils/auth';
import { addAlertItem } from '@/utils/notifications';
import { LOGOUT_API_ROUTE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import styles from './Logout.module.scss';

const Logout = ({ className, children, ...props }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [refreshToken, setRefreshToken] = useState(false);

  const logoutHandler = async () => {
    await removeLocalStorage('access_token');
    await removeLocalStorage('refresh_token');
    addAlertItem(dispatch, 'You have successfully logged out.', 'success');
    router.reload(window?.location?.hostname);
  };

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
        logoutHandler();
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
        className={cx(className)}
        onClick={() => {
          setRefreshToken(getLocalStorage('refresh_token'));
        }}
        {...props}>
        {children}
      </Div>
    </>
  );
};

export default Logout;
