import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { FOOTER_NAV_ITEMS } from '@/constants/footerNavItems';

import MenuItem from './subs/MenuItem';
import styles from './FooterNavigation.module.scss';

const FooterNavigation = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <Div
        type="flex"
        distributedBetween
        vAlign="center"
        className={cx('p2', styles.footerContainer)}>
        {FOOTER_NAV_ITEMS?.map((item, idx) => {
          if (
            !item?.allowedGroups?.length ||
            (item?.allowedGroups?.length &&
              item?.allowedGroups?.some((group) => profile?.user?.groups?.includes(group)))
          ) {
            return <MenuItem key={idx} item={item} />;
          }
        })}
      </Div>
    </>
  );
};

export default FooterNavigation;
