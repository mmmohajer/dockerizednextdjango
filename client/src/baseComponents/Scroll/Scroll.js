import React from 'react';
import cx from 'classnames';
import { Div, Scroll as BaseScroll } from 'basedesign-iswad';

import styles from './Scroll.module.scss';

const Scroll = ({
  SCROLLABLE_ELEMENT_ID,
  SCROLLABLE_CONTENT_ID,
  containerClassName,
  scrollContainerClassName,
  scrollAxis = 'x',
  children,
  ...props
}) => {
  return (
    <>
      <BaseScroll
        containerClassName={containerClassName}
        scrollContainerClassName={cx(
          'of-x-hidden of-y-hidden br-rad-px-10 bgInverse my1',
          scrollContainerClassName
        )}
        scrollClassName="bgThemeOne height-px-20 br-rad-px-10"
        scrollableElementId={SCROLLABLE_ELEMENT_ID}
        scrollableContentId={SCROLLABLE_CONTENT_ID}
        scrollAxis={scrollAxis}
        {...props}>
        {children}
      </BaseScroll>
    </>
  );
};

export default Scroll;
