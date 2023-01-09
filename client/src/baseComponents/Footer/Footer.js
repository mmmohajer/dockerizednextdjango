import React from 'react';
import cx from 'classnames';
import { Div, Row, Column } from 'basedesign-iswad';

import { smDesignSize, lgDesignSize } from '@/constants/vars';

import AboutSection from './subs/AboutSection';
import LinksSection from './subs/LinksSection';
import ServicesSection from './subs/ServicesSection';
import ContactSection from './subs/ContactSection';
import CopyRightSection from './subs/CopyRightSection';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <Div className={cx('bgThemeThree boxShadowType1')}>
        <Div className="mb1">
          <Row>
            <Column xs={12} sm={12} md={6} lg={3} className="textWhite px2">
              <AboutSection />
            </Column>
            <Column xs={12} sm={12} md={6} lg={3} className="textWhite px2">
              <LinksSection />
            </Column>
            <Column xs={12} sm={12} md={6} lg={3} className="textWhite px2">
              <ServicesSection />
            </Column>
            <Column xs={12} sm={12} md={6} lg={3} className="textWhite px2">
              <ContactSection />
            </Column>
          </Row>
        </Div>
        <CopyRightSection />
      </Div>
    </>
  );
};

export default Footer;
