import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';
import Logout from '@/baseComponents/Logout';

import styles from '../Header.module.scss';

const UserManager = () => {
  const router = useRouter();
  const profile = useSelector((state) => state.profile);
  return (
    <>
      {!profile?.id && (
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="mouse-hand w-px-30 height-px-30"
          onClick={() => router.push('/test-pages/login')}>
          <Icon type="person-fill" color="white" scale={1.75} />
        </Div>
      )}

      {profile?.id && (
        <Logout>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="mouse-hand w-px-30 height-px-30">
            <Icon type="signout" color="white" scale={1.75} />
          </Div>
        </Logout>
      )}
    </>
  );
};

export default UserManager;
