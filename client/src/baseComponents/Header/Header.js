import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, Text, HamburgerIcon } from 'basedesign-iswad';

import { LangToFarsi, langToEnglish } from '@/reducers/general/language';

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
          className="w-per-100 height-vh-full bgBlack op-20 pos-fix pos-fix--lt show-flex-in-md-sm-xsm"
          onClick={() => {
            setIconToggler(true);
            setTimeout(() => {
              setIconToggler(false);
            }, [500]);
            setMobMenuIsActive(false);
          }}></Div>
      )}
      <Div type="flex" vAlign="center" distributedBetween className="pr2 pt1 pb1 bgThemeThree">
        <Div className="ml3 textWhite">Base Design</Div>

        {/* DESKTOP NAVBAR */}
        <Div className="show-flex-in-lg">
          <Div>
            <DesktopNav MENUES={MENU_ITEMS} />
          </Div>
        </Div>

        <Div type="flex" direction="horizontal" hAlign="center" vAlign="center">
          {/* LANGUAGE SELECTION*/}

          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="min-w-px-90 height-px-40 bgThemeFour textThemeThree f-b br-rad-px-5 englishFont">
            <Div className="mouse-hand" onClick={() => dispatch(langToEnglish())}>
              {language === 'fa' && <Text>English</Text>}
            </Div>
            <Div className="mouse-hand" onClick={() => dispatch(LangToFarsi())}>
              {language === 'en' && <Text>فارسی</Text>}
            </Div>
          </Div>
          {/* HABURGER MENU */}
          <Div
            className={cx(
              'show-flex-in-md-sm-xsm w-per-100 flex flex--jc--between flex--ai--center pl2 pr2'
            )}>
            {showHamburgerIcon ? (
              <Div className="z-100000">
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
              className={cx(
                'flex flex--dir--col z-10000 iswad_mobNav pos-abs',
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
