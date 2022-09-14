import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Paragraph } from 'basedesign-iswad';
import Router from 'next/router';

import styles from './AuthRoute.module.scss';

const AuthRoute = ({ children }) => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [isChecked, setIsChecked] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (isAuthenticated?.isChecked && !isAuthenticated?.authenticated) {
      setIsAuthUser(false);
      setIsChecked(true);
    }
    if (isAuthenticated?.isChecked && isAuthenticated?.authenticated) {
      setIsChecked(true);
      setIsAuthUser(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isChecked && !isAuthUser) {
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
  }, [isChecked, isAuthUser, time]);

  return (
    <>
      {isChecked && isAuthUser ? children : ''}
      {isChecked && !isAuthUser ? (
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

export default AuthRoute;
