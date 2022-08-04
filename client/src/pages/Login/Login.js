import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import PublicRoute from '@/components/PublicRoute';
import LoginComponent from '@/components/Login';
import GoogleAuth from '@/components/GoogleAuth';
import MicrosoftAuth from '@/components/MicrosoftAuth';
import FacebookAuth from '@/components/FacebookAuth';

import styles from './Login.module.scss';

const Login = () => {
  return (
    <PublicRoute>
      <LoginComponent />
      {/* <GoogleAuth /> */}
      {/* <MicrosoftAuth /> */}
      {/* <FacebookAuth /> */}
    </PublicRoute>
  );
};

export default Login;
