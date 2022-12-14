import React from 'react';
import cx from 'classnames';
import { default as BaseDatePicker } from 'react-datepicker';
import { Div, Label } from 'basedesign-iswad';

import 'react-datepicker/dist/react-datepicker.css';

import styles from './DatePicker.module.scss';

const DatePicker = ({
  className,
  isRequired,
  labelText,
  chosenDate,
  setChosenDate,
  dateFormat = 'dd-MM-yyyy',
  yearDropdownItemNumber = 100,
  showYearDropdown = true,
  showMonthDropdown = false,
  errorMessage,
  errorHandler,
  placeHolder
}) => {
  return (
    <>
      <Div className={cx('mainInputContainer pos-rel', className)} onClick={() => errorHandler('')}>
        {labelText && (
          <Div className={cx('labelForInputContainer')}>
            <Label className={cx(isRequired && 'required', 'labelForInput')}>{labelText}</Label>
          </Div>
        )}
        <Div className={cx('inputFieldContainer')}>
          <BaseDatePicker
            selected={chosenDate}
            onChange={(date) => setChosenDate(date)}
            className={cx('inputField')}
            dateFormat={dateFormat}
            yearDropdownItemNumber={yearDropdownItemNumber}
            scrollableYearDropdown={true}
            showYearDropdown={showYearDropdown}
            showMonthDropdown={showMonthDropdown}
            placeholderText={placeHolder}
          />
        </Div>
        <Div className={cx('inputErrorMessage', errorMessage && 'inputErrorMessageIsActive')}>
          {errorMessage}
        </Div>
      </Div>
    </>
  );
};

export default DatePicker;
