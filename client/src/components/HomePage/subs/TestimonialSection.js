import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, LimitedSwipableSlider, LimitedSwipableSliderItem } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';
import Icon from '@/baseComponents/Icon';

import { lgDesignSize } from '@/constants/vars';

import { TESTIMONIALS } from '../constants';
import styles from '../HomePage.module.scss';

const TestimonialSection = () => {
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(1);
  const [itemNumber, setItemNumber] = useState(1);
  const [showLeftBtn, setShowLeftBtn] = useState(true);
  const [showRightBtn, setShowRightBtn] = useState(true);

  useEffect(() => {
    if (itemNumber === 1) {
      setShowLeftBtn(false);
    } else {
      setShowLeftBtn(true);
    }
    if (itemNumber <= TESTIMONIALS?.length - 1) {
      setShowRightBtn(true);
    } else {
      setShowRightBtn(false);
    }
  }, [itemNumber, TESTIMONIALS]);

  return (
    <>
      <Div className={cx('w-per-100 ml-auto mr-auto p2')}>
        <LimitedSwipableSlider
          moveRight={moveRight}
          setMoveRight={setMoveRight}
          moveLeft={moveLeft}
          setMoveLeft={setMoveLeft}
          moveToItemWithNum={moveToItemWithNum}
          setMoveToItemWithNum={setMoveToItemWithNum}
          transitionDuration={0.25}
          transition_timing_function="ease-in"
          sliderContainerWidthMultiplier={4.5}
          containerUID="testsample">
          {TESTIMONIALS?.map((testimonialObj, idx, row) => (
            <LimitedSwipableSliderItem key={idx} className={cx('w-per-100 mr1')}>
              <Div className="w-per-100">
                <Card
                  type="testimonial"
                  quote={testimonialObj.quote}
                  photo={testimonialObj?.photo}
                  name={testimonialObj.name}
                  career={testimonialObj?.career}
                  email={testimonialObj?.email}
                />
              </Div>
            </LimitedSwipableSliderItem>
          ))}
        </LimitedSwipableSlider>
        <Div type="flex" hAlign="center" className="mt2" showIn={lgDesignSize}>
          {showLeftBtn && (
            <Div type="flex">
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className="bgBlue mr2 w-px-30 height-px-30 br-rad-per-50 boxShadowType1 bgThemeOne mouse-hand"
                onClick={() => {
                  setMoveLeft(true);
                  setItemNumber(itemNumber - 1);
                }}>
                <Icon type="angleLeft" scale={1} color="white" />
              </Div>
            </Div>
          )}
          {showRightBtn && (
            <Div type="flex">
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className="bgBlue w-px-30 height-px-30 br-rad-per-50 boxShadowType1 bgThemeOne mouse-hand"
                onClick={() => {
                  setMoveRight(true);
                  setItemNumber(itemNumber + 1);
                }}>
                <Icon type="angleRight" scale={1} color="white" />
              </Div>
            </Div>
          )}
        </Div>
      </Div>
    </>
  );
};

export default TestimonialSection;
