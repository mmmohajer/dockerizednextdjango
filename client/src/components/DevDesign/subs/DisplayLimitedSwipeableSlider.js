import React, { useState } from 'react';
import cx from 'classnames';
import Swipe from 'react-easy-swipe';
import { Div } from 'basedesign-iswad';

import LimitedSwipeableSlider from '@/baseComponents/LimitedSwipeableSlider';
import Button from '@/baseComponents/Button';

import styles from '../DevDesign.module.scss';

const DisplayLimitedSwipeableSlider = () => {
  const [mustShowSlider, setMustShowSlider] = useState();
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [curElement, setCurElement] = useState(0);
  const [goToItemWithNum, setGoToItemWithNum] = useState(0);

  return (
    <>
      <Div type="flex" className="w-per-80 bgRed p2 ml-auto mr-auto of-x-hidden">
        <LimitedSwipeableSlider
          mustShowSlider={mustShowSlider}
          setMustShowSlider={setMustShowSlider}
          moveLeft={moveLeft}
          moveRight={moveRight}
          setMoveLeft={setMoveLeft}
          setMoveRight={setMoveRight}
          moveStep={166}
          translateX={translateX}
          setTranslateX={setTranslateX}
          makeUnlimited={true}
          numberOfElements={10}
          curElement={curElement}
          setCurElement={setCurElement}
          goToItemWithNum={goToItemWithNum}
          setGoToItemWithNum={setGoToItemWithNum}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
            <Swipe
              key={idx}
              draggable={false}
              onSwipeRight={() => {
                setMoveLeft(true);
              }}
              onSwipeLeft={() => {
                setMoveRight(true);
              }}
              tolerance={1}>
              <Div className="w-px-150 bgBlue mr2">
                <Div className="w-px-150 bgYellow">{item}</Div>
              </Div>
            </Swipe>
          ))}
        </LimitedSwipeableSlider>
      </Div>
      <Button onClick={() => setMoveRight(true)}>Move Right</Button>
      <Button onClick={() => setMoveLeft(true)}>Move Left</Button>
      <Button onClick={() => setGoToItemWithNum(5)}>Go To 5</Button>
    </>
  );
};

export default DisplayLimitedSwipeableSlider;
