import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from './Close.module.scss';

const Close = ({ type = 1, className, ...props }) => {
  return (
    <>
      {type === 1 && (
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('pos-abs mouse-hand br-rad-per-50', styles.close, className)}
          {...props}>
          <Icon type="close" scale={0.6} color={COLORS.themeOne} />
        </Div>
      )}
      {type === 2 && (
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('pos-abs mouse-hand br-rad-per-50', styles.close2, className)}
          {...props}>
          <Icon type="close" scale={0.5} color={COLORS.themeOne} />
        </Div>
      )}
    </>
  );
};

export default Close;
