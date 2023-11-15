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
  const parentRef = useRef();

  const [height, setHeight] = useState(0);
  const [updateHeight, setUpdateHeight] = useState(false);

  useEffect(() => {
    setHeight(initialHeight);
  }, [initialHeight]);

  useEffect(() => {
    if (isActive) {
      setHeight(parentRef.current.scrollHeight);
    } else {
      setHeight(initialHeight);
    }
  }, [parentRef?.current?.scrollHeight, isActive]);

  useEffect(() => {
    if (isActive) {
      setHeight(parentRef.current.scrollHeight);
    } else {
      setHeight(initialHeight);
    }
  }, [updateHeight, isActive]);

  return (
    <>
      <Div
        className={cx('of-hidden', styles.container, className)}
        {...props}
        style={{ ...style, height }}
        ref={(el) => (parentRef.current = el)}
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
