import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';
import Polygon from '@/baseComponents/Polygon';

import styles from './VoteStreakBadge.module.scss';

const VoteStreakBadge = ({ number, scale = 1 }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (number === 0) {
      setText("Let's Vote!");
    } else if (number <= 4) {
      setText('Good Voter');
    } else if (number === 5) {
      setText('Super Voter');
    } else if (number <= 9) {
      setText('Great Voter');
    } else if (number <= 13) {
      setText('Awesome Voter');
    } else if (number <= 17) {
      setText('Fantastic Voter');
    } else if (number <= 25) {
      setText('Amazing Voter');
    }
  }, [number]);

  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx('br-rad-per-50 pos-rel', styles.circleOuter)}
        style={{ width: `${250 * scale}px`, height: `${250 * scale}px` }}>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('br-rad-per-50', styles.circleMiddle)}
          style={{ width: `${225 * scale}px`, height: `${225 * scale}px` }}>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx('br-rad-per-50 pos-rel', styles.circleInner)}
            style={{ width: `${200 * scale}px`, height: `${200 * scale}px` }}>
            <Div
              type="flex"
              direction="vertical"
              hAlign="center"
              distributedBetween
              className="pos-abs pos-abs--center"
              style={{ height: `${120 * scale}px` }}>
              <Div className="f-b textWhite" style={{ fontSize: `${40 * scale}px` }}>
                {number}
              </Div>
              <Div className="f-b textWhite text-upperCase" style={{ fontSize: `${28 * scale}px` }}>
                Months!
              </Div>
            </Div>

            <Div
              type="flex"
              distributedBetween
              className="pos-abs pos-abs--center"
              style={{
                width: `${200 * scale}px`,
                paddingLeft: `${8 * scale}px`,
                paddingRight: `${8 * scale}px`
              }}>
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className=""
                style={{ width: `${20 * scale}px`, height: `${20 * scale}px` }}>
                <Icon type="star" color="white" scale={1.25 * scale} />
              </Div>
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className=""
                style={{ width: `${20 * scale}px`, height: `${20 * scale}px` }}>
                <Icon type="star" color="white" scale={1.25 * scale} />
              </Div>
            </Div>
          </Div>
        </Div>
        <Div
          type="flex"
          vAlign="center"
          className={cx('pos-abs w-per-100')}
          style={{
            bottom: `${5 * scale}px`,
            width: `${275 * scale}px`
          }}>
          <Div
            style={{
              transform: `translate(${20 * scale}px, ${10 * scale}px)`
            }}>
            <Div className="rotate180">
              <Polygon
                type={'service-card-head'}
                width={50 * scale}
                height={40 * scale}
                gradFillType={1}
                text={''}
              />
            </Div>
          </Div>
          <Div
            className={cx(
              'w-per-100 textWhite text-center f-b text-upperCase z-100',
              styles.textContainer
            )}
            style={{
              bottom: `${5 * scale}px`,
              fontSize: `${16 * scale}px`,
              padding: `${8 * scale}px`
            }}>
            {text}
          </Div>
          <Div
            style={{
              transform: `translate(-${20 * scale}px, ${10 * scale}px)`
            }}>
            <Polygon
              type={'service-card-head'}
              width={50 * scale}
              height={40 * scale}
              gradFillType={1}
              text={''}
            />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default VoteStreakBadge;
