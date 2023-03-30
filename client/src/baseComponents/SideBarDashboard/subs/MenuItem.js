import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div } from 'basedesign-iswad';

import { setActiveDashboardMenu } from '@/reducers/general/activeDashboardMenu';

import Icon from '@/baseComponents/Icon';

import styles from '../SideBarDashboard.module.scss';

const MenuItems = ({ menu, ...props }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);
  const activeDashboardMenu = useSelector((state) => state.activeDashboardMenu);

  return (
    <>
      <Div
        type="flex"
        hAlign={sideBarDashboardIsActive ? 'start' : 'center'}
        vAlign="center"
        {...props}
        className="height-px-40">
        <Div
          type="flex"
          className="mouse-hand"
          onClick={() => {
            router.push(menu?.to);
            dispatch(setActiveDashboardMenu(menu?.identifier));
          }}>
          <Div type="flex" vAlign="center" hAlign="center" className="">
            <Icon
              type={menu?.icon}
              scale={1.25}
              color={activeDashboardMenu === menu?.identifier ? 'red' : 'black'}
            />
          </Div>
          {sideBarDashboardIsActive && (
            <Div className={cx('ml1', activeDashboardMenu === menu?.identifier && 'textRed')}>
              {menu?.title}
            </Div>
          )}
        </Div>
      </Div>
    </>
  );
};

export default MenuItems;
