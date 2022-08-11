import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, NavBar, NavItem } from 'basedesign-iswad';

import { setActiveMenu } from '@/reducers/general/activeMenu';

import styles from '../Header.module.scss';

const DesktopNav = ({ MENUES }) => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.language);
  const activeMenu = useSelector((state) => state.activeMenu);

  return (
    <>
      <NavBar className={cx('pos-rel w-per-100 flex flex--jc--between flex--ai--center px2')}>
        <Div className="flex flex--jc--start flex--ai--center">
          <Div type="flex" className={cx(language === 'fa' && styles.nav)}>
            {MENUES.map(
              (menu, idx) =>
                menu.showInHeader === true && (
                  <NavItem
                    className={cx('px2 flex flex--ai--center textBlack')}
                    onClick={() => {
                      dispatch(setActiveMenu(menu.en));
                    }}
                    isActive={activeMenu === menu.en}
                    key={idx}>
                    <Div className="mouse-hand pb1 pt1">
                      {language === 'en' ? menu.en : menu.fa}
                    </Div>
                  </NavItem>
                )
            )}
          </Div>
        </Div>
      </NavBar>
    </>
  );
};

export default DesktopNav;
