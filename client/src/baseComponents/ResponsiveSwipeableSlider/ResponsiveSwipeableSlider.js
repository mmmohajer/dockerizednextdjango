import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import Swipe from 'react-easy-swipe';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import styles from './ResponsiveSwipeableSlider.module.scss';

const ResponsiveSwipeableSlider = ({
  moveLeft,
  setMoveLeft,
  moveRight,
  setMoveRight,
  moveToItemWithNum,
  setMoveToItemWithNum,
  mustShowSlider,
  setMustShowSlider,
  isDraggable = true,
  swipeTolerance = 1,
  minXDifferenceToMove = 20,
  setUserSwiped,
  children
}) => {
  const parentRef = useRef();
  const childrenRefs = useRef(new Array());

  const [arrayOfWidths, setArrayOfWidths] = useState([]);
  const [totalWidth, setTotalWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [hasNoTransitionEffect, setHasNoTransitionEffect] = useState(true);
  const [parentWidth, setParentWidth] = useState(0);
  const [xStart, setXStart] = useState(0);
  const [xEnd, setXEnd] = useState(-100000);

  const handleDragStart = (e) => {
    setXStart(e.clientX);
  };

  const handleDragEnd = (e) => {
    setXEnd(e.clientX);
  };

  const moveRightHandler = () => {
    if (activeIdx < arrayOfWidths?.length - 1) {
      setTranslateX(translateX + arrayOfWidths[activeIdx]);
      setTimeout(() => {
        setMoveRight(false);
        setActiveIdx(activeIdx + 1);
      }, 10);
    } else {
      setHasNoTransitionEffect(true);
      setTranslateX(totalWidth - arrayOfWidths[arrayOfWidths.length - 1]);
      setTimeout(() => {
        setHasNoTransitionEffect(false);
        setTranslateX(totalWidth);
        setTimeout(() => {
          setMoveRight(false);
          setActiveIdx(0);
        }, 10);
      }, 10);
    }
  };

  const moveLeftHandler = () => {
    if (activeIdx > 0) {
      setTranslateX(translateX - arrayOfWidths[activeIdx]);
      setTimeout(() => {
        setMoveLeft(false);
        setActiveIdx(activeIdx - 1);
      }, 10);
    } else {
      setHasNoTransitionEffect(true);
      setTranslateX(totalWidth);
      setTimeout(() => {
        setHasNoTransitionEffect(false);
        setTranslateX(totalWidth - arrayOfWidths[arrayOfWidths.length - 1]);
        setTimeout(() => {
          setMoveLeft(false);
          setActiveIdx(arrayOfWidths.length - 1);
        }, 10);
      }, 10);
    }
  };

  const moveToItemWithNumHandler = () => {
    if (activeIdx < moveToItemWithNum) {
      moveRightHandler();
    } else if (activeIdx > moveToItemWithNum) {
      moveLeftHandler();
    } else {
      setMoveToItemWithNum(false);
    }
  };

  useEffect(() => {
    if (parentRef?.current?.clientWidth) {
      setParentWidth(parentRef.current.clientWidth);
    }
  }, [parentRef?.current?.clientWidth]);

  useEffect(() => {
    if (totalWidth <= parentWidth) {
      setMustShowSlider(false);
    } else {
      setMustShowSlider(true);
    }
  }, [parentWidth, totalWidth]);

  useEffect(() => {
    if (childrenRefs?.current) {
      let localArrayOfWidths = [];
      let localTotalWidth = 0;
      childrenRefs.current?.forEach((item) => {
        localArrayOfWidths.push(item?.clientWidth);
        localTotalWidth += item?.clientWidth;
      });
      setTotalWidth(localTotalWidth);
      setHasNoTransitionEffect(true);
      setTranslateX(localTotalWidth);
      setArrayOfWidths(localArrayOfWidths);
      setTimeout(() => {
        setHasNoTransitionEffect(false);
      }, 10);
    }
  }, [childrenRefs?.current]);

  useEffect(() => {
    if (moveRight && mustShowSlider) {
      moveRightHandler();
    }
  }, [moveRight, activeIdx, arrayOfWidths, mustShowSlider]);

  useEffect(() => {
    if (moveLeft && mustShowSlider) {
      moveLeftHandler();
    }
  }, [moveLeft, activeIdx, arrayOfWidths, mustShowSlider]);

  useEffect(() => {
    if (moveToItemWithNum && mustShowSlider) {
      moveToItemWithNumHandler();
    }
  }, [moveToItemWithNum, activeIdx, arrayOfWidths, mustShowSlider]);

  useEffect(() => {
    if (xEnd > -100000) {
      if (xEnd - xStart >= minXDifferenceToMove) {
        setMoveLeft(true);
        setUserSwiped(true);
      }
      if (xEnd - xStart <= -minXDifferenceToMove) {
        setMoveRight(true);
        setUserSwiped(true);
      }
    }
  }, [xEnd]);

  return (
    <>
      <Div className={cx('w-per-100 of-x-hidden')} ref={(el) => (parentRef.current = el)}>
        {mustShowSlider ? (
          <Div
            type="flex"
            hAlign="center"
            style={{
              width: totalWidth ? totalWidth * 3 : 0,
              transform: translateX ? `translateX(${-translateX}px)` : `translateX(${0}px)`
            }}
            className={cx(
              'w-per-100',
              styles.sliderContainer,
              hasNoTransitionEffect && 'noTransition'
            )}>
            {children.map((item, idx) => (
              <Div key={idx}>
                <Swipe
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  draggable={isDraggable}
                  onSwipeRight={() => {
                    setMoveLeft(true);
                    setUserSwiped(true);
                  }}
                  onSwipeLeft={() => {
                    setMoveRight(true);
                    setUserSwiped(true);
                  }}
                  tolerance={swipeTolerance}>
                  {item}
                </Swipe>
              </Div>
            ))}
            {children.map((item, idx) => (
              <Div key={idx} ref={(el) => childrenRefs.current.push(el)}>
                <Swipe
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  draggable={isDraggable}
                  onSwipeRight={() => {
                    setMoveLeft(true);
                    setUserSwiped(true);
                  }}
                  onSwipeLeft={() => {
                    setMoveRight(true);
                    setUserSwiped(true);
                  }}
                  tolerance={swipeTolerance}>
                  {item}
                </Swipe>
              </Div>
            ))}
            {children.map((item, idx) => (
              <Div key={idx}>
                <Swipe
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  draggable={isDraggable}
                  onSwipeRight={() => {
                    setMoveLeft(true);
                    setUserSwiped(true);
                  }}
                  onSwipeLeft={() => {
                    setMoveRight(true);
                    setUserSwiped(true);
                  }}
                  tolerance={swipeTolerance}>
                  {item}
                </Swipe>
              </Div>
            ))}
          </Div>
        ) : (
          <Div type="flex" hAlign="center" className={cx('w-per-100')}>
            {children.map((item, idx) => (
              <Div key={idx} ref={(el) => childrenRefs.current.push(el)}>
                {item}
              </Div>
            ))}
          </Div>
        )}
      </Div>
    </>
  );
};

export default ResponsiveSwipeableSlider;
