import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, ActivableElement } from 'basedesign-iswad';

import { SIDE_BAR_DASHBOARD_ITEMS } from '@/constants/sideBarDashboardItems';

import Header from './subs/Header';
import MenuItem from './subs/MenuItem';
import Toggler from './subs/Toggler';
import Separator from './subs/Separator';
import styles from './SideBarDashboard.module.scss';

const SideBarDashboard = () => {
  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <ActivableElement
        className={cx(
          'pos-fix pos-fix--lt height-vh-full of-y-auto bgGrayBright flex flex--dir--col flex--jc--between py2',
          styles.dashboard
        )}
        activeClassName={cx(styles.dashboardIsActive)}
        isActive={sideBarDashboardIsActive}>
        <Div>
          <Header />
          <Separator />
          <Div className="px2">
            {SIDE_BAR_DASHBOARD_ITEMS?.map((item, identifier) => {
              if (
                !item?.allowedGroups?.length ||
                (item?.allowedGroups?.length &&
                  item?.allowedGroups?.some((group) => profile?.user?.groups?.includes(group)))
              ) {
                return (
                  <Div className="mb1" key={identifier}>
                    <MenuItem menu={item} />
                  </Div>
                );
              }
            })}
          </Div>
        </Div>
        {/* <Separator /> */}
        <Toggler />
      </ActivableElement>
    </>
  );
};

export default SideBarDashboard;
