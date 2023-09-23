import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RoleBasedRoute';
import Seo from '@/components/Seo';
import AppPageContainer from '@/components/AppPageContainer';

import { USER_GROUPS } from '@/constants/userGroups';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={[USER_GROUPS.APP_ADMIN]}>
      <Seo>
        <AppPageContainer>
          <Div className="bgRed height-vh-full">This is a sample of an admin page</Div>
          <Div className="bgBlue">This is a sample of an admin page</Div>
        </AppPageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
