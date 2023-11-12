import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import Link from 'next/link';

import styles from './Anchor.module.scss';

const Anchor = ({
  anchorType = 1,
  to,
  internal = true,
  target = '_blank',
  className,
  children,
  ...props
}) => {
  return (
    <>
      {internal && (
        <Link href={to} {...props}>
          <a
            className={cx(
              anchorType === 0 && styles.anchor0,
              anchorType === 1 && styles.anchor1,
              anchorType === 2 && styles.anchor2,
              anchorType === 3 && styles.anchor3,
              anchorType === 4 && styles.anchor4,
              anchorType === 5 && styles.anchor5,
              anchorType === 6 && styles.anchor6,
              className
            )}>
            {children}
          </a>
        </Link>
      )}
      {!internal && (
        <a
          className={cx(
            anchorType === 0 && styles.anchor0,
            anchorType === 1 && styles.anchor1,
            anchorType === 2 && styles.anchor2,
            anchorType === 3 && styles.anchor3,
            anchorType === 4 && styles.anchor4,
            className
          )}
          href={to}
          target={target}
          {...props}>
          {children}
        </a>
      )}
    </>
  );
};

export default Anchor;
