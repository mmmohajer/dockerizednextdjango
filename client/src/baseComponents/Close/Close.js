import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from './Close.module.scss';

const Close = ({
  type = 1,
  barColor = COLORS.themeThree,
  iconColor = 'white',
  iconBgColor = COLORS.danger,
  barHeight = '50px',
  iconScale = 0.6,
  iconCircleSize = 20,
  className,
  ...props
}) => {
  return (
    <>
      {type === 1 && (
        <Div
          className={cx('pos-rel w-per-100')}
          style={{ backgroundColor: barColor, height: barHeight }}>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx('pos-abs mouse-hand br-rad-per-50', styles.close, className)}
            style={{
              backgroundColor: iconBgColor,
              width: iconCircleSize,
              height: iconCircleSize,
              borderColor: iconBgColor
            }}
            {...props}>
            <Icon type="close" scale={iconScale} color={iconColor} />
          </Div>
        </Div>
      )}
    </>
  );
};

export default Close;
