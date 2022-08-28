import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Header from '@/baseComponents/Header';
import Footer from '@/baseComponents/Footer';

import styles from './PageContainer.module.scss';

const PageContainer = ({ children }) => {
  return (
    <>
      <Div className={cx('flex flex--dir--col min-height-vh-full flex--jc--between')}>
        <Div>
          <Header />
          <Div>{children}</Div>
        </Div>
        <Footer />
      </Div>
    </>
  );
};

export default PageContainer;
