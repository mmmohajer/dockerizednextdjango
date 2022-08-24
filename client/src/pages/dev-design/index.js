import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/baseComponents/PublicRoute';
import DevDesign from '@/baseComponents/DevDesign';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <DevDesign />
    </PublicRoute>
  );
};

export default Index;
