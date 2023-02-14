import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import DivMinFullHeight from '@/baseComponents/DivMinFullHeight';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <DivMinFullHeight type="flex" hAlign="center" vAlign="center" className="fs-r-2">
            <Div className="p4 bgRed textWhite br-rad-px-10">Page Not Found!</Div>
          </DivMinFullHeight>
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
