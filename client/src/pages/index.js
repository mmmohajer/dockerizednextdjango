import React from 'react';
import cx from 'classnames';
import { Div, Paragraph } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';

import TestForm from '@/components/TestForm';

import styles from './index.module.scss';

function Index() {
  return (
    <PublicRoute>
      <Div>
        <Paragraph>This is the homepage for your new app!</Paragraph>
        <TestForm />
      </Div>
    </PublicRoute>
  );
}

export default Index;
