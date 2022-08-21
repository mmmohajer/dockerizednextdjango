import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import PublicRoute from '@/components/PublicRoute';
import RegisterComponent from '@/components/RegisterComponent';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <RegisterComponent />
    </PublicRoute>
  );
};

export default Index;
