import React from 'react';
import cx from 'classnames';
import { Div, Paragraph as BaseParagraph } from 'basedesign-iswad';

import styles from './Paragraph.module.scss';

const Paragraph = ({ className, children, ...props }) => {
  return (
    <>
      <BaseParagraph className={cx('mt2 mb2', styles.paragraph, className)} {...props}>
        {children}
      </BaseParagraph>
    </>
  );
};

export default Paragraph;
