import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Paragraph } from 'basedesign-iswad';
import Router from 'next/router';

import { USER_GROUPS } from '@/constants/userGroups';
import { isLoading, isLoaded } from '@/reducers/general/loading';

import styles from '../RoleBasedRoute.module.scss';

const AppAdminRoute = ({ children }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [isAppAdmin, setIsAppAdmin] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (isAuthenticated?.isChecked && !isAuthenticated?.authenticated) {
      setIsAppAdmin(false);
      setIsChecked(true);
      dispatch(isLoaded());
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (profile) {
      dispatch(isLoading());
      if (profile?.user?.groups) {
        if (profile.user.groups?.includes(USER_GROUPS.APP_ADMIN)) {
          setIsAppAdmin(true);
          setIsChecked(true);
        } else {
          setIsAppAdmin(false);
        }
        dispatch(isLoaded());
      }
    }
  }, [profile]);

  useEffect(() => {
    if (isChecked && !isAppAdmin) {
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
  }, [isChecked, isAppAdmin, time]);

  return (
    <>
      {isChecked && isAppAdmin ? children : ''}
      {isChecked && !isAppAdmin ? (
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

export default AppAdminRoute;
