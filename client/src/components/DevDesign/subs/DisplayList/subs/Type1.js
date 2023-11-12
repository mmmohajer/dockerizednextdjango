import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import List from '@/baseComponents/List';

import styles from '../../../DevDesign.module.scss';

const Type1 = () => {
  return (
    <>
      <List type={1} list={['Item 1', 'Item 2', 'Item 3', 'Item 4']} />
    </>
  );
};

export default Type1;
