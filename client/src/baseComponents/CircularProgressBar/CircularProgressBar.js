import React from 'react';
import cx from 'classnames';
import { Div, Ring } from 'basedesign-iswad';

import styles from './CircularProgressBar.module.scss';

const CircularProgressBar = ({
  outerCircleSize = 200,
  innerCircleSize = 180,
  emptyBgColor = 'red',
  filledBgColor = 'blue',
  innerSecBgColor = 'white',
  containerUID = 'SampleCircularProgressBar',
  showDefaultPercentageText = true,
  innerSectionComp = null
}) => {
  const CSS_CONFIG = {
    seg_0_90_bgColor: filledBgColor,
    seg_90_180_bgColor: filledBgColor,
    seg_180_270_bgColor: filledBgColor,
    seg_270_360_bgColor: filledBgColor,
    outer_circle_size: outerCircleSize,
    outer_circle_background_color: emptyBgColor,
    inner_circle_size: innerCircleSize,
    inner_circle_background_color: innerSecBgColor
  };
  return (
    <>
      <Ring
        cssConfig={CSS_CONFIG}
        showDefaultPercentageText={showDefaultPercentageText}
        containerUID={containerUID}
        outerCircleClassName=""
        innerCircleClassName=""
        defaultPercentageTextClassName=""
        innerSectionComp={innerSectionComp}
      />
    </>
  );
};

export default CircularProgressBar;
