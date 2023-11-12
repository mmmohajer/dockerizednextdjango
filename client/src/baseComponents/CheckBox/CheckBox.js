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
  hasDefaultClass = true,
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
        className={cx('pos-rel', hasDefaultClass && 'mainCheckBoxContainer', className)}>
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
          vAlign="start"
          className={cx('chechBoxField mouse-hand mr1 br-all-solid-2 br-color-themeOne')}
          onClick={onBoxClick}>
          {checked && <Icon type="check-mark" color={COLORS.themeOne} />}
        </Div>
      </Div>
    </>
  );
};

export default CheckBox;
