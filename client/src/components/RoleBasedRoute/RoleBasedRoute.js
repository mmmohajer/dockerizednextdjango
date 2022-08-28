import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppAdminRoute from './subs/AppAdminRoute';
import SubscriberRoute from './subs/SubscriberRoute';

import { USER_GROUPS } from '@/constants/userGroups';

import styles from './RoleBasedRoute.module.scss';

const RoleBasedRoute = ({ hasAccessRole, children }) => {
  return (
    <>
      {hasAccessRole === USER_GROUPS.APP_ADMIN && <AppAdminRoute>{children}</AppAdminRoute>}
      {hasAccessRole === USER_GROUPS.SUBSCRIBER && <SubscriberRoute>{children}</SubscriberRoute>}
    </>
  );
};

export default RoleBasedRoute;
