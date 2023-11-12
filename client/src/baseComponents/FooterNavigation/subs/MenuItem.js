import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import { COLORS } from '@/constants/vars';
import { setActiveDashboardMenu } from '@/reducers/general/activeDashboardMenu';

import Icon from '@/baseComponents/Icon';

import styles from '../FooterNavigation.module.scss';

const MenuItem = ({ item, ...props }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const activeDashboardMenu = useSelector((state) => state.activeDashboardMenu);

  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mouse-hand height-px-30 w-px-30"
        {...props}
        onClick={() => {
          router.push(item?.to);
          dispatch(setActiveDashboardMenu(item?.identifier));
        }}>
        <Icon
          type={item?.icon}
          scale={1.5}
          color={activeDashboardMenu === item?.identifier ? COLORS.themeTwo : COLORS.grayBright}
        />
      </Div>
    </>
  );
};

export default MenuItem;
