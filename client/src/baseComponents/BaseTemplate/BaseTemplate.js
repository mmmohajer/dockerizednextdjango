import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/auth';
import { authenticated, notAuthenticated } from '@/services/auth';
import { getProfile } from '@/services/profile';
import useApiCalls from '@/hooks/useApiCalls';
import { setPublicChatSocket, setPrivateChatSocket } from '@/reducers/general/chatSocket';
import { ACCESS_TOKEN_CHEANGE_TIME } from '@/constants/vars';
import {
  REFRESH_TOKEN_API_ROUTE,
  MY_PROFILE_API_ROUTE,
  AUTHENTICATE_USER_API_ROUTE,
  WEBSOCKET_CHAT_API_ROUTE,
  WEBSOCKET_PRIVATE_CHAT_API_ROUTE,
  GET_IP_INFO_ROUTE
} from '@/constants/apiRoutes';
import { USE_GET_IP_INFO_TOKEN } from 'config';
import { websocketApiRoute } from '@/utils/helpers';
import { chatSocketEventHandler } from '@/utils/chatSocket';
import { setScrollPosition } from '@/reducers/general/scrollPosition';
import { setUserIPInfo } from '@/reducers/general/userIPInfo';
import { setCurUserGroup } from '@/reducers/general/curUserGroup';
import { USER_GROUPS } from '@/constants/userGroups';
import { addVistitedRoute } from '@/reducers/general/visitedRoutes';

import Loading from '@/baseComponents/Loading';
import Alert from '@/baseComponents/Alert';
import Modal from '@/baseComponents/Modal';

import styles from './BaseTemplate.module.scss';

const BaseTemplate = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const profile = useSelector((state) => state.profile);
  const chatSocket = useSelector((state) => state.chatSocket);

  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [sendGetIPReq, setSendGetIPReq] = useState(false);
  const [sendGetCurUserReq, setSendGetCurUserReq] = useState(false);
  const [sendAuthenticatedReq, setSendAuthenticatedReq] = useState(false);
  const [sendrefreshTokenReq, setSendRefreshTokenReq] = useState(false);
  const [sendRepeatedrefreshTokenReq, setSendRepeatedRefreshTokenReq] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setTimeout(() => {
        dispatch(setScrollPosition(window.scrollY));
      }, 200);
    });
  }, []);

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

  const { data: ipData, error: ipError } = useApiCalls({
    sendReq: sendGetIPReq,
    setSendReq: setSendGetIPReq,
    method: 'GET',
    url: GET_IP_INFO_ROUTE,
    useDefaultHeaders: false,
    showLoading: false,
    showErrorMessage: false
  });
  useEffect(() => {
    if (USE_GET_IP_INFO_TOKEN) {
      setSendGetIPReq(true);
    }
  }, [USE_GET_IP_INFO_TOKEN]);
  useEffect(() => {
    if (ipData) {
      dispatch(setUserIPInfo(ipData));
    }
  }, [ipData]);

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
    if (refreshError) {
      removeLocalStorage('access_token');
      removeLocalStorage('refresh_token');
    }
  }, [refreshError]);

  useEffect(() => {
    if (chatSocket.usePublicChat && accessToken) {
      const publicChatSocket = new WebSocket(
        `${websocketApiRoute(WEBSOCKET_CHAT_API_ROUTE)}?token=${accessToken}`
      );
      dispatch(setPublicChatSocket(publicChatSocket));
    }
  }, [chatSocket.usePublicChat, accessToken]);

  useEffect(() => {
    if (chatSocket?.usePrivateChat && accessToken) {
      const privateChatSocket = new WebSocket(
        `${websocketApiRoute(WEBSOCKET_PRIVATE_CHAT_API_ROUTE)}?token=${refreshData['access']}`
      );
      dispatch(setPrivateChatSocket(privateChatSocket));
    }
  }, [chatSocket.usePrivateChat, accessToken]);

  useEffect(() => {
    if (chatSocket?.publicChatSocket) {
      chatSocketEventHandler(chatSocket.publicChatSocket);
    }
    if (chatSocket?.privateChatSocket) {
      chatSocketEventHandler(chatSocket.privateChatSocket);
    }
  }, [chatSocket]);

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

  useEffect(() => {
    if (profile?.user?.groups?.includes(USER_GROUPS.APP_ADMIN)) {
      dispatch(setCurUserGroup(USER_GROUPS.APP_ADMIN));
    }
  }, [profile]);

  // -----------------------------------------------
  // -----------------------------------------------
  useEffect(() => {
    if (router?.isReady && router?.asPath) {
      dispatch(addVistitedRoute(router.asPath));
    }
  }, [router]);

  return (
    <>
      {loading > 0 ? <Loading /> : ''}
      <Alert />
      <Modal />
      <Div className="appContainer">{children}</Div>
    </>
  );
};

export default BaseTemplate;
