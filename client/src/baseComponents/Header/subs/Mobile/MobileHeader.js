import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div, HamburgerIcon } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';
import { toggleMobileNav } from '@/reducers/general/mobileNavIsActive';

import Logo from '@/images/js-Images/general/Header/Header-Logo.png';

import { HAMBURGER_CONFIG } from '../../constants';
import UserManager from '../UserManager';
import MobileNav from './MobileNav';
import styles from '../../Header.module.scss';

const MobileHeader = ({ changesThePage, headerColorType, isAppPage }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const mobileNavIsActive = useSelector((state) => state.mobileNavIsActive);

  const [showHamburgerIcon, setShowHamburgerIcon] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowHamburgerIcon(true);
    }
  }, []);

  return (
    <>
      <Div type="flex" vAlign="center">
        {showHamburgerIcon && (
          <Div>
            <HamburgerIcon
              cssConfig={HAMBURGER_CONFIG}
              onClick={() => dispatch(toggleMobileNav())}
              closeIcon={mobileNavIsActive}
              openIcon={!mobileNavIsActive}
              containerUID="HamburgerInHeaderID"
            />
          </Div>
        )}
        <Div>
          <MobileNav changesThePage={changesThePage} isAppPage={isAppPage} />
        </Div>
        <Div
          className="mouse-hand ml2"
          onClick={() => {
            dispatch(setActiveMenu('/home'));
            dispatch(setActiveSubMenu(''));
            if (changesThePage) {
              router.push('/');
            } else {
              window.scrollTo(0, 0);
            }
          }}>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx('textWhite pos-rel hasHeaderHeight w-px-80')}>
            <AppImage src={Logo} />
          </Div>
        </Div>
      </Div>
      <Div>
        <UserManager isAppPage={isAppPage} />
      </Div>
    </>
  );
};

export default MobileHeader;
