import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import ResetPasswordComponent from '@/components/ResetPassword';

import styles from './ResetPassword.module.scss';

const ResetPassword = () => {
  return (
    <PublicRoute>
      <ResetPasswordComponent />
    </PublicRoute>
  );
};

export default ResetPassword;
