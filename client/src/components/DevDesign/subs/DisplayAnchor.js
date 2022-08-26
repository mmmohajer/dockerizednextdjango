import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Anchor from '@/baseComponents/Anchor';

import { ANCHOR_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayAnchor() {
  return (
    <>
      <Div
        type="flex"
        vAlign="center"
        hAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <Div>
          <Div>
            {ANCHOR_TYPES.map((num, idx) => (
              <Anchor anchorType={num} key={idx} className="mx2" to="/">
                Internal Anchor Type {num}
              </Anchor>
            ))}
          </Div>
        </Div>
        <Div>
          <Div className="m4">
            {ANCHOR_TYPES.map((num, idx) => (
              <Anchor
                anchorType={num}
                key={idx}
                className="mx2"
                to="https://www.google.com"
                internal={false}>
                External Anchor Type {num}
              </Anchor>
            ))}
          </Div>
        </Div>
      </Div>
    </>
  );
}

export default DisplayAnchor;
