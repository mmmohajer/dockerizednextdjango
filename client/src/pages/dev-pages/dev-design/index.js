import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import RoleBasedRoute from '@/components/RoleBasedRoute';
import Seo from '@/components/Seo';
import DevDesign from '@/components/DevDesign';
import PageContainer from '@/components/PageContainer';

import { USER_GROUPS } from '@/constants/userGroups';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={[USER_GROUPS.APP_ADMIN, USER_GROUPS.DEVELOPER]}>
      <Seo>
        <PageContainer pageDashboardIdentifier="dev-design">
          <DevDesign />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
