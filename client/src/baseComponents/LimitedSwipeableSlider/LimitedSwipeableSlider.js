import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './LimitedSwipeableSlider.module.scss';

const LimitedSwipeableSlider = ({
  mustShowSlider = false,
  setMustShowSlider = null,
  moveLeft = false,
  setMoveLeft = null,
  moveRight = false,
  setMoveRight = null,
  moveStep,
  translateX,
  setTranslateX,
  children,
  className,
  ...props
}) => {
  const parentRef = useRef();

  const [moveStepVal, setMoveStepVal] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const [parentScrollWidth, setParentScrollWidth] = useState(0);

  useEffect(() => {
    if (parentRef?.current) {
      if (parentRef.current.clientWidth) {
        setParentWidth(parentRef.current.clientWidth);
      }
      if (parentRef.current.scrollWidth) {
        setParentScrollWidth(parentRef.current.scrollWidth);
      }
    }
  }, [parentRef?.current, parentRef?.current?.clientWidth, parentRef?.current?.scrollWidth]);

  useEffect(() => {
    if (parentWidth && parentScrollWidth) {
      if (parentWidth >= parentScrollWidth) {
        setMustShowSlider(false);
      } else {
        setMustShowSlider(true);
      }
    }
  }, [parentWidth, parentScrollWidth]);

  useEffect(() => {
    if (moveStep) {
      setMoveStepVal(moveStep);
    } else {
      if (parentWidth) {
        setMoveStepVal(parentWidth);
      }
    }
  }, [moveStep, parentWidth]);

  useEffect(() => {
    if (moveLeft) {
      if (parentWidth && parentScrollWidth && mustShowSlider) {
        if (translateX < 0) {
          setTranslateX(translateX + moveStepVal);
        }
      }
      setTimeout(() => {
        setMoveLeft(false);
      }, 10);
    }
  }, [moveLeft, parentWidth, parentScrollWidth]);

  useEffect(() => {
    if (moveRight) {
      if (parentWidth && parentScrollWidth && mustShowSlider) {
        if (-translateX + parentWidth < parentScrollWidth) {
          setTranslateX(translateX - moveStepVal);
        }
      }
      setTimeout(() => {
        setMoveRight(false);
      }, 10);
    }
  }, [moveRight, parentWidth, parentScrollWidth]);

  return (
    <>
      <Div
        ref={(el) => (parentRef.current = el)}
        type="flex"
        className={cx('tranistion1 w-per-100', className)}
        style={{ transform: `translateX(${translateX}px)` }}
        {...props}>
        {children}
      </Div>
    </>
  );
};

export default LimitedSwipeableSlider;
