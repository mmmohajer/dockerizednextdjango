import React, { useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { setActiveMenu } from '@/reducers/general/activeMenu';

import Header from '@/baseComponents/Header';
import Footer from '@/baseComponents/Footer';

import styles from './PageContainer.module.scss';

const PageContainer = ({ pageIdentifier, hasHeader = true, hasFooter = true, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (pageIdentifier) {
      dispatch(setActiveMenu(pageIdentifier));
    }
  }, [pageIdentifier]);

  return (
    <>
      <Div className={cx('flex flex--dir--col min-height-vh-full flex--jc--between')}>
        <Div>
          {hasHeader && <Header />}
          <Div type="flex" direction="vertical" className={cx('p2', styles.mainContainer)}>
            {children}
          </Div>
        </Div>
        {hasFooter && <Footer />}
      </Div>
    </>
  );
};

export default PageContainer;
