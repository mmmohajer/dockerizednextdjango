import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <Div>Unknown404</Div>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
