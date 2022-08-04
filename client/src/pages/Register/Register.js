import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import PublicRoute from '@/components/PublicRoute';
import RegisterComponent from '@/components/Register';

import styles from './Register.module.scss';

const Register = () => {
  return (
    <PublicRoute>
      <RegisterComponent />
    </PublicRoute>
  );
};

export default Register;
