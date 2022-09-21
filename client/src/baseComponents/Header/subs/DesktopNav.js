import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, NavBar, NavItem } from 'basedesign-iswad';

import { MENU_ITEMS } from '@/constants/menuItems';
import { setActiveMenu } from '@/reducers/general/activeMenu';

import Anchor from '@/baseComponents/Anchor';

import styles from '../Header.module.scss';

const DesktopNav = () => {
  const dispatch = useDispatch();
  const activeMenu = useSelector((state) => state.activeMenu);

  return (
    <>
      <NavBar type="flex" className={cx('text-center transition1 HeaderMobNavContainerZIndex')}>
        {MENU_ITEMS?.map((item, idx) => (
          <Anchor href={item.to} key={idx} anchorType={0}>
            <NavItem
              isActive={activeMenu === item.identifier}
              className="p2 mouse-hand textWhite hover-bg-themeThree"
              activeClassName={cx(styles.activeDesktopNavItem)}
              onClick={() => dispatch(setActiveMenu(item.identifier))}>
              {item.title}
            </NavItem>
          </Anchor>
        ))}
      </NavBar>
    </>
  );
};

export default DesktopNav;
