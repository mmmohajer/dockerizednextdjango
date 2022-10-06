import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import StripeCheckout from '@/baseComponents/StripeCheckout';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <StripeCheckout use_for_future_payment={false} />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
