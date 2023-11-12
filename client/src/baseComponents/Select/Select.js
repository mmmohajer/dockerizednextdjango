import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Select as BaseSelect, Label } from 'basedesign-iswad';

import styles from './Select.module.scss';

const Select = ({
  val,
  setVal,
  selectIntialShownText,
  options,
  openOptionsDownWard,
  placeHolder,
  isRequired,
  labelText,
  errorMessage,
  errorHandler,
  hasDefaultStyle = true,
  className
}) => {
  const [isOptionsActive, setIsOptionsActive] = useState(false);
  const [allOpts, setAllOpts] = useState([]);

  useEffect(() => {
    setAllOpts(options);
  }, [options]);

  return (
    <>
      <Div className={cx('pos-rel', hasDefaultStyle && 'mainInputContainer', className)}>
        {labelText && (
          <Div className={cx('labelForInputContainer')}>
            <Label className={cx(isRequired && 'required', 'labelForInput')}>{labelText}</Label>
          </Div>
        )}
        <Div
          className={cx('inputFieldContainer')}
          onClick={() => {
            if (errorHandler) {
              errorHandler('');
            }
          }}>
          <BaseSelect
            selectValue={val}
            setSelectValue={setVal}
            options={allOpts}
            SelectClickableClassName="w-per-100 height-vh-full pos-fix pos-fix--lt mouse-hand"
            className={cx(styles.select)}
            defaultViewClassName={cx(
              'w-per-100 pl2 pr2 mouse-hand br-all-solid-1 br-color-silver fs-px-12 flex flex--ai--center',
              styles.defaultSelect
            )}
            optionClassName={cx(styles.option)}
            optinsContainerClassName={cx('bgWhite scrollType1', styles.optionsContainer)}
            searchContainerClassName="w-per-100"
            inputSearchClassName={cx(styles.searchInput)}
            placeHolderClassName={cx('fs-px-12', styles.placeHolder)}
            fullWidth
            arrowIconFillColor="gray"
            arrowIconStrokeColor="gray"
            arrowIconScale={0.8}
            searchIconFillColor="gray"
            searchIconStrokeColor="gray"
            openOptionsDownWard={openOptionsDownWard}
            isOptionsActive={isOptionsActive}
            setIsOptionsActive={setIsOptionsActive}
            selectIntialShownText={selectIntialShownText}
            placeholder={placeHolder || ''}
          />
        </Div>
        <Div className={cx('inputErrorMessage', errorMessage && 'inputErrorMessageIsActive')}>
          {errorMessage}
        </Div>
      </Div>
    </>
  );
};

export default Select;
