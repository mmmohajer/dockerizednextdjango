import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';
import Anchor from '@/baseComponents/Anchor';

import { COLORS } from '@/constants/vars';

import { My_PERSONAL_INFO } from './constants';
import styles from './PersonalInfo.module.scss';

const PersonalInfo = ({ isInFooter = false }) => {
  const [pdfIconColor, setPdfIconColor] = useState(COLORS.themeOne);

  return (
    <>
      {My_PERSONAL_INFO?.map((info, idx) => (
        <Div type="flex" hAlign="start" vAlign="center" key={idx} className="my2">
          <Icon type={info.iconType} color={!isInFooter ? COLORS.themeOne : ''} scale={1.1} />
          <Div className="ml2">{info.value}</Div>
        </Div>
      ))}
      {!isInFooter && (
        <Div type="flex" className="mt2">
          <Anchor
            to="https://drive.google.com/file/d/1JKsoInOG3yG-OltH_fIX_tWtqFGJw0r1/view?usp=share_link"
            internal={false}>
            <Div
              type="flex"
              hAlign="start"
              vAlign="center"
              className=""
              onMouseEnter={() => setPdfIconColor(COLORS.themeFour)}
              onMouseLeave={() => setPdfIconColor(COLORS.themeOne)}>
              <Icon type={'pdf-file'} color={pdfIconColor} scale={1.1} />
              <Div className="ml2">Downlad CV</Div>
            </Div>
          </Anchor>
        </Div>
      )}
    </>
  );
};

export default PersonalInfo;
