import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Row, Column, Heading } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';
import Anchor from '@/baseComponents/Anchor';

import { COLORS } from '@/constants/vars';

import styles from '../Footer.module.scss';

const AboutSection = () => {
  const [activeSocialIcon, setActiveSocialIcon] = useState('');
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
            className={cx(
              'br-rad-per-50 of-hidden w-px-40 height-px-40 mouse-hand',
              activeSocialIcon === 'linkedin' && 'bgThemeOne'
            )}
            onMouseEnter={() => setActiveSocialIcon('linkedin')}
            onMouseLeave={() => setActiveSocialIcon('')}>
            <Icon type="linkedin" scale={1.5} color={'white'} />
          </Div>
        </Anchor>
        <Anchor to="https://www.instagram.com/mohammadmohajer7091/" internal={false}>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx(
              'br-rad-per-50 of-hidden w-px-40 height-px-40 mouse-hand',
              activeSocialIcon === 'instagram' && 'bgThemeOne'
            )}
            onMouseEnter={() => setActiveSocialIcon('instagram')}
            onMouseLeave={() => setActiveSocialIcon('')}>
            <Icon type="instagram-fill" scale={1.5} color={'white'} />
          </Div>
        </Anchor>
      </Div>
    </>
  );
};

export default AboutSection;
