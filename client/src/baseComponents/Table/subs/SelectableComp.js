import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

const CheckBox = ({ checked = false, onBoxClick }) => {
  return (
    <>
      <Div type="flex" hAlign="center" vAlign="center" className="w-per-100">
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('chechBoxField bgWhite w-px-20 height-px-20 mouse-hand')}
          onClick={onBoxClick}>
          {checked && <Icon type="check-mark" color={'blue'} />}
        </Div>
      </Div>
    </>
  );
};

export default CheckBox;
