import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Paragraph } from 'basedesign-iswad';
import Router from 'next/router';

import DivMinFullHeight from '@/baseComponents/DivMinFullHeight';

import { USER_GROUPS } from '@/constants/userGroups';
import { isLoading, isLoaded } from '@/reducers/general/loading';

import styles from '../RoleBasedRoute.module.scss';

const AllowedGroupRoute = ({ allowedGroup, children }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [isAllowedUser, setIsAllowedUser] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (isAuthenticated?.isChecked && !isAuthenticated?.authenticated) {
      setIsAllowedUser(false);
      setIsChecked(true);
      dispatch(isLoaded());
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (profile) {
      dispatch(isLoading());
      if (profile?.user?.groups) {
        if (profile.user.groups.some((item) => allowedGroup.includes(item))) {
          setIsAllowedUser(true);
          setIsChecked(true);
        } else {
          setIsAllowedUser(false);
          setIsChecked(true);
        }
      }
      dispatch(isLoaded());
    }
  }, [profile]);

  useEffect(() => {
    if (isChecked && !isAllowedUser) {
      let currentTime = time;
      if (time > 0) {
        setTimeout(() => {
          currentTime -= 1;
          setTime(currentTime);
        }, 1000);
      }
      if (time === 0) {
        Router.push('/test-pages/login');
      }
    }
  }, [isChecked, isAllowedUser, time]);

  return (
    <>
      {isChecked && isAllowedUser ? children : ''}
      {isChecked && !isAllowedUser ? (
        <DivMinFullHeight
          direction="vertical"
          type="flex"
          hAlign="center"
          vAlign="center"
          className="">
          <Div className="p4 bgRed textWhite br-rad-px-10">
            <Paragraph className="mb2"> The content of this page is private</Paragraph>
            <Paragraph>You will be redirected to home page in {time}s</Paragraph>
          </Div>
        </DivMinFullHeight>
      ) : (
        ''
      )}
    </>
  );
};

export default AllowedGroupRoute;
