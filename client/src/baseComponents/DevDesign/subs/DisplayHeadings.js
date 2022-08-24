import React from 'react';
import cx from 'classnames';
import { Div, Text, Heading } from 'basedesign-iswad';

import { COLORS } from '@/constants/vars';

import styles from '../DevDesign.module.scss';

function DisplayHeadings() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        vAlign="center"
        hAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {[1, 2, 3, 4, 5, 6].map((num, idx) => (
          <Heading key={idx} type={num}>
            Heading {num}
          </Heading>
        ))}
      </Div>
    </>
  );
}

export default DisplayHeadings;
