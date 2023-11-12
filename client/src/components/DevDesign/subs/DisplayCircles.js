import React from 'react';
import cx from 'classnames';
import { Div, Text, Heading } from 'basedesign-iswad';

import Circles from '@/components/SharedComponents/Circles';

import styles from '../DevDesign.module.scss';

function DisplayCircles() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        vAlign="center"
        hAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <Circles width={200} type={1} />
      </Div>
    </>
  );
}

export default DisplayCircles;
