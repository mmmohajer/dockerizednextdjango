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

  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [sendGetCurUserReq, setSendGetCurUserReq] = useState(false);
  const [sendAuthenticatedReq, setSendAuthenticatedReq] = useState(false);
  const [sendrefreshTokenReq, setSendRefreshTokenReq] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRefreshToken(getLocalStorage('refresh_token'));
    }
  }, []);

  const { data: refreshData, error: refreshError } = useApiCalls({
    sendReq: sendrefreshTokenReq,
    setSendReq: setSendRefreshTokenReq,
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
    showLoading: false,
    showErrorMessage: false
  });

  const { data: profileData, error: profileError } = useApiCalls({
    sendReq: sendGetCurUserReq,
    setSendReq: setSendGetCurUserReq,
    method: 'GET',
    url: MY_PROFILE_API_ROUTE,
    showLoading: false,
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
    if (accessToken) {
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
    if (isAuthenticated) {
      setAccessToken(getLocalStorage('access_token'));
      setRefreshToken(getLocalStorage('refresh_token'));
      try {
        setSendGetCurUserReq(true);
        setInterval(() => {
          setSendRefreshTokenReq(true);
          setTimeout(() => {
            setSendRefreshTokenReq(false);
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
      <Div type="flex" direction="vertical" className="min-height-vh-full">
        {children}
      </Div>
    </>
  );
};

export default BaseTemplate;
