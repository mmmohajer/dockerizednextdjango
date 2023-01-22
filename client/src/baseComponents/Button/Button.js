import React from 'react';
import cx from 'classnames';
import { Div, Button as BaseButton } from 'basedesign-iswad';

import styles from './Button.module.scss';

const Button = ({ btnType = 1, isDisabled, className, children, ...props }) => {
  return (
    <>
      <BaseButton
        className={cx(
          isDisabled && styles.disableBtn,
          btnType === 1 && !isDisabled ? styles.btn1 : '',
          btnType === 2 && !isDisabled ? styles.btn2 : '',
          btnType === 3 && !isDisabled ? styles.btn3 : '',
          className
        )}
        {...props}>
        {children}
      </BaseButton>
    </>
  );
};

export default Button;
