import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Row, Column, Heading } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';
import Anchor from '@/baseComponents/Anchor';

import Logo from '@/images/js-Images/general/Footer/Footer-Logo.png';
import LogoWhite from '@/images/js-Images/general/Footer/Footer-Logo-White.png';

import styles from '../Footer.module.scss';

const AboutSection = ({ footerIsColored }) => {
  const [activeSocialIcon, setActiveSocialIcon] = useState('');
  return (
    <>
      <Div type="flex" hAlign="center" className="pos-rel w-per-100">
        <AppImage src={footerIsColored ? LogoWhite : Logo} />
      </Div>
    </>
  );
};

export default AboutSection;
