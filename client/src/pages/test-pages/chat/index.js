import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AuthRoute from '@/components/AuthRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import PublicChat from '@/components/PublicChat';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <AuthRoute>
      <Seo>
        <PageContainer>
          <PublicChat />
        </PageContainer>
      </Seo>
    </AuthRoute>
  );
};

export default Index;
