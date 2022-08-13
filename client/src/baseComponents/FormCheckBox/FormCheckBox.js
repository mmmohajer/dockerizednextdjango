import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div, Label } from 'basedesign-iswad';

import CheckBox from '@/baseComponents/CheckBox';

import styles from './FormCheckBox.module.scss';

const FormCheckBox = ({
  options,
  selectedOptions,
  setSelectedOptions,
  labelText,
  isRequired,
  className,
  errorMessage,
  errorHandler
}) => {
  const boxClickHandler = (item) => {
    let curSelectedOptions = [...selectedOptions];
    const alreadyExist = curSelectedOptions.some((selectedItem) => selectedItem === item.value);
    if (alreadyExist) {
      curSelectedOptions = curSelectedOptions.filter((selectedItem) => selectedItem !== item.value);
    } else {
      curSelectedOptions.push(item.value);
    }
    setSelectedOptions(curSelectedOptions);
  };

  useEffect(() => {
    if (selectedOptions) {
      errorHandler('');
    }
  }, [selectedOptions]);

  return (
    <>
      <Div className={cx('mainInputContainer pos-rel', className)}>
        {labelText && (
          <Div className={cx('labelForCheckBoxContainer')}>
            <Label className={cx(isRequired && 'required', 'labelForCheckBox')}>{labelText}</Label>
          </Div>
        )}
        <Div className={cx(styles.checkBoxContainer)}>
          {options.map((item, idx) => (
            <CheckBox
              checked={selectedOptions.some((curOption) => curOption === item.value)}
              className={'mr8'}
              labelText={item.shownText}
              key={idx}
              onBoxClick={() => boxClickHandler(item)}
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
  );
};

export default FormCheckBox;
