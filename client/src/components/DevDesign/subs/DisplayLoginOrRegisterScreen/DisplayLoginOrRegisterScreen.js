import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import LoginOrRegisterScreen from '@/components/SharedComponents/LoginOrRegisterScreen';

import Photo from '@/images/js-Images/app/images/login.png';

import styles from '../../DevDesign.module.scss';

const DisplayLoginOrRegisterScreen = () => {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        vAlign="center"
        hAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <Div className="">
          <LoginOrRegisterScreen mainPhoto={Photo}>
            <Div>Test</Div>
          </LoginOrRegisterScreen>
        </Div>
      </Div>
    </>
  );
};

export default DisplayLoginOrRegisterScreen;
