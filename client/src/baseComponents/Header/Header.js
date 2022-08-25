import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, HamburgerIcon } from 'basedesign-iswad';
import Image from 'next/image';

import DesktopNav from './subs/DesktopNav';
import MobileNav from './subs/MobileNav';

import { HAMBURGER_CONFIG } from './constants';
import { MENU_ITEMS } from '@/constants/menuItems';

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const [mobMenuIsActive, setMobMenuIsActive] = useState(false);
  const [iconToggler, setIconToggler] = useState(false);
  const [showHamburgerIcon, setShowHamburgerIcon] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowHamburgerIcon(true);
    }
  }, []);

  return (
    <>
      {mobMenuIsActive && (
        <Div
          type="flex"
          showIn={['xs', 'sm', 'md']}
          className="w-per-100 height-vh-full bgBlack op-20 pos-fix pos-fix--lt"
          onClick={() => {
            setIconToggler(true);
            setTimeout(() => {
              setIconToggler(false);
            }, [500]);
            setMobMenuIsActive(false);
          }}></Div>
      )}
      <Div type="flex" vAlign="center" distributedBetween className="pr2 pt1 pb1 bgThemeThree">
        <Div type="flex" vAlign="center" className="ml3 textWhite">
          Base Design
        </Div>

        {/* DESKTOP NAVBAR */}
        <Div type="flex" showIn={['lg']} className="">
          <Div>
            <DesktopNav MENUES={MENU_ITEMS} />
          </Div>
        </Div>

        <Div
          showIn={['xs', 'sm', 'md']}
          type="flex"
          direction="horizontal"
          hAlign="center"
          vAlign="center">
          {/* HABURGER MENU */}
          <Div type="flex" hAlign="center" vAlign="center" className={cx('w-per-100 pl2 pr2')}>
            {showHamburgerIcon ? (
              <Div className="">
                <HamburgerIcon
                  cssConfig={HAMBURGER_CONFIG}
                  onClick={() => setMobMenuIsActive(!mobMenuIsActive)}
                  iconToggler={iconToggler}
                  setIconToggler={setIconToggler}
                />
              </Div>
            ) : (
              ''
            )}
            {/* MOBILE NAVBAR */}
            <Div
              type="flex"
              direction="vertical"
              className={cx(
                'HeaderMobNavContainerZIndex iswad_mobNav pos-abs',
                mobMenuIsActive && 'iswad_mobNav_active'
              )}>
              <MobileNav
                MENUES={MENU_ITEMS}
                mobMenuIsActive={mobMenuIsActive}
                setMobMenuIsActive={setMobMenuIsActive}
                iconToggler={iconToggler}
                setIconToggler={setIconToggler}
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Header;
