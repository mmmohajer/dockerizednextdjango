import React from 'react';
import cx from 'classnames';
import { Div, Paragraph } from 'basedesign-iswad';

import Seo from '@/baseComponents/Seo';
import PublicRoute from '@/baseComponents/PublicRoute';

import styles from './index.module.scss';

function Index() {
  return (
    <PublicRoute>
      <Seo>
        <Div>
          <Paragraph>This is the homepage for your new app!</Paragraph>
        </Div>
      </Seo>
    </PublicRoute>
  );
}

export default Index;
