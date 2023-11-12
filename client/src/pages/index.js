import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import RoleBasedRoute from '@/components/RoleBasedRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

import styles from './index.module.scss';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo title="Mohammad Mohajer">
        <PageContainer
          pageIdentifier="home"
          // pageSubNavIdentifier=""
          // pageDashboardIdentifier=""
          hasHeader={true}
          hasFooter={true}
          hasStickyHeader={false}
          hasStickyFooter={false}
          // hasSideBarDashboard={true}
          changesThePage={false}>
          <Div className="maxContainerWidth px2">HomePage</Div>
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
