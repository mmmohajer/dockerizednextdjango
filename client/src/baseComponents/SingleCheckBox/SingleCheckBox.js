import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div, Label } from 'basedesign-iswad';

import CheckBox from '@/baseComponents/CheckBox';

import styles from './SingleCheckBox.module.scss';

const SingleCheckBox = ({
  selected,
  setSelected,
  labelText,
  isRequired,
  className,
  errorMessage,
  errorHandler
}) => {
  useEffect(() => {
    if (selected && errorHandler) {
      errorHandler('');
    }
  }, [selected]);

  return (
    <>
      <Div className={cx('mainInputContainer pos-rel', className)}>
        <Div className={cx(styles.checkBoxContainer)}>
          <CheckBox
            checked={selected}
            className={'mr8 flex--dir--row--reverse'}
            labelText={labelText}
            distributedBetween={false}
            onBoxClick={() => setSelected(!selected)}
            hAlign="end"
            isRequired={isRequired}
          />
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

export default SingleCheckBox;
