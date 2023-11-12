import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from '../Loading.module.scss';

const Type2 = ({ width = 200, height = 200, loadingWidth = 100, loadingHeight = 100 }) => {
  return (
    <>
      <Div type="flex" hAlign="center" vAlign="center" className={cx('')} style={{ width, height }}>
        <Div className="" style={{ width: loadingWidth, height: loadingHeight }}>
          <Div className={cx(styles.loading)}></Div>
        </Div>
      </Div>
    </>
  );
};

export default Type2;
