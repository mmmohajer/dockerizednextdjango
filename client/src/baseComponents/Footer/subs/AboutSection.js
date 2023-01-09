import React from 'react';
import cx from 'classnames';
import { Div, Row, Column, Heading } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';
import Anchor from '@/baseComponents/Anchor';

import { COLORS } from '@/constants/vars';

import styles from '../Footer.module.scss';

const AboutSection = () => {
  return (
    <>
      <Heading type={3} className="pt2">
        About
      </Heading>
      <Div className={'fs-px-14 mt1'}>
        A passionate software developer with a strong analytical mindset who really enjoys dealing
        with different challenges in the world of computer science and information technology.
      </Div>
      <Div type="flex" className="mt1">
        <Anchor to="https://www.linkedin.com/in/mmmohajer/" internal={false}>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="mr2 br-rad-per-50 of-hidden w-px-40 height-px-40 bgRed boxShadowType1 bgThemeFive mouse-hand">
            <Icon type="linkedin" scale={1.5} color={COLORS.themeOne} />
          </Div>
        </Anchor>
        <Anchor to="https://www.instagram.com/mohammadmohajer7091/" internal={false}>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="br-rad-per-50 of-hidden w-px-40 height-px-40 bgRed boxShadowType1 bgThemeFive mouse-hand">
            <Icon type="instagram-fill" scale={1.5} color={COLORS.themeOne} />
          </Div>
        </Anchor>
      </Div>
    </>
  );
};

export default AboutSection;
