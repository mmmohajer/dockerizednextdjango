import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, ActivableElement } from 'basedesign-iswad';

import { hideSideBarDashboard } from '@/reducers/general/sidebarDashboardIsActive';

import styles from './SideBarDashboard.module.scss';

const SideBarDashboard = () => {
  const dispatch = useDispatch();
  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);

  return (
    <>
      <ActivableElement
        className={cx(
          'pos-fix pos-fix--lt w-px-300 height-vh-full of-y-auto bgRed',
          styles.dashboard
        )}
        activeClassName={cx(styles.dashboardIsActive)}
        isActive={sideBarDashboardIsActive}
        onClick={() => dispatch(hideSideBarDashboard())}>
        SideBarDashboard
      </ActivableElement>
    </>
  );
};

export default SideBarDashboard;
