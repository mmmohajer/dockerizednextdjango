import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ResetPasswordComponent from '@/baseComponents/ResetPassword';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <ResetPasswordComponent />
      </Seo>
    </PublicRoute>
  );
};

export default Index;
