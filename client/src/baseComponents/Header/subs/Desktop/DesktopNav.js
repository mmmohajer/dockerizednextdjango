import React, { useState } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div, NavBar, NavItem, SubNavContainer, SubNavItem } from 'basedesign-iswad';

import { MENU_ITEMS, SUB_MENU_ITEMS } from '@/constants/menuItems';
import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';
import { AUTO_SCROLL_BEHAVIOR } from '@/constants/vars';

import styles from '../../Header.module.scss';

const DesktopNav = ({ changesThePage = true }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const activeMenu = useSelector((state) => state.activeMenu);
  const activeSubMenu = useSelector((state) => state.activeSubMenu);
  const homePageElements = useSelector((state) => state.homePageElements);

  const [hoveredSubMenu, setHoveredSubMenu] = useState('');

  return (
    <>
      <NavBar type="flex" className={cx('text-center transition1 HeaderMobNavContainerZIndex')}>
        {MENU_ITEMS?.map((item, idx) => (
          <NavItem
            key={idx}
            isActive={activeMenu === item.identifier}
            className={cx('mr2 mouse-hand textWhite pos-rel', styles.desktopNavItem)}
            activeClassName={cx('textThemeFive')}
            onClick={() => {
              if (!item?.hasSubMenu) {
                dispatch(setActiveMenu(item.identifier));
                dispatch(setActiveSubMenu(''));
                if (changesThePage) {
                  router.push(item?.to);
                } else {
                  homePageElements[item.identifier]?.scrollIntoView(AUTO_SCROLL_BEHAVIOR);
                }
              }
            }}
            onMouseOver={() => {
              if (item?.hasSubMenu) {
                setHoveredSubMenu(item.identifier);
              }
            }}
            onMouseLeave={() => setHoveredSubMenu('')}>
            <Div className={cx(styles.desktopNavItemTitle)}>{item.title}</Div>
            {item?.hasSubMenu ? (
              <SubNavContainer
                isActive={hoveredSubMenu === item.identifier}
                className={cx('px1', styles.desktopNavItemSubNavContainer)}
                style={{
                  left: `${item?.submenuTranslteX}` || '0px',
                  width: `${item?.subMenuWidth}` || '300px'
                }}
                onMouseOver={() => {
                  if (item?.hasSubMenu) {
                    setHoveredSubMenu(item.identifier);
                  }
                }}
                onMouseLeave={() => setHoveredSubMenu('')}>
                <Div style={{ height: '5px' }} />
                <Div className="bgThemeOne p2">
                  {SUB_MENU_ITEMS[item.identifier]?.map((subItem, subIdx) => (
                    <SubNavItem
                      className="mouse-hand p1 flex flex--jc--center textWhite"
                      key={subIdx}
                      isActive={
                        activeMenu === item.identifier && activeSubMenu === subItem.identifier
                      }
                      activeClassName={cx('textThemeFive')}>
                      <Div
                        className={cx(styles.desktopNavItemSubNavItemTitle)}
                        onClick={() => {
                          dispatch(setActiveMenu(item.identifier));
                          dispatch(setActiveSubMenu(subItem.identifier));
                          setHoveredSubMenu('');
                          if (changesThePage) {
                            router.push(subItem?.to);
                          } else {
                            homePageElements[subItem.identifier]?.scrollIntoView(
                              AUTO_SCROLL_BEHAVIOR
                            );
                          }
                        }}>
                        {subItem.title}
                      </Div>
                    </SubNavItem>
                  ))}
                </Div>
              </SubNavContainer>
            ) : (
              ''
            )}
          </NavItem>
        ))}
      </NavBar>
    </>
  );
};

export default DesktopNav;
