import React from 'react';
import cx from 'classnames';

import PublicRoute from '@/baseComponents/PublicRoute';
import ActivateUserComponent from '@/baseComponents/ActivateUser';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <ActivateUserComponent />
    </PublicRoute>
  );
};

export function getStaticParams() {
  return ['token'];
}

export default Index;
