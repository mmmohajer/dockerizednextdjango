import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import RegisterComponent from '@/baseComponents/RegisterComponent';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <RegisterComponent />
      </Seo>
    </PublicRoute>
  );
};

export default Index;
