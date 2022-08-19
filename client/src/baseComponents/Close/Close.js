import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import styles from './Close.module.scss';

const Close = ({ className, ...props }) => {
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx('pos-abs mouse-hand w-px-20 height-px-20', styles.close, className)}
        {...props}>
        <Icon type="close" />
      </Div>
    </>
  );
};

export default Close;
