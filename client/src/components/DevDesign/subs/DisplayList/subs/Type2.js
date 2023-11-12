import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import List from '@/baseComponents/List';

import styles from '../../../DevDesign.module.scss';

const Type2 = () => {
  return (
    <>
      <List
        type={2}
        list={[
          {
            title: 'Employees vote',
            details:
              'In the first week of every month, employees receive an email directly from Troop to vote on one of the three charitable needs they would like to see fulfilled. ',
            number: 1
          },
          { title: 'Item 2', details: 'Details 2', number: 2 },
          { title: 'Item 3', details: 'Details 3', number: 3 },
          { title: 'Item 4', details: 'Details 4', number: 4 }
        ]}
      />
    </>
  );
};

export default Type2;
