import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Column, Div, Row } from 'basedesign-iswad';

import SocialMedia from './subs/SocialMedia';
import Info from './subs/Info';

import { SERVICES } from '@/constants/services';
import { INFORMATION, FOOTER_ABOUT, SOCIAL_MEDIA } from './constants';

import styles from './Footer.module.scss';

const Footer = () => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <Div>
        <Row className="bgThemeThree textWhite pb3">
          <Column
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className={cx('flex flex--dir--col flex--jc--start flex--ai--start px2')}>
            <Div type="flex" hAlign="center" className="h3 mt3 mb3 w-per-100">
              {language === 'en' ? 'Services' : 'خدمات'}
            </Div>
            <Div className="w-per-100">
              {SERVICES.map((item, idx) => (
                <Div
                  type="flex"
                  hAlign="center"
                  className={cx('mb1 px2 w-per-100', styles.services)}
                  key={idx}>
                  {language === 'en' ? item.en : item.fa}
                </Div>
              ))}
            </Div>
          </Column>

          <Column
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className={cx('flex flex--dir--col flex--jc--start flex--ai--center px2')}>
            <Div type="flex" hAlign="center" className="h3 mt3 mb3 w-per-100">
              {language === 'en' ? 'Contact us' : 'راه‌های ارتباطی'}
            </Div>
            <Div type="flex" hAlign="center" className="flex--dir--col px5 w-per-100 max-w-px-350">
              {INFORMATION.map((item, idx) => (
                <Info className="mb1" key={idx} type={item.type} text={item.text} />
              ))}
            </Div>
          </Column>

          <Column
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className={cx('flex flex--dir--col flex--jc--start flex--ai--center pr3')}>
            <Div type="flex" hAlign="center" className="mt3 mb3 w-per-100 ">
              Logo
            </Div>
            <Div
              type="flex"
              hAlign={language === 'en' ? 'start' : 'end'}
              className={cx(
                'px2 w-per-100 max-w-px-350 text-justify',
                language === 'fa' && 'dir-rtl'
              )}>
              {language === 'en' ? FOOTER_ABOUT.en : FOOTER_ABOUT.fa}
            </Div>
            <Div
              type="flex"
              hAlign="center"
              className={cx('px2 w-per-100 my2', language === 'fa' && 'dir-rtl')}>
              {language === 'en'
                ? 'Follow us in social medias :'
                : 'ما را در شبکه‌های اجتماعی دنبال کنید' + ':'}
            </Div>
            <Div type="flex" hAlign="center" vAlign="center" className="w-per-100">
              {SOCIAL_MEDIA.map((item, idx) => (
                <SocialMedia key={idx} type={item.type} href={item.href} />
              ))}
            </Div>
          </Column>
        </Row>

        <Row className={cx('flex flex--jc--center textWhite bgThemeTwo englishFont fs-px-14 p1')}>
          © 2022 Top Family | All Rights Reserved | Powered by
          <a href="https://www.iswad.tech" className={cx('flex flex--jc--center ml1 textWhite')}>
            ISWAD
          </a>
        </Row>
      </Div>
    </>
  );
};

export default Footer;
