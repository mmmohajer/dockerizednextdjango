import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, HamburgerIcon } from 'basedesign-iswad';
import Router from 'next/router';
import Image from 'next/image';

import { lgDesignSize, smDesignSize } from '@/constants/vars';
import { toggleMobileNav } from '@/reducers/general/mobileNavIsActive';

import { HAMBURGER_CONFIG } from './constants';
import DesktopNav from './subs/DesktopNav';
import MobileNav from './subs/MobileNav';
import styles from './Header.module.scss';

import Logo from '@/images/js-Images/general/Mohammad-white-logo.png';

const Header = ({ hasStickyHeader, changesThePage = true }) => {
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
        className={cx(
          'w-per-100 bgThemeOne p2',
          hasStickyHeader && 'pos-fix pos-fix--lt headerZIndex',
          styles.headerContainer
        )}>
        <Div
          className="mouse-hand"
          onClick={() => {
            if (changesThePage) {
              Router.push('/');
            } else {
              window.scrollTo(0, 0);
            }
          }}>
          <Image src={Logo} width={80} height={80} />
        </Div>
        <Div type="flex" showIn={lgDesignSize}>
          <DesktopNav changesThePage={changesThePage} />
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
          <MobileNav changesThePage={changesThePage} />
        </Div>
      </Div>
    </>
  );
};

export default Header;
