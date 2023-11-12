import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import WebUser from './WebUser';
import AppUser from './AppUser';
import styles from '../Header.module.scss';

const UserManager = ({ isAppPage }) => {
  return <>{!isAppPage ? <WebUser /> : <AppUser />}</>;
};

export default UserManager;
