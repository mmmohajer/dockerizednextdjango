import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Ring } from 'basedesign-iswad';

import styles from './CircularProgressBar.module.scss';

const CircularProgressBar = ({
  percentage = 100,
  outerCircleSize = 200,
  innerCircleSize = 180,
  emptyBgColor = 'green',
  filledBgColor = 'blue',
  innerSecBgColor = 'white',
  containerUID = 'SampleCircularProgressBar',
  showDefaultPercentageText = true,
  innerSectionComp = null
}) => {
  const barRef = useRef();
  const scrollPosition = useSelector((state) => state.scrollPosition);

  const [percentageVal, setPercentageVal] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (barRef?.current) {
      if (
        barRef.current.getBoundingClientRect().bottom - window.innerHeight <= 0 &&
        !showAnimation
      ) {
        setShowAnimation(true);
      }
    }
  }, [scrollPosition, barRef, showAnimation]);

  useEffect(() => {
    if (percentageVal < percentage && showAnimation) {
      if (percentageVal >= 10) {
        setTimeout(() => {
          setPercentageVal(percentageVal + 1);
        }, 10);
      } else {
        setPercentageVal(percentageVal + 1);
      }
    }
  }, [percentageVal, percentage, showAnimation]);

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
      <Div type="flex" ref={(el) => (barRef.current = el)}>
        <Div className={cx(styles.ringContainer)}>
          <Ring
            percentage={percentageVal}
            cssConfig={CSS_CONFIG}
            showDefaultPercentageText={showDefaultPercentageText}
            containerUID={containerUID}
            outerCircleClassName=""
            innerCircleClassName=""
            defaultPercentageTextClassName={cx('fs-px-28', styles.percentageTextContainer)}
            innerSectionComp={innerSectionComp}
            className={cx(styles.ringContainer)}
          />
        </Div>
      </Div>
    </>
  );
};

export default CircularProgressBar;
