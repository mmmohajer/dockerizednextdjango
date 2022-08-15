import React from 'react';
import cx from 'classnames';
import { Div, Label } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from './CheckBox.module.scss';

const CheckBox = ({
  labelText,
  isRequired,
  direction = 'horizontal',
  hAlign = 'start',
  vAlign = 'center',
  distributedBetween = true,
  checked = false,
  className,
  onBoxClick,
  ...props
}) => {
  return (
    <>
      <Div
        {...props}
        type="flex"
        direction={direction}
        hAlign={hAlign}
        vAlign={vAlign}
        distributedBetween={distributedBetween}
        className={cx('mainCheckBoxContainer pos-rel', className)}>
        {labelText && (
          <Div
            className={cx(
              'labelForCheckBoxFieldContainer',
              direction === 'horizontal' && 'mr1',
              direction === 'vertical' && 'mb1'
            )}>
            <Label className={cx(isRequired && 'required', 'labelForCheckBoxField')}>
              {labelText}
            </Label>
          </Div>
        )}
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('chechBoxField w-px-20 height-px-20 mouse-hand mr1')}
          onClick={onBoxClick}>
          {checked && <Icon type="check-mark" color={'blue'} />}
        </Div>
      </Div>
    </>
  );
};

export default CheckBox;
