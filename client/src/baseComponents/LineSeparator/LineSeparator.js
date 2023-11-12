import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './LineSeparator.module.scss';

const LineSeparator = ({ color, className }) => {
  return (
    <>
      <Div
        className={cx('w-px-60', className)}
        style={{ backgroundColor: color, height: '3px' }}></Div>
    </>
  );
};

export default LineSeparator;
