import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from '../SideBarDashboard.module.scss';

const Separator = () => {
  return (
    <>
      <Div className={cx('w-per-100 bgGrayBright my2', styles.dashboardBreaker)} />
    </>
  );
};

export default Separator;
