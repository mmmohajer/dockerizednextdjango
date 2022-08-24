import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/baseComponents/PublicRoute';
import Seo from '@/baseComponents/Seo';
import DevDesign from '@/baseComponents/DevDesign';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <DevDesign />
      </Seo>
    </PublicRoute>
  );
};

export default Index;
