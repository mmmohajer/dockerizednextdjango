import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';
import { useRouter } from 'next/router';
import Router from 'next/router';

import useApiCalls from '@/hooks/useApiCalls';
import { ACTIVATE_USER_API_ROUTE } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';
import { loginUser } from '@/utils/auth';

import styles from './ActivateUser.module.scss';

const ActivateUser = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated?.isChecked && isAuthenticated?.authenticated) {
      Router.push('/');
    }
  }, [isAuthenticated]);

  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [sendActivateReq, setSendActivateReq] = useState(false);
  const bodyData = {
    userId,
    token
  };

  const { data, error } = useApiCalls({
    sendReq: sendActivateReq,
    setSendReq: setSendActivateReq,
    method: 'POST',
    url: ACTIVATE_USER_API_ROUTE,
    bodyData,
    showLoading: true
  });

  useEffect(() => {
    if (router?.query?.token) {
      const localToken = router.query.token;
      setToken(localToken);
    }
  }, [router]);

  useEffect(() => {
    if (token) {
      let decoded;
      try {
        decoded = jwt_decode(token);
      } catch (e) {
        decoded = false;
      }
      if (decoded?.exp && Date.now() <= decoded.exp * 1000 && decoded?.user_id) {
        setUserId(decoded.user_id);
      } else {
        addAlertItem(
          dispatch,
          'Sorry, we are unable to activate your registration. That might be because your token has been expired.',
          'error'
        );
        Router.push('/register');
      }
    }
  }, [token]);

  useEffect(() => {
    if (token && userId) {
      setSendActivateReq(true);
    }
  }, [token, userId]);

  useEffect(() => {
    if (data) {
      if (data.is_activated) {
        addAlertItem(
          dispatch,
          'Congrats! you have successfully activated your registration with us!',
          'success'
        );
        if (data.access && data.refresh) {
          loginUser(data.access, data.refresh, dispatch);
        }
      }
    }
  }, [data]);

  return (
    <>
      {!token ? (
        <Div>
          In order to activate your account you must have a proper token being sent from your email
          address
        </Div>
      ) : (
        <Div>Activating your account</Div>
      )}
    </>
  );
};

export default ActivateUser;
