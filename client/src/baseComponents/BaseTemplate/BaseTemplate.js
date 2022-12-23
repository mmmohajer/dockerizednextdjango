import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/auth';
import { authenticated, notAuthenticated } from '@/services/auth';
import { getProfile } from '@/services/profile';
import useApiCalls from '@/hooks/useApiCalls';
import { ACCESS_TOKEN_CHEANGE_TIME } from '@/constants/vars';
import {
  REFRESH_TOKEN_API_ROUTE,
  MY_PROFILE_API_ROUTE,
  AUTHENTICATE_USER_API_ROUTE
} from '@/constants/apiRoutes';

import Loading from '@/baseComponents/Loading';
import Alert from '@/baseComponents/Alert';
import Modal from '@/baseComponents/Modal';

import styles from './BaseTemplate.module.scss';

const BaseTemplate = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const profile = useSelector((state) => state.profile);

  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [sendGetCurUserReq, setSendGetCurUserReq] = useState(false);
  const [sendAuthenticatedReq, setSendAuthenticatedReq] = useState(false);
  const [sendrefreshTokenReq, setSendRefreshTokenReq] = useState(false);
  const [sendRepeatedrefreshTokenReq, setSendRepeatedRefreshTokenReq] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (getLocalStorage('refresh_token')) {
        setRefreshToken(getLocalStorage('refresh_token'));
      } else {
        removeLocalStorage('access_token');
        removeLocalStorage('refresh_token');
        notAuthenticated(dispatch);
      }
    }
  }, []);

  const { data: refreshData, error: refreshError } = useApiCalls({
    sendReq: sendrefreshTokenReq,
    setSendReq: setSendRefreshTokenReq,
    method: 'POST',
    url: REFRESH_TOKEN_API_ROUTE,
    bodyData: { refresh: refreshToken },
    showLoading: true,
    showErrorMessage: false
  });

  const { data: repeatedRefreshData, error: repeatedRefreshError } = useApiCalls({
    sendReq: sendRepeatedrefreshTokenReq,
    setSendReq: setSendRepeatedRefreshTokenReq,
    method: 'POST',
    url: REFRESH_TOKEN_API_ROUTE,
    bodyData: { refresh: refreshToken },
    showLoading: false,
    showErrorMessage: false
  });

  const { data: authenticatedData, error: authenticatedError } = useApiCalls({
    sendReq: sendAuthenticatedReq,
    setSendReq: setSendAuthenticatedReq,
    method: 'GET',
    url: AUTHENTICATE_USER_API_ROUTE,
    showLoading: true,
    showErrorMessage: false
  });

  const { data: profileData, error: profileError } = useApiCalls({
    sendReq: sendGetCurUserReq,
    setSendReq: setSendGetCurUserReq,
    method: 'GET',
    url: MY_PROFILE_API_ROUTE,
    showLoading: true,
    showErrorMessage: false
  });

  useEffect(() => {
    if (refreshToken) {
      setSendRefreshTokenReq(true);
    }
  }, [refreshToken]);

  useEffect(() => {
    if (refreshData) {
      setLocalStorage('access_token', refreshData['access']);
      setAccessToken(refreshData['access']);
    }
  }, [refreshData]);

  useEffect(() => {
    if (repeatedRefreshData) {
      setLocalStorage('access_token', repeatedRefreshData['access']);
    }
  }, [repeatedRefreshData]);

  useEffect(() => {
    if (refreshError?.data) {
      removeLocalStorage('access_token');
      removeLocalStorage('refresh_token');
    }
  }, [refreshError]);

  useEffect(() => {
    if (accessToken && !isAuthenticated?.authenticated) {
      setSendAuthenticatedReq(true);
    }
  }, [accessToken]);

  useEffect(() => {
    if (authenticatedData) {
      if (authenticatedData?.Authenticated) {
        authenticated(dispatch);
      } else {
        notAuthenticated(dispatch);
        removeLocalStorage('access_token');
        removeLocalStorage('refresh_token');
      }
    }
  }, [authenticatedData]);

  useEffect(() => {
    if (authenticatedError?.data) {
      notAuthenticated(dispatch);
      removeLocalStorage('access_token');
      removeLocalStorage('refresh_token');
    }
  }, [authenticatedError]);

  useEffect(() => {
    if (isAuthenticated?.authenticated) {
      setAccessToken(getLocalStorage('access_token'));
      setRefreshToken(getLocalStorage('refresh_token'));
      try {
        if (!profile?.id) {
          setSendGetCurUserReq(true);
        }
        setInterval(() => {
          setSendRepeatedRefreshTokenReq(true);
          setTimeout(() => {
            setSendRepeatedRefreshTokenReq(false);
          }, 1000);
        }, ACCESS_TOKEN_CHEANGE_TIME);
      } catch (err) {
        console.log(err);
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (profileData) {
      getProfile(dispatch, profileData);
    }
  }, [profileData]);

  return (
    <>
      {loading && <Loading />}
      <Alert />
      <Modal />
      <Div className="appContainer">{children}</Div>
    </>
  );
};

export default BaseTemplate;
