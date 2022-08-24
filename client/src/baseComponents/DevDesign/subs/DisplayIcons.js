import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { LIST_OF_ICONS } from '@/constants/devDesignVars';
import { COLORS } from '@/constants/vars';

import styles from '../DevDesign.module.scss';

function DisplayIcons() {
  return (
    <>
      <Div className={cx('w-per-90', styles.iconsContainer, styles.card)}>
        {LIST_OF_ICONS.map((item, idx) => (
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="m2 br-all-solid-1 br-color-black p1"
            key={idx}>
            <Div className="mr1">{item}</Div>
            <Div type="flex">
              {Object.keys(COLORS).map((c, idx2) => (
                <Div type="flex" vAlign="center" hAlign="center" key={idx2} className="mr1">
                  <Icon type={item} color={COLORS[c]} scale={1.25} />
                </Div>
              ))}
            </Div>
          </Div>
        ))}
      </Div>
    </>
  );
}

export default DisplayIcons;
