import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import PublicRoute from '@/components/PublicRoute';
import ActivateUserComponent from '@/components/ActivateUser';

import styles from './ActivateUser.module.scss';

const ActivateUser = () => {
  return (
    <PublicRoute>
      <ActivateUserComponent />
    </PublicRoute>
  );
};

export default ActivateUser;
