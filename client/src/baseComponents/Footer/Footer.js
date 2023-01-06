import React from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { Div } from 'basedesign-iswad';

import { smDesignSize, lgDesignSize } from '@/constants/vars';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <Div className={cx(styles.footerContainer)}>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('textWhite bgThemeTwo fs-px-14 p1', styles.copyRightContainer)}>
          <Div showIn={lgDesignSize}>
            © {dayjs(new Date()).format('YYYY')} | All Rights Reserved | Powered by Mohammad Mohajer
          </Div>
          <Div className="text-center" showIn={smDesignSize}>
            <Div className="mb1">© {dayjs(new Date()).format('YYYY')} | All Rights Reserved </Div>
            <Div>Powered by Mohammad Mohajer</Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Footer;
