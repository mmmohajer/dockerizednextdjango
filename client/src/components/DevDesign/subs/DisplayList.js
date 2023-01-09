import React from 'react';
import cx from 'classnames';
import { Div, Text, Heading } from 'basedesign-iswad';

import List from '@/baseComponents/List';

import styles from '../DevDesign.module.scss';

function DisplayList() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        vAlign="center"
        hAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <List list={['Item 1', 'Item 2', 'Item 3', 'Item 4']} />
      </Div>
    </>
  );
}

export default DisplayList;
