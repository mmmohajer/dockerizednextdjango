import React from 'react';
import cx from 'classnames';
import { Div, Label } from 'basedesign-iswad';

import RadioButton from '@/baseComponents/RadioButton';

import styles from './FormRadioButton.module.scss';

const FormRadioButton = ({
  labelText,
  options,
  val,
  setVal,
  errorMessage,
  errorHandler,
  isRequired,
  className
}) => {
  return (
    <>
      <>
        <Div className={cx('mainInputContainer pos-rel', className)}>
          {labelText && (
            <Div className={cx('labelForRadioButtonContainer')}>
              <Label className={cx(isRequired && 'required', 'labelForCheckBox')}>
                {labelText}
              </Label>
            </Div>
          )}
          <Div className={cx(styles.radioButtonContainer)}>
            {options.map((item, idx) => (
              <RadioButton
                selected={val === item.value}
                className={'mr8'}
                labelText={item.shownText}
                key={idx}
                onRadioButtonClick={() => {
                  setVal(item.value);
                  errorHandler('');
                }}
              />
            ))}
          </Div>
          {errorMessage && (
            <Div className={cx('inputErrorMessage', errorMessage && 'inputErrorMessageIsActive')}>
              {errorMessage}
            </Div>
          )}
        </Div>
      </>
    </>
  );
};

export default FormRadioButton;
