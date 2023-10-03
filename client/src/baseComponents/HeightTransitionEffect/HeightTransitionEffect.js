import React, { useState, useRef, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './HeightTransitionEffect.module.scss';

const HeightTransitionEffect = ({
  isActive,
  className,
  onClick,
  children,
  style = {},
  initialHeight = 0,
  ...props
}) => {
  const [height, setHeight] = useState(initialHeight);
  const [updateHeight, setUpdateHeight] = useState(false);

  useEffect(() => {
    if (isActive) {
      setHeight('auto');
    } else {
      setHeight(initialHeight);
    }
  }, [initialHeight, isActive]);

  useEffect(() => {
    if (isActive) {
      setHeight('auto');
    } else {
      setHeight(initialHeight);
    }
  }, [initialHeight, updateHeight, isActive]);

  return (
    <>
      <Div
        className={cx('of-hidden', styles.container, className)}
        {...props}
        style={{ ...style, height }}
        onClick={() => {
          setUpdateHeight(true);
          if (onClick) {
            onClick();
          }
          setTimeout(() => {
            setUpdateHeight(false);
          }, 300);
        }}>
        {children}
      </Div>
    </>
  );
};

export default HeightTransitionEffect;
