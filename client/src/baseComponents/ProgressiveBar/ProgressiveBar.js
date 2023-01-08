import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import styles from './ProgressiveBar.module.scss';

const ProgressiveBar = ({ percentage, title, className, ...props }) => {
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
  }, [scrollPosition, barRef]);

  useEffect(() => {
    if (percentageVal < percentage && showAnimation) {
      setTimeout(() => {
        setPercentageVal(percentageVal + 1);
      }, 10);
    }
  }, [percentageVal, percentage, showAnimation]);
  return (
    <>
      <Div className={cx('w-per-100', className)} {...props} ref={(el) => (barRef.current = el)}>
        <Div type="flex" vAlign="center" className="">
          <Div style={{ width: `${percentage}%` }} className="pl1">
            {title}
          </Div>
          <Div className="">{percentageVal}%</Div>
        </Div>
        <Div className="w-per-100 boxShadowType1 bgThemeFour height-px-20 br-rad-px-10 of-hidden">
          <Div style={{ width: `${percentageVal}%` }} className="bgThemeOne height-px-20"></Div>
        </Div>
      </Div>
    </>
  );
};

export default ProgressiveBar;
