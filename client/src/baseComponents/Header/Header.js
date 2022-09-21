import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, HamburgerIcon } from 'basedesign-iswad';
import Router from 'next/router';

import { lgDesignSize, smDesignSize } from '@/constants/vars';
import { toggleMobileNav } from '@/reducers/general/mobileNavIsActive';

import { HAMBURGER_CONFIG } from './constants';
import DesktopNav from './subs/DesktopNav';
import MobileNav from './subs/MobileNav';
import styles from './Header.module.scss';

const Header = () => {
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
      <Div
        type="flex"
        distributedBetween
        vAlign="center"
        className={cx('w-per-100 bgPrimary textWhite p2', styles.headerContainer)}>
        <Div className="mouse-hand" onClick={() => Router.push('/')}>
          Pokemon App
        </Div>
        <Div type="flex" showIn={lgDesignSize}>
          <DesktopNav />
        </Div>
        <Div type="flex" showIn={smDesignSize}>
          {showHamburgerIcon && (
            <HamburgerIcon
              cssConfig={HAMBURGER_CONFIG}
              onClick={() => dispatch(toggleMobileNav())}
              closeIcon={mobileNavIsActive}
              openIcon={!mobileNavIsActive}
              containerUID="HamburgerInHeaderID"
            />
          )}
          <MobileNav />
        </Div>
      </Div>
    </>
  );
};

export default Header;
