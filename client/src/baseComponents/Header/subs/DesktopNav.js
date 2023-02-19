import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, NavBar, NavItem } from 'basedesign-iswad';

import { MENU_ITEMS } from '@/constants/menuItems';
import { setActiveMenu } from '@/reducers/general/activeMenu';
import { AUTO_SCROLL_BEHAVIOR } from '@/constants/vars';

import Anchor from '@/baseComponents/Anchor';

import styles from '../Header.module.scss';

const DesktopNav = ({ changesThePage = true }) => {
  const dispatch = useDispatch();
  const activeMenu = useSelector((state) => state.activeMenu);
  const homePageElements = useSelector((state) => state.homePageElements);

  return (
    <>
      <NavBar type="flex" className={cx('text-center transition1 HeaderMobNavContainerZIndex')}>
        {changesThePage
          ? MENU_ITEMS?.map((item, idx) => (
              <Anchor href={item.to} key={idx} anchorType={0}>
                <NavItem
                  isActive={activeMenu === item.identifier}
                  className={cx('p1 mouse-hand textWhite', styles.desktopNavItem)}
                  activeClassName={cx(styles.activeDesktopNavItem)}
                  onClick={() => dispatch(setActiveMenu(item.identifier))}>
                  {item.title}
                </NavItem>
              </Anchor>
            ))
          : MENU_ITEMS?.map((item, idx) => (
              <NavItem
                key={idx}
                isActive={activeMenu === item.identifier}
                className={cx('p1 mouse-hand textWhite', styles.desktopNavItem)}
                activeClassName={cx(styles.activeDesktopNavItem)}
                onClick={() =>
                  homePageElements[item.identifier]?.scrollIntoView(AUTO_SCROLL_BEHAVIOR)
                }>
                {item.title}
              </NavItem>
            ))}
      </NavBar>
    </>
  );
};

export default DesktopNav;
