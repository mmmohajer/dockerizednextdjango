import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/baseComponents/PublicRoute';
import Seo from '@/baseComponents/Seo';
import ResetPasswordComponent from '@/baseComponents/ResetPassword';

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
