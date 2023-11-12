import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from './Back.module.scss';

const Back = ({ to = '/app' }) => {
  const router = useRouter();
  return (
    <>
      <Div type="flex" vAlign="center" className="mouse-hand" onClick={() => router.push(to)}>
        <Div type="flex" hAlign="center" vAlign="center" className="w-px-30">
          <Icon type="arrow-left" color={COLORS.themeOne} scale={1} />
        </Div>
        <Div className="textThemeOne">Back</Div>
      </Div>
    </>
  );
};

export default Back;
