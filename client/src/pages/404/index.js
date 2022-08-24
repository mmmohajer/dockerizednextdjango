import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/baseComponents/PublicRoute';
import Seo from '@/baseComponents/Seo';

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
