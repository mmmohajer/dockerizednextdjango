import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './Toggler.module.scss';

const Toggler = ({ firstStateLabel = '', secondStateLabel = '', activeState, setActiveState }) => {
  return (
    <>
      <Div type="flex" vAlign="center">
        <Div
          type="flex"
          vAlign="center"
          className="height-px-20 w-px-40 bgWhite br-rad-px-10 of-hidden mouse-hand pos-rel"
          onClick={() => {
            if (activeState === 1) {
              setActiveState(2);
            }
            if (activeState === 2) {
              setActiveState(1);
            }
          }}>
          <Div
            className={cx(
              'height-px-20 bgThemeTwo w-px-20',
              styles.rollTogglerBtn,
              activeState === 1 ? styles.rollTogglerBtnIsLeft : styles.rollTogglerBtnIsRight
            )}></Div>
        </Div>
        <Div className="fs-px-12 ml1 textThemeFour w-px-100">
          {activeState === 1 ? firstStateLabel : secondStateLabel}
        </Div>
      </Div>
    </>
  );
};

export default Toggler;
