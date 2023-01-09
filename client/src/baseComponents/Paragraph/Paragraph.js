import React from 'react';
import cx from 'classnames';
import { Div, Paragraph as BaseParagraph } from 'basedesign-iswad';

import styles from './Paragraph.module.scss';

const Paragraph = ({ type = 1, className, children, ...props }) => {
  return (
    <>
      {type === 1 && (
        <BaseParagraph className={cx('mt2 mb2', styles.paragraph, className)} {...props}>
          {children}
        </BaseParagraph>
      )}
      {type === 2 && (
        <BaseParagraph className={cx('mt1 mb1 fs-px-12', styles.paragraph2, className)} {...props}>
          {children}
        </BaseParagraph>
      )}
    </>
  );
};

export default Paragraph;
