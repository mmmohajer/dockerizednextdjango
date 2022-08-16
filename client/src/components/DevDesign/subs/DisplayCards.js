import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayModals() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {CARD_TYPES.map((item, idx) => (
          <Div
            key={idx}
            direction="vertical"
            type="flex"
            hAlign="center"
            vAlign="center"
            className="mb4">
            <Div className="mb1">Type: {item}</Div>
            <Card type={item} />
          </Div>
        ))}
      </Div>
    </>
  );
}

export default DisplayModals;
