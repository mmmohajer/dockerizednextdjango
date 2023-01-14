import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from './IconHoverEffect.module.scss';

const IconHoverEffect = ({
  normalColor = COLORS.themeOne,
  hoverColor = COLORS.themeFour,
  iconType,
  iconScale = 1,
  className,
  ...props
}) => {
  const [iconColor, setIconColor] = useState(normalColor);
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx('mouse-hand', className)}
        {...props}>
        <Icon
          type={iconType}
          color={iconColor}
          scale={iconScale}
          onMouseLeave={() => setIconColor(normalColor)}
          onMouseEnter={() => setIconColor(hoverColor)}
        />
      </Div>
    </>
  );
};

export default IconHoverEffect;
