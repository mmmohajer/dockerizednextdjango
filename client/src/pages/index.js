import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Logout from '@/baseComponents/Logout';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import HomePage from '@/components/HomePage';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo title="Home | App">
        <PageContainer pageIdentifier="home" hasStickyHeader={true} changesThePage={false}>
          <HomePage />
          {/* <Div>Hello</Div> */}
          {/* <Logout /> */}
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
