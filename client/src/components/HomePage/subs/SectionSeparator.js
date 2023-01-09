import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import styles from '../HomePage.module.scss';

const SectionSeparator = ({ hasMargin = true, title, elemRef, className }) => {
  return (
    <>
      <Heading
        type={2}
        className={cx(
          'flex flex--jc--center flex--ai--center p2 w-per-100 bgThemeOne textWhite',
          hasMargin && 'my1'
        )}
        ref={(el) => (elemRef.current = el)}>
        {title}
      </Heading>
    </>
  );
};

export default SectionSeparator;
