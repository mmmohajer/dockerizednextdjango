import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div } from 'basedesign-iswad';

import { COLORS } from '@/constants/vars';

import Icon from '@/baseComponents/Icon';
import IconHoverEffect from '@/baseComponents/IconHoverEffect';
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
          <IconHoverEffect
            iconType="person-fill"
            normalColor="white"
            hoverColor={COLORS.themeFour}
            iconScale={1.75}
          />
        </Div>
      )}

      {profile?.id && (
        <Logout>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="mouse-hand w-px-30 height-px-30">
            <IconHoverEffect
              iconType="signout"
              normalColor="white"
              hoverColor={COLORS.themeFour}
              iconScale={1.75}
            />
          </Div>
        </Logout>
      )}
    </>
  );
};

export default UserManager;
