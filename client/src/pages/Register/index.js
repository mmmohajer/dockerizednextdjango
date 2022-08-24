import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import PublicRoute from '@/baseComponents/PublicRoute';
import Seo from '@/baseComponents/Seo';
import RegisterComponent from '@/baseComponents/RegisterComponent';

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
