import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import PublicRoute from '@/baseComponents/PublicRoute';
import RegisterComponent from '@/baseComponents/RegisterComponent';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <RegisterComponent />
    </PublicRoute>
  );
};

export default Index;
