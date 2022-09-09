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
  ...props
}) => {
  const [curType, setCurType] = useState(type);

  return (
    <>
      <Div className={cx('mainInputContainer', className)}>
        {labelText && (
          <Div className={cx('labelForInputContainer')}>
            <Label className={cx(isRequired && 'required', 'labelForInput')}>{labelText}</Label>
          </Div>
        )}
        <Div className={cx('inputFieldContainer')}>
          <BaseInput
            containerClassName={cx('pos-rel')}
            className={cx('inputField', type === 'password' && 'inputWithIcon')}
            errorContainerClassName={cx('inputErrorMessage')}
            activeErrorContainerClassName={cx('inputErrorMessageIsActive')}
            type={curType}
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
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
