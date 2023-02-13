import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AllowedGroupRoute from './subs/AllowedGroupRoute';
import styles from './RoleBasedRoute.module.scss';

const RoleBasedRoute = ({ hasAccessRole, children }) => {
  return (
    <>
      <AllowedGroupRoute allowedGroup={hasAccessRole}>{children}</AllowedGroupRoute>
    </>
  );
};

export default RoleBasedRoute;
