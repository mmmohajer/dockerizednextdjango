import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './LimitedSwipeableSlider.module.scss';

const LimitedSwipeableSlider = ({
  mustShowSlider = false,
  setMustShowSlider = null,
  isCenteralized = true,
  moveLeft = false,
  setMoveLeft = null,
  moveRight = false,
  setMoveRight = null,
  moveStep,
  translateX,
  setTranslateX,
  children,
  className,
  makeUnlimited = false,
  currentActiveIdx = 0,
  setCurrentActiveIdx = null,
  nextActiveIdx = null,
  setNextActiveIdx = null,
  numberOfItems = 1,
  ...props
}) => {
  const parentRef = useRef();

  const [moveStepVal, setMoveStepVal] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const [parentScrollWidth, setParentScrollWidth] = useState(0);
  const [transitionClassName, setTransitionClassName] = useState('tranistion1');

  const determineActiveIdx = (direction) => {
    if (currentActiveIdx === numberOfItems - 1 && direction === 'right') {
      return 0;
    } else if (currentActiveIdx === 0 && direction === 'left') {
      return numberOfItems - 1;
    } else if (direction === 'left') {
      return currentActiveIdx - 1;
    } else if (direction === 'right') {
      return currentActiveIdx + 1;
    }
  };

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
          if (setCurrentActiveIdx) {
            setCurrentActiveIdx(determineActiveIdx('left'));
          }
        }
      }
      setMoveLeft(false);
    }
  }, [moveLeft, parentWidth, parentScrollWidth, setCurrentActiveIdx]);

  useEffect(() => {
    if (moveRight) {
      if (parentWidth && parentScrollWidth && mustShowSlider) {
        if (-translateX + parentWidth < parentScrollWidth) {
          setTranslateX(translateX - moveStepVal);
          if (setCurrentActiveIdx) {
            setCurrentActiveIdx(determineActiveIdx('right'));
          }
        } else {
          if (makeUnlimited) {
            setTransitionClassName('noTransition');
            setTranslateX(0);
            if (setCurrentActiveIdx) {
              setCurrentActiveIdx(0);
            }
            setTimeout(() => {
              setTransitionClassName('tranistion1');
            }, 100);
          }
        }
      }
      setMoveRight(false);
    }
  }, [moveRight, parentWidth, parentScrollWidth, setCurrentActiveIdx]);

  useEffect(() => {
    setTimeout(() => {
      if (nextActiveIdx !== null && nextActiveIdx !== currentActiveIdx) {
        if (currentActiveIdx < nextActiveIdx) {
          setMoveRight(true);
        }
        if (currentActiveIdx > nextActiveIdx) {
          setMoveLeft(true);
        }
      }
      if (currentActiveIdx === nextActiveIdx) {
        setTimeout(() => {
          setNextActiveIdx(null);
        }, 10);
      }
    }, 100);
  }, [nextActiveIdx, currentActiveIdx]);

  return (
    <>
      <Div
        ref={(el) => (parentRef.current = el)}
        type="flex"
        hAlign={!mustShowSlider && isCenteralized ? 'center' : 'start'}
        className={cx('w-per-100', transitionClassName, className)}
        style={{ transform: `translateX(${translateX}px)` }}
        {...props}>
        {children}
      </Div>
    </>
  );
};

export default LimitedSwipeableSlider;
