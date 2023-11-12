import React from 'react';
import cx from 'classnames';
import { Div, Button as BaseButton } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import styles from './Button.module.scss';

const Button = ({
  btnType = 1,
  iconType,
  iconColor,
  iconScale,
  isDisabled,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <BaseButton
        className={cx(
          isDisabled && styles.disableBtn,
          btnType === 1 && !isDisabled ? styles.btn1 : '',
          btnType === 2 && !isDisabled ? styles.btn2 : '',
          btnType === 3 && !isDisabled ? styles.btn3 : '',
          btnType === 4 && !isDisabled ? styles.btn4 : '',
          btnType === 5 && !isDisabled ? styles.btn5 : '',
          btnType === 6 && !isDisabled ? styles.btn6 : '',
          btnType === 7 && !isDisabled ? styles.btn7 : '',
          className
        )}
        {...props}
        disabled={isDisabled}>
        <Div type="flex" hAlign="center">
          {iconType && (
            <Div type="flex" hAlign="center" vAlign="center" className="mr1">
              <Icon type={iconType} color={iconColor} scale={iconScale} />
            </Div>
          )}
          <Div>{children}</Div>
        </Div>
      </BaseButton>
    </>
  );
};

export default Button;
