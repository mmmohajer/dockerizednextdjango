import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './PercentageBar.module.scss';

const PercentageBar = ({ percentage }) => {
  return (
    <>
      <Div className="w-per-100 height-px-10 bgWhite  br-rad-px-10 of-hidden br-all-solid-1 br-color-silver">
        <Div className="bgThemeOne height-px-20" style={{ width: `${percentage}%` }}></Div>
      </Div>
    </>
  );
};

export default PercentageBar;
