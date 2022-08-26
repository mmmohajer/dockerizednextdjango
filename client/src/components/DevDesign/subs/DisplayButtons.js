import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { BUTTON_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayColors() {
  return (
    <>
      <Div
        type="flex"
        vAlign="center"
        hAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {BUTTON_TYPES.map((num, idx) => (
          <Button btnType={num} key={idx} className="mr2">
            Button type {num}
          </Button>
        ))}
      </Div>
    </>
  );
}

export default DisplayColors;
