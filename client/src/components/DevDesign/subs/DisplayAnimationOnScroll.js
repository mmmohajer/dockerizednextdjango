import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AnimatedDivOnScroll from '@/baseComponents/AnimatedDivOnScroll';

import styles from '../DevDesign.module.scss';

function DisplayAnimationOnScroll() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <AnimatedDivOnScroll
          className={cx(styles.animatedOnScroll)}
          activeClassName={cx(styles.animatedOnScrollIsActive)}>
          Hello
        </AnimatedDivOnScroll>
      </Div>
    </>
  );
}

export default DisplayAnimationOnScroll;
