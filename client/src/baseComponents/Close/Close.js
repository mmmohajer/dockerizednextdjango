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
  iconBgColor = 'transparent',
  barHeight = '40px',
  iconScale = 1,
  iconCircleSize = 20,
  headerText = '',
  className,
  ...props
}) => {
  return (
    <>
      {type === 1 && (
        <Div
          type="flex"
          vAlign="center"
          className={cx('pos-rel w-per-100')}
          style={{ backgroundColor: barColor, height: barHeight }}
          distributedBetween>
          <Div className="textWhite f-b ml2">{headerText}</Div>
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
