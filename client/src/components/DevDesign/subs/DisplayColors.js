import React from 'react';
import cx from 'classnames';
import { Div, Text } from 'basedesign-iswad';

import { COLORS } from '@/constants/vars';

import styles from '../DevDesign.module.scss';

function DisplayColors() {
  return (
    <>
      <Div type="flex" className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {Object.keys(COLORS).map((c, idx) => (
          <Div type="flex" vAlign="center" hAlign="center" key={idx} className="">
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              style={{ backgroundColor: COLORS[c] }}
              className="w-px-150 height-px-150">
              <Text className="bgWhite">{c}</Text>
            </Div>
          </Div>
        ))}
      </Div>
    </>
  );
}

export default DisplayColors;
