import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Paragraph } from 'basedesign-iswad';
import Router from 'next/router';

import { USER_GROUPS } from '@/constants/userGroups';
import { isLoading, isLoaded } from '@/reducers/general/loading';

import styles from '../RoleBasedRoute.module.scss';

const SubscriberRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const profile = useSelector((state) => state.profile);

  const [isSubscriber, setIsSubscriber] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (isAuthenticated?.isChecked && !isAuthenticated?.authenticated) {
      setIsSubscriber(false);
      setIsChecked(true);
      dispatch(isLoaded());
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (profile) {
      dispatch(isLoading());
      if (profile?.user?.groups) {
        if (profile.user.groups?.includes(USER_GROUPS.SUBSCRIBER)) {
          setIsSubscriber(true);
          setIsChecked(true);
        } else {
          setIsSubscriber(false);
        }
        dispatch(isLoaded());
      }
      setTimeout(() => {
        setIsChecked(true);
        dispatch(isLoaded());
      }, 2000);
    }
  }, [profile]);

  useEffect(() => {
    if (isChecked && !isSubscriber) {
      let currentTime = time;
      if (time > 0) {
        setTimeout(() => {
          currentTime -= 1;
          setTime(currentTime);
        }, 1000);
      }
      if (time === 0) {
        Router.push('/');
      }
    }
  }, [isChecked, isSubscriber, time]);

  return (
    <>
      {isChecked && isSubscriber ? children : ''}
      {isChecked && !isSubscriber ? (
        <Div>
          <Paragraph> The content of this page is private</Paragraph>
          <Paragraph>You will be redirected to home page in {time}s</Paragraph>
        </Div>
      ) : (
        ''
      )}
    </>
  );
};

export default SubscriberRoute;
