import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';
import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';
import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';
import { showUserNav } from '@/reducers/general/userNavIsActive';
import { USER_GROUPS } from '@/constants/userGroups';

import RollToggler from './RoleToggler';
import styles from '../Header.module.scss';

const AppUser = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <Div type="flex" vAlign="center">
        {profile?.user?.groups?.includes(USER_GROUPS.BUSINESS_ADMIN) && (
          <Div className="mr1">
            <RollToggler />
          </Div>
        )}
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="w-px-40 height-px-40 br-rad-per-50 br-all-solid-2 br-color-themeFour of-hidden mouse-hand"
          onClick={() => dispatch(showUserNav())}>
          {!profile?.photo ? (
            <Icon type="person-fill" scale={2} color={COLORS.themeFour} />
          ) : (
            <AppImage
              src={`${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}${profile.photo}`}
              width={40}
              height={40}
              objectFit="cover"
            />
          )}
        </Div>
      </Div>
    </>
  );
};

export default AppUser;
