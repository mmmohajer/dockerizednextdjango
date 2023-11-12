import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from '../Loading.module.scss';

const Type1 = () => {
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx(
          'pos-fix pos-fix--lt w-per-100 height-vh-full loadingZIndex',
          styles.fullHeight
        )}>
        <Div className="w-px-150 height-px-150">
          <Div className={cx(styles.loading)}></Div>
        </Div>
      </Div>
    </>
  );
};

export default Type1;
