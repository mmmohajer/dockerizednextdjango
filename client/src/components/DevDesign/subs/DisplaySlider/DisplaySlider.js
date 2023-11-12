import React from 'react';
import cx from 'classnames';
import { Div, Text, Heading } from 'basedesign-iswad';

import Slider from '@/baseComponents/Slider';

import styles from '../../DevDesign.module.scss';

function DisplaySlider() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        vAlign="center"
        hAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <Slider />
      </Div>
    </>
  );
}

export default DisplaySlider;
