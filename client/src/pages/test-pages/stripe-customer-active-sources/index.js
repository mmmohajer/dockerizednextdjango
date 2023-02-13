import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import StripeCustomerActivePayments from '@/baseComponents/StripeCustomerActivePayments';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <StripeCustomerActivePayments />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
