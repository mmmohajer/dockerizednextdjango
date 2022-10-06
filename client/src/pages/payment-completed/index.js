import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import PaymentCompleted from '@/components/PaymentCompleted';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <PaymentCompleted use_for_future_payment={false} />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
