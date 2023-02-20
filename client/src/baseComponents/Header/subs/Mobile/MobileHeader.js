import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div, HamburgerIcon } from 'basedesign-iswad';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';

import { HAMBURGER_CONFIG } from '../../constants';
import UserManager from '../UserManager';
import MobileNav from './MobileNav';
import styles from '../../Header.module.scss';

const MobileHeader = ({ changesThePage }) => {
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
          <MobileNav changesThePage={changesThePage} />
        </Div>
        <Div
          className="mouse-hand ml4"
          onClick={() => {
            dispatch(setActiveMenu('/home'));
            dispatch(setActiveSubMenu(''));
            if (changesThePage) {
              router.push('/');
            } else {
              window.scrollTo(0, 0);
            }
          }}>
          <Div className="textWhite">Logo</Div>
        </Div>
      </Div>
      <Div>
        <UserManager />
      </Div>
    </>
  );
};

export default MobileHeader;
