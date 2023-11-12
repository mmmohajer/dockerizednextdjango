import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Type1 from './subs/Type1';
import Type2 from './subs/Type2';
import styles from './Loading.module.scss';

const Loading = ({ type = 1, ...props }) => {
  return (
    <>
      {type === 1 && <Type1 {...props} />}
      {type === 2 && <Type2 {...props} />}
    </>
  );
};

export default Loading;
