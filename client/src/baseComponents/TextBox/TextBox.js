import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Input as BaseInput, Label } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import styles from './TextBox.module.scss';

const TextBox = ({
  labelText,
  isRequired,
  onChange,
  val,
  setVal,
  errorHandler,
  className,
  type,
  hasIcon = false,
  iconType,
  iconColor = 'gray',
  hasMarginBottom = true,
  hasDefaultClass = true,
  labelType = 'normal',
  inputFieldClassName = '',
  hasDefaultPadding = true,
  ...props
}) => {
  const [curType, setCurType] = useState(type);

  return (
    <>
      <Div
        className={cx(hasMarginBottom && hasDefaultClass ? 'mainInputContainer' : '', className)}>
        {labelText && (
          <Div className={cx('labelForInputContainer')}>
            <Label
              className={cx(
                isRequired && 'required',
                labelType === 'normal' && 'labelForInputContainer',
                labelType === 'small' && 'fs-px-10 textGrayDark'
              )}>
              {labelText}
            </Label>
          </Div>
        )}
        <Div className={cx(hasDefaultClass && 'inputFieldContainer')}>
          <BaseInput
            containerClassName={cx('pos-rel')}
            className={cx(
              '',
              hasDefaultClass && 'inputField inputText',
              type === 'password' && 'inputWithIcon',
              inputFieldClassName,
              !hasDefaultPadding && 'inputwithLessPadding'
            )}
            errorContainerClassName={cx('inputErrorMessage')}
            activeErrorContainerClassName={cx('inputErrorMessageIsActive')}
            type={curType}
            value={val}
            onChange={(e) => {
              if (setVal) {
                setVal(e.target.value);
              }
              errorHandler && errorHandler('');
              if (onChange) {
                onChange(e);
              }
            }}
            {...props}
          />

          {hasIcon && (
            <>
              <Div className={cx(styles.icon)}>
                <Icon type={iconType} color={iconColor} width={'14'} />
              </Div>
            </>
          )}

          {type === 'password' && (
            <>
              <Div
                className={cx('mouse-hand', styles.icon)}
                onClick={() => {
                  if (curType === 'password') {
                    setCurType('text');
                  } else {
                    setCurType('password');
                  }
                }}>
                <Icon type="eye" color="black" width={'14'} />
              </Div>
              {curType !== 'password' && <div className={cx(styles.lineThrough)}></div>}
            </>
          )}
        </Div>
      </Div>
    </>
  );
};

export default TextBox;
