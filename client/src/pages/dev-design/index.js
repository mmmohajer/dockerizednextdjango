import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import DevDesign from '@/components/DevDesign';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <DevDesign />
    </PublicRoute>
  );
};

export default Index;
