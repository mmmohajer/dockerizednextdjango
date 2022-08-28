import React from 'react';
import cx from 'classnames';
import { Div, Paragraph } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <Div>
            <Paragraph>This is the homepage for your new app!</Paragraph>
          </Div>
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
