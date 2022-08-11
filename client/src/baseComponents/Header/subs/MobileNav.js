import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, MobNav, MobNavItem } from 'basedesign-iswad';

import { setActiveMenu } from '@/reducers/general/activeMenu';

import styles from '../Header.module.scss';

const MobileNav = ({ MENUES, setIconToggler, mobMenuIsActive, setMobMenuIsActive }) => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.language);
  const activeMenu = useSelector((state) => state.activeMenu);

  return (
    <>
      <MobNav
        isActive={mobMenuIsActive}
        className={cx('w-px-300 bgInverse pl2 pr2 pt1 pb1 of-y-auto')}>
        {MENUES.map(
          (menu, idx) =>
            menu.showInHeader === true && (
              <MobNavItem
                className={cx('flex flex--ai--center my1 py1 w-per-100')}
                onClick={() => {
                  dispatch(setActiveMenu(menu.en));
                  setIconToggler(true);
                  setTimeout(() => {
                    setIconToggler(false);
                  }, [500]);
                  setMobMenuIsActive(false);
                }}
                isActive={activeMenu === menu.en}
                key={idx}>
                <Div className="mouse-hand">{language === 'en' ? menu.en : menu.fa}</Div>
              </MobNavItem>
            )
        )}
      </MobNav>
    </>
  );
};

export default MobileNav;
