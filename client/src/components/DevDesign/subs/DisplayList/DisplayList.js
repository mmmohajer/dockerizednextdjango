import React from 'react';
import cx from 'classnames';
import { Div, Text, Heading } from 'basedesign-iswad';

import List from '@/baseComponents/List';

import Type1 from './subs/Type1';
import Type2 from './subs/Type2';
import styles from '../../DevDesign.module.scss';

function DisplayList() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        vAlign="center"
        hAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <Type2 />
      </Div>
    </>
  );
}

export default DisplayList;
