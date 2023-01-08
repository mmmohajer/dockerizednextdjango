import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ListItem from './subs/ListItem';
import styles from './List.module.scss';

const List = ({ list }) => {
  return (
    <>
      {list?.map((item, idx) => (
        <ListItem key={idx} item={item} />
      ))}
    </>
  );
};

export default List;
