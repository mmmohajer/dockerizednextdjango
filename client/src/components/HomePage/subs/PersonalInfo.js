import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import { My_PERSONAL_INFO } from '../constants';
import styles from '../HomePage.module.scss';

const PersonalInfo = () => {
  return (
    <>
      {My_PERSONAL_INFO?.map((info, idx) => (
        <Div type="flex" hAlign="start" vAlign="center" key={idx} className="my2">
          <Icon type={info.iconType} color={COLORS.themeOne} scale={1.1} />
          <Div className="ml2">{info.value}</Div>
        </Div>
      ))}
    </>
  );
};

export default PersonalInfo;
