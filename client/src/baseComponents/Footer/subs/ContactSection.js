import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import PersonalInfo from '@/baseComponents/PersonalInfo';

import styles from '../Footer.module.scss';

const ContactSection = () => {
  return (
    <>
      <Div className="fs-px-14">
        <Heading type={3} className="pt2">
          Have a Question?
        </Heading>
        <PersonalInfo />
      </Div>
    </>
  );
};

export default ContactSection;
