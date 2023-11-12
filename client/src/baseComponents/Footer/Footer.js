import React from 'react';
import cx from 'classnames';
import { Div, Row, Column } from 'basedesign-iswad';

import { smDesignSize, lgDesignSize } from '@/constants/vars';

import AboutSection from './subs/AboutSection';
import LinksSection from './subs/LinksSection';
import ContactSection from './subs/ContactSection';
import CopyRightSection from './subs/CopyRightSection';
import styles from './Footer.module.scss';

const Footer = ({ footerIsColored }) => {
  return (
    <>
      <Div
        className={cx(
          'of-hidden pl4 pr4 pt4',
          footerIsColored ? 'bgThemeFour textWhite' : 'textBlack'
        )}>
        <Div className="">
          <Row>
            <Column xs={12} sm={12} md={3} lg={4} className="px2">
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className="height-per-100 w-per-100 pb4">
                <AboutSection footerIsColored={footerIsColored} />
              </Div>
            </Column>
            <Column xs={12} sm={12} md={5} lg={4} className="w-per-100">
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className="w-per-100 pb4 pl4 pr4 fs-px-12">
                <LinksSection footerIsColored={footerIsColored} />
              </Div>
            </Column>
            <Column xs={12} sm={12} md={4} lg={4} className="px2">
              <Div type="flex" hAlign="center" className="w-per-100 pb4">
                <ContactSection footerIsColored={footerIsColored} />
              </Div>
            </Column>
          </Row>
        </Div>
        {/* <CopyRightSection /> */}
      </Div>
    </>
  );
};

export default Footer;
