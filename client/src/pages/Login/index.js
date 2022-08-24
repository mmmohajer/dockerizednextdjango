import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import PublicRoute from '@/baseComponents/PublicRoute';
import Seo from '@/baseComponents/Seo';
import LoginComponent from '@/baseComponents/LoginComponent';
import GoogleAuth from '@/baseComponents/GoogleAuth';
// import MicrosoftAuth from '@/baseComponents/MicrosoftAuth';
// import FacebookAuth from '@/baseComponents/FacebookAuth';

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
