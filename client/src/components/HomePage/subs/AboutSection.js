import React from 'react';
import cx from 'classnames';
import { Div, Row, Column, Heading } from 'basedesign-iswad';
import Image from 'next/image';

import Paragraph from '@/baseComponents/Paragraph';

import { ABOUT_ME } from '../constants';
import PersonalInfo from './PersonalInfo';
import styles from '../HomePage.module.scss';

import MyPhoto from '@/images/js-Images/general/me.jpg';

const AboutSection = () => {
  return (
    <>
      <Row className="">
        <Column xs={0} sm={0} md={6} lg={6} className="flex--jc--end">
          <Div type="flex" hAlign="end" vAlign="start" className="w-px-500">
            <Image src={MyPhoto} objectFit="cover" />
          </Div>
        </Column>
        <Column xs={12} sm={12} md={6} lg={6} className="p3">
          <Div type="flex" direction="vertical" distributedBetween>
            <Div>
              <Heading type={2}>About Me</Heading>
              <Div className={cx('mt2')}>{ABOUT_ME(Paragraph)}</Div>
            </Div>
            <Div>
              <PersonalInfo />
            </Div>
          </Div>
        </Column>
      </Row>
    </>
  );
};

export default AboutSection;
