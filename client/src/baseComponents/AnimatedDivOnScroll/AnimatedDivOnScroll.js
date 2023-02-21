import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import styles from './AnimatedDivOnScroll.module.scss';

const AnimatedDivOnScroll = ({ className, activeClassName, children, ...props }) => {
  const containerRef = useRef();
  const scrollPosition = useSelector((state) => state.scrollPosition);

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (containerRef?.current) {
      if (
        containerRef.current.getBoundingClientRect().top - window.innerHeight <= 0 &&
        !showAnimation
      ) {
        setShowAnimation(true);
      }
    }
  }, [scrollPosition, containerRef, showAnimation]);
  return (
    <>
      <Div
        ref={(el) => (containerRef.current = el)}
        className={cx(className, showAnimation && activeClassName)}
        {...props}>
        {children}
      </Div>
    </>
  );
};

export default AnimatedDivOnScroll;
