import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import RoleBasedRoute from '@/components/RoleBasedRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import ApiDoc from '@/components/ApiDoc';

import { USER_GROUPS } from '@/constants/userGroups';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={[USER_GROUPS.APP_ADMIN, USER_GROUPS.DEVELOPER]}>
      <Seo>
        <PageContainer hasHeader={false} hasFooter={false} pageDashboardIdentifier="api-doc">
          <ApiDoc />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
