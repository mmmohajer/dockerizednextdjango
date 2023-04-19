import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Polygon from '@/baseComponents/Polygon';

import { POLYGON_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayPolygon() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {POLYGON_TYPES?.map((item, idx) => (
          <Div key={idx} className="my2">
            <Polygon type={item} width={100} height={60} gradFillType={2} text={'1'} />
          </Div>
        ))}
      </Div>
    </>
  );
}

export default DisplayPolygon;
