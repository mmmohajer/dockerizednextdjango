import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { USER_GROUPS } from '@/constants/userGroups';
import Logout from '@/baseComponents/Logout';
import Icon from '@/baseComponents/Icon';

import MenuItem from './MenuItem';
import { OTHER_ITEMS } from '../constants';
import styles from '../SideBarDashboard.module.scss';

const OtherItems = () => {
  const curUserGroup = useSelector((state) => state.curUserGroup);

  return (
    <>
      {OTHER_ITEMS?.map((item, identifier) => {
        if (item?.allowedGroups?.includes(curUserGroup)) {
          return (
            <Div className="mb1 px2" key={identifier}>
              <MenuItem menu={item} />
            </Div>
          );
        }
      })}
      <Logout className="px2">
        <MenuItem
          menu={{
            title: 'Logout',
            icon: 'logout'
          }}
          isLogOut={true}
        />
      </Logout>
    </>
  );
};

export default OtherItems;
