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
  makeUnlimited = false,
  numberOfElements,
  curElement,
  setCurElement,
  goToItemWithNum,
  setGoToItemWithNum,
  children,
  className,
  ...props
}) => {
  const parentRef = useRef();

  const [moveStepVal, setMoveStepVal] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const [parentScrollWidth, setParentScrollWidth] = useState(0);
  const [transitionClassName, setTransitionClassName] = useState('tranistion1');

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
        if (makeUnlimited) {
          setTransitionClassName('noTransition');
          setTranslateX(-parentScrollWidth / 3);
          setTimeout(() => {
            setTransitionClassName('tranistion1');
          }, 100);
        }
      }
    }
  }, [parentWidth, parentScrollWidth, makeUnlimited]);

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
        if (!makeUnlimited) {
          if (translateX < 0) {
            setTranslateX(translateX + moveStepVal);
            setCurElement(curElement - 1);
          }
        }
        if (makeUnlimited) {
          if (curElement > 0) {
            setTranslateX(translateX + moveStepVal);
            setCurElement(curElement - 1);
          } else {
            setTransitionClassName('noTransition');
            setTranslateX(-parentScrollWidth / 3);
            setTimeout(() => {
              setTransitionClassName('tranistion1');
              setTranslateX(-parentScrollWidth / 3 + moveStepVal);
              setCurElement(numberOfElements - 1);
            }, 100);
          }
        }
      }
      setTimeout(() => {
        setMoveLeft(false);
      }, 10);
    }
  }, [moveLeft, parentWidth, parentScrollWidth, moveStepVal, numberOfElements, makeUnlimited]);

  useEffect(() => {
    if (moveRight) {
      if (parentWidth && parentScrollWidth && mustShowSlider) {
        if (!makeUnlimited) {
          if (-translateX + parentWidth < parentScrollWidth) {
            setTranslateX(translateX - moveStepVal);
            setCurElement(curElement + 1);
          }
        }
        if (makeUnlimited) {
          if (curElement < numberOfElements - 1) {
            setTranslateX(translateX - moveStepVal);
            setCurElement(curElement + 1);
          } else {
            setTransitionClassName('noTransition');
            setTranslateX(-parentScrollWidth / 3 + moveStepVal);
            setTimeout(() => {
              setTransitionClassName('tranistion1');
              setTranslateX(-parentScrollWidth / 3);
              setCurElement(0);
            }, 100);
          }
        }
      }
      setTimeout(() => {
        setMoveRight(false);
      }, 10);
    }
  }, [moveRight, parentWidth, parentScrollWidth, moveStepVal, numberOfElements, makeUnlimited]);

  useEffect(() => {
    if (goToItemWithNum >= 0 && goToItemWithNum < numberOfElements - 1) {
      let diff = goToItemWithNum * moveStepVal;
      if (makeUnlimited) {
        setTranslateX(-parentScrollWidth / 3 - diff);
      } else {
        setTranslateX(-diff);
      }
      setCurElement(goToItemWithNum);
      setTimeout(() => {
        setGoToItemWithNum(-1);
      }, 100);
    }
  }, [goToItemWithNum, moveStepVal, makeUnlimited, parentScrollWidth]);

  return (
    <>
      <Div
        ref={(el) => (parentRef.current = el)}
        type="flex"
        className={cx('w-per-100', transitionClassName, className)}
        style={{ transform: `translateX(${translateX}px)` }}
        {...props}>
        {makeUnlimited && mustShowSlider ? children : ''}
        {children}
        {makeUnlimited && mustShowSlider ? children : ''}
      </Div>
    </>
  );
};

export default LimitedSwipeableSlider;
