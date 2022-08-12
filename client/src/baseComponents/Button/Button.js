import React from 'react';
import cx from 'classnames';
import { Div, Button as BaseButton } from 'basedesign-iswad';

import styles from './Button.module.scss';

const Button = ({ btnType = 1, className, children, ...props }) => {
  return (
    <>
      <BaseButton
        className={cx(
          btnType === 1 && styles.btn1,
          btnType === 2 && styles.btn2,
          btnType === 3 && styles.btn3,
          className
        )}
        {...props}>
        {children}
      </BaseButton>
    </>
  );
};

export default Button;
