import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RoleBasedRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import { USER_GROUPS } from '@/constants/userGroups';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={USER_GROUPS.APP_ADMIN}>
      <Seo>
        <PageContainer>
          <Div>This is a sample of an admin page</Div>
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
