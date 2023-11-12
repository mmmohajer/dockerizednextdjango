import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';
import { toggleSideBarDashboard } from '@/reducers/general/sidebarDashboardIsActive';

import styles from '../SideBarDashboard.module.scss';

const Toggler = () => {
  const dispatch = useDispatch();
  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx(
          'pos-abs height-px-30 w-px-30 bgWhite br-rad-px-5 boxShadowType1',
          styles.toggler,
          !sideBarDashboardIsActive && 'rotate180',
          sideBarDashboardIsActive ? styles.togglerDashboardIsOpen : styles.togglerDashboardIsClose
        )}>
        <Div
          className={cx('mouse-hand textSilver')}
          onClick={() => dispatch(toggleSideBarDashboard())}>
          <Icon type="angles-left" color={COLORS.grayBright} />
        </Div>
      </Div>
    </>
  );
};

export default Toggler;
