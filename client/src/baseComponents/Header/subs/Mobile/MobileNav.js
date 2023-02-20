import React, { useState } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Div, MobNav, MobNavItem, MobSubNavItem } from 'basedesign-iswad';

import { MENU_ITEMS, SUB_MENU_ITEMS } from '@/constants/menuItems';
import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';
import { hideMobileNav } from '@/reducers/general/mobileNavIsActive';
import { AUTO_SCROLL_BEHAVIOR } from '@/constants/vars';

import HeightTransitionEffect from '@/baseComponents/HeightTransitionEffect';

import AllPageClickable from '@/baseComponents/AllPageClickable';

import styles from '../../Header.module.scss';

const MobileNav = ({ changesThePage = true }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const mobileNavIsActive = useSelector((state) => state.mobileNavIsActive);
  const activeMenu = useSelector((state) => state.activeMenu);
  const activeSubMenu = useSelector((state) => state.activeSubMenu);
  const homePageElements = useSelector((state) => state.homePageElements);

  const [hoveredSubMenu, setHoveredSubMenu] = useState([]);

  return (
    <>
      {mobileNavIsActive && <AllPageClickable onClick={() => dispatch(hideMobileNav())} />}
      <MobNav
        type="flex"
        className={cx('w-px-300 bgThemeOne boxShadowType1 transition1 HeaderMobNavContainerZIndex')}
        isActive={mobileNavIsActive}>
        {MENU_ITEMS?.map((item, idx) => (
          <MobNavItem
            key={idx}
            isActive={activeMenu === item.identifier}
            className={cx('p1 mouse-hand textWhite boxShaodwType1', styles.mobileNavItem)}
            activeClassName={cx('textThemeFive')}
            onClick={() => {
              if (!item?.hasSubMenu) {
                dispatch(hideMobileNav());
                dispatch(setActiveMenu(item.identifier));
                dispatch(setActiveSubMenu(''));
                setHoveredSubMenu([]);
                if (changesThePage) {
                  router.push(item?.to);
                } else {
                  homePageElements[item.identifier]?.scrollIntoView(AUTO_SCROLL_BEHAVIOR);
                }
              } else {
                const localHoveredSubMenu = [...hoveredSubMenu];
                if (localHoveredSubMenu?.includes(item.identifier)) {
                  localHoveredSubMenu = localHoveredSubMenu.filter(
                    (menu) => menu !== item.identifier
                  );
                } else {
                  localHoveredSubMenu?.push(item.identifier);
                }
                setHoveredSubMenu(localHoveredSubMenu);
              }
            }}>
            <Div type="flex">
              <Div className={cx(styles.mobNavItemTitle)}>{item.title}</Div>
            </Div>
            {item?.hasSubMenu && (
              <HeightTransitionEffect
                isActive={hoveredSubMenu?.includes(item.identifier)}
                className="px4">
                {SUB_MENU_ITEMS[item.identifier]?.map((subItem, subIdx) => (
                  <MobSubNavItem
                    className="mt2 textWhite"
                    activeClassName={cx('textThemeFive')}
                    isActive={
                      activeMenu === item.identifier && activeSubMenu === subItem.identifier
                    }
                    key={subIdx}
                    onClick={() => {
                      dispatch(hideMobileNav());
                      dispatch(setActiveMenu(item.identifier));
                      dispatch(setActiveSubMenu(subItem.identifier));
                      setHoveredSubMenu([]);
                      if (changesThePage) {
                        router.push(item?.to);
                      } else {
                        homePageElements[subItem.identifier]?.scrollIntoView(AUTO_SCROLL_BEHAVIOR);
                      }
                    }}>
                    <Div type="flex">
                      <Div className={cx(styles.mobNavItemSubNavItemTitle)}>{subItem.title}</Div>
                    </Div>
                  </MobSubNavItem>
                ))}
              </HeightTransitionEffect>
            )}
          </MobNavItem>
        ))}
      </MobNav>
    </>
  );
};

export default MobileNav;
