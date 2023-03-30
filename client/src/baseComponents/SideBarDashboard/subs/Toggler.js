import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { toggleSideBarDashboard } from '@/reducers/general/sidebarDashboardIsActive';

import styles from '../SideBarDashboard.module.scss';

const Toggler = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Div type="flex" hAlign="center">
        <Div className="mouse-hand p1" onClick={() => dispatch(toggleSideBarDashboard())}>
          <Icon type="slider" scale={1.25} />
        </Div>
      </Div>
    </>
  );
};

export default Toggler;
