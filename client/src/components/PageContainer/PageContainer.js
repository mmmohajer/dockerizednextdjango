import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';
import Script from 'next/script';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setElementsHeightStore } from '@/reducers/general/elementsHeightStore';

import Header from '@/baseComponents/Header';
import Footer from '@/baseComponents/Footer';
import DivMinFullHeight from '@/baseComponents/DivMinFullHeight';

import styles from './PageContainer.module.scss';
import { USE_GOOGLE_ANALYTICS, GOOGLE_ANALYTICS_ID } from 'config';

const PageContainer = ({
  pageIdentifier,
  hasHeader = true,
  hasFooter = true,
  hasStickyHeader = false,
  changesThePage = true,
  children
}) => {
  const dispatch = useDispatch();
  const headerRef = useRef();
  const footerRef = useRef();
  const elementsHeightStore = useSelector((state) => state.elementsHeightStore);

  useEffect(() => {
    if (pageIdentifier) {
      dispatch(setActiveMenu(pageIdentifier));
    }
  }, [pageIdentifier]);

  useEffect(() => {
    const localElementsHeightStore = { ...elementsHeightStore };
    if (headerRef?.current?.clientHeight) {
      localElementsHeightStore['headerHeight'] = headerRef.current.clientHeight;
    }
    if (footerRef?.current?.clientHeight) {
      localElementsHeightStore['footerHeight'] = footerRef.current.clientHeight;
    }
    dispatch(setElementsHeightStore(localElementsHeightStore));
  }, [headerRef?.current?.clientHeight, footerRef?.current?.clientHeight]);

  return (
    <>
      {USE_GOOGLE_ANALYTICS && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GOOGLE_ANALYTICS_ID}');
        `}
          </Script>
        </>
      )}

      <Div className={cx('flex flex--dir--col min-height-vh-full flex--jc--between')}>
        <Div className="flex--gr--1">
          {hasHeader && (
            <Div ref={(el) => (headerRef.current = el)}>
              <Header hasStickyHeader={hasStickyHeader} changesThePage={changesThePage} />
            </Div>
          )}
          <DivMinFullHeight className={cx(hasStickyHeader && styles.mainContentContainer)}>
            {children}
          </DivMinFullHeight>
        </Div>
        {hasFooter && (
          <Div ref={(el) => (footerRef.current = el)}>
            <Footer />
          </Div>
        )}
      </Div>
    </>
  );
};

export default PageContainer;
