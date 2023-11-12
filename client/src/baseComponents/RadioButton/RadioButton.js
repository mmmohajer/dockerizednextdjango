import React from 'react';
import cx from 'classnames';
import { Div, Label } from 'basedesign-iswad';

import styles from './RadioButton.module.scss';

const RadioButton = ({
  labelText,
  selected = false,
  hasDefaultClass = true,
  onRadioButtonClick,
  className
}) => {
  return (
    <>
      <Div
        type="flex"
        hAlign="start"
        vAlign="center"
        className={cx(hasDefaultClass && 'mainInputContainer', className)}>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx(
            'w-px-20 height-px-20 br-rad-per-50 boxShadowType1 bgWhite mouse-hand',
            labelText && 'mr1'
          )}
          onClick={onRadioButtonClick}>
          {selected && <Div className="w-px-10 height-px-10 br-rad-per-50 bgThemeTwo"></Div>}
        </Div>
        <Div>
          <Label className="fs-px-14 textGrayDark">{labelText}</Label>
        </Div>
      </Div>
    </>
  );
};

export default RadioButton;
