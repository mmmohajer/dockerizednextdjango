import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { FOOTER_NAV_ITEMS } from '@/constants/footerNavItems';

import MenuItem from './subs/MenuItem';
import styles from './FooterNavigation.module.scss';

const FooterNavigation = () => {
  return (
    <>
      <Div
        type="flex"
        distributedBetween
        vAlign="center"
        className={cx('p2', styles.footerContainer)}>
        {FOOTER_NAV_ITEMS?.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}
      </Div>
    </>
  );
};

export default FooterNavigation;
