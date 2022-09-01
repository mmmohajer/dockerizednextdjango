import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import LoginComponent from '@/baseComponents/LoginComponent';
import GoogleAuth from '@/baseComponents/GoogleAuth';
// import MicrosoftAuth from '@/baseComponents/MicrosoftAuth';
// import FacebookAuth from '@/baseComponents/FacebookAuth';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <LoginComponent />
        <GoogleAuth />
        {/* <MicrosoftAuth /> */}
        {/* <FacebookAuth /> */}
      </Seo>
    </PublicRoute>
  );
};

export default Index;
