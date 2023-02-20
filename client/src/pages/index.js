import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo title="Mohammad Mohajer">
        <PageContainer
          pageIdentifier="home"
          // pageSubNavIdentifier=""
          hasStickyHeader={true}
          changesThePage={false}>
          <Div>Hello</Div>
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
