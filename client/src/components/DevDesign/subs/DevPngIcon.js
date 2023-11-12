import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';
import PngIcon from '@/baseComponents/PngIcon';

import { PNG_ICON_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayPngIcon() {
  return (
    <>
      <Div
        type="flex"
        vAlign="center"
        hAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {PNG_ICON_TYPES.map((item, idx) => (
          <PngIcon type={item} key={idx} width={20} height={20} className="mr2" />
        ))}
      </Div>
    </>
  );
}

export default DisplayPngIcon;
