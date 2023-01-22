import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, MobNav, MobNavItem } from 'basedesign-iswad';

import { MENU_ITEMS } from '@/constants/menuItems';
import { setActiveMenu } from '@/reducers/general/activeMenu';
import { hideMobileNav } from '@/reducers/general/mobileNavIsActive';
import { AUTO_SCROLL_BEHAVIOR } from '@/constants/vars';

import Anchor from '@/baseComponents/Anchor';
import AllPageClickable from '@/baseComponents/AllPageClickable';

import styles from '../Header.module.scss';

const MobileNav = ({ changesThePage = true }) => {
  const dispatch = useDispatch();
  const mobileNavIsActive = useSelector((state) => state.mobileNavIsActive);
  const activeMenu = useSelector((state) => state.activeMenu);
  const homePageElements = useSelector((state) => state.homePageElements);

  return (
    <>
      {mobileNavIsActive && <AllPageClickable onClick={() => dispatch(hideMobileNav())} />}
      <MobNav
        type="flex"
        className={cx(
          'w-px-300 text-center bgThemeFour boxShadowType1 transition1 HeaderMobNavContainerZIndex'
        )}
        isActive={mobileNavIsActive}>
        {changesThePage
          ? MENU_ITEMS?.map((item, idx) => (
              <Anchor href={item.to} key={idx} anchorType={0}>
                <MobNavItem
                  isActive={activeMenu === item.identifier}
                  className={cx('p2 mouse-hand textWhite boxShaodwType1', styles.mobileNavItem)}
                  activeClassName={cx(styles.activeMobileNavItem)}
                  onClick={() => {
                    dispatch(setActiveMenu(item.identifier));
                    dispatch(hideMobileNav());
                  }}>
                  {item.title}
                </MobNavItem>
              </Anchor>
            ))
          : MENU_ITEMS?.map((item, idx) => (
              <MobNavItem
                key={idx}
                isActive={activeMenu === item.identifier}
                className={cx('p2 mouse-hand textWhite boxShaodwType1', styles.mobileNavItem)}
                activeClassName={cx(styles.activeMobileNavItem)}
                onClick={() => {
                  homePageElements[item.identifier].scrollIntoView(AUTO_SCROLL_BEHAVIOR);
                  dispatch(hideMobileNav());
                }}>
                {item.title}
              </MobNavItem>
            ))}
      </MobNav>
    </>
  );
};

export default MobileNav;
