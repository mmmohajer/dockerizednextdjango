import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, MobNav, MobNavItem } from 'basedesign-iswad';

import { MENU_ITEMS } from '@/constants/menuItems';
import { setActiveMenu } from '@/reducers/general/activeMenu';
import { hideMobileNav } from '@/reducers/general/mobileNavIsActive';

import Anchor from '@/baseComponents/Anchor';
import AllPageClickable from '@/baseComponents/AllPageClickable';

import styles from '../Header.module.scss';

const MobileNav = () => {
  const dispatch = useDispatch();
  const mobileNavIsActive = useSelector((state) => state.mobileNavIsActive);
  const activeMenu = useSelector((state) => state.activeMenu);

  return (
    <>
      {mobileNavIsActive && <AllPageClickable onClick={() => dispatch(hideMobileNav())} />}
      <MobNav
        type="flex"
        className={cx(
          'w-px-300 text-center bgPrimary boxShadowType1 transition1 HeaderMobNavContainerZIndex'
        )}
        isActive={mobileNavIsActive}>
        {MENU_ITEMS?.map((item, idx) => (
          <Anchor href={item.to} key={idx} anchorType={0}>
            <MobNavItem
              isActive={activeMenu === item.identifier}
              className="p2 mouse-hand textWhite hover-bg-themeThree boxShaodwType1"
              activeClassName={cx(styles.activeMobileNavItem)}
              onClick={() => {
                dispatch(setActiveMenu(item.identifier));
                dispatch(hideMobileNav());
              }}>
              {item.title}
            </MobNavItem>
          </Anchor>
        ))}
      </MobNav>
    </>
  );
};

export default MobileNav;
