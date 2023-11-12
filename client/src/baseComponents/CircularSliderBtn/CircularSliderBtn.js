import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './CircularSliderBtn.module.scss';

const CircularSliderBtn = ({ isActive }) => {
  return (
    <>
      <Div
        className={cx(
          'w-px-20 height-px-20 br-rad-per-50 boxShadowType1',
          isActive ? 'bgThemeTwo' : 'bgWhite'
        )}
      />
    </>
  );
};

export default CircularSliderBtn;
