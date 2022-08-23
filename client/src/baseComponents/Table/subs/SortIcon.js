import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import styles from '../Table.module.scss';

const SortIcon = ({ isAsc, isDesc, notSorted }) => {
  return (
    <>
      {isAsc && (
        <Div className={cx(styles.downIcon)}>
          <Icon type="angleLeft" />
        </Div>
      )}
      {isDesc && (
        <Div className={cx(styles.upIcon)}>
          <Icon type="angleLeft" />
        </Div>
      )}
      {notSorted && (
        <Div>
          <Icon type="minus" />
        </Div>
      )}
    </>
  );
};

export default SortIcon;
