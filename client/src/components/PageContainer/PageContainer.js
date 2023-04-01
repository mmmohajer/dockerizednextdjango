import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';
import Script from 'next/script';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';
import { setActiveDashboardMenu } from '@/reducers/general/activeDashboardMenu';
import { setElementsHeightStore } from '@/reducers/general/elementsHeightStore';
import { smDesignSize, lgDesignSize } from '@/constants/vars';

import Header from '@/baseComponents/Header';
import Footer from '@/baseComponents/Footer';
import DivMinFullHeight from '@/baseComponents/DivMinFullHeight';
import SideBarDashboard from '@/baseComponents/SideBarDashboard';
import FooterNavigation from '@/baseComponents/FooterNavigation/FooterNavigation';

import styles from './PageContainer.module.scss';
import { USE_GOOGLE_ANALYTICS, GOOGLE_ANALYTICS_ID } from 'config';

const PageContainer = ({
  pageIdentifier = '',
  pageSubNavIdentifier = '',
  pageDashboardIdentifier = '',
  hasHeader = true,
  hasFooter = true,
  hasStickyHeader = false,
  hasStickyFooter = false,
  hasSideBarDashboard = true,
  changesThePage = false,
  children
}) => {
  const dispatch = useDispatch();
  const headerRef = useRef();
  const footerRef = useRef();
  const elementsHeightStore = useSelector((state) => state.elementsHeightStore);
  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(setActiveMenu(pageIdentifier));
  }, [pageIdentifier]);

  useEffect(() => {
    dispatch(setActiveSubMenu(pageSubNavIdentifier));
  }, [pageSubNavIdentifier]);

  useEffect(() => {
    dispatch(setActiveDashboardMenu(pageDashboardIdentifier));
  }, [pageDashboardIdentifier]);

  useEffect(() => {
    const localElementsHeightStore = { ...elementsHeightStore };
    if (headerRef?.current?.clientHeight) {
      localElementsHeightStore['headerHeight'] = headerRef.current.clientHeight;
    }
    if (footerRef?.current?.clientHeight) {
      localElementsHeightStore['footerHeight'] = footerRef.current.clientHeight;
    }
    if (!headerRef?.current?.clientHeight) {
      localElementsHeightStore['headerHeight'] = 0;
    }
    if (!footerRef?.current?.clientHeight) {
      localElementsHeightStore['footerHeight'] = 0;
    }
    dispatch(setElementsHeightStore(localElementsHeightStore));
  }, [headerRef?.current?.clientHeight, footerRef?.current?.clientHeight, profile]);

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

      <Div
        className={cx(
          'flex flex--dir--col min-height-vh-full flex--jc--between',
          hasSideBarDashboard && profile?.id ? styles.container : '',
          hasSideBarDashboard && sideBarDashboardIsActive && profile?.id
            ? styles.containerWhenDashboardIsActive
            : ''
        )}>
        <Div className="flex--gr--1">
          {hasHeader && !hasStickyFooter ? (
            <Div ref={(el) => (headerRef.current = el)}>
              <Header hasStickyHeader={hasStickyHeader} changesThePage={changesThePage} />
            </Div>
          ) : hasHeader && hasStickyFooter && hasStickyHeader ? (
            <Div ref={(el) => (headerRef.current = el)}>
              <Header hasStickyHeader={hasStickyHeader} changesThePage={changesThePage} />
            </Div>
          ) : (
            ''
          )}
          <DivMinFullHeight
            divHeightIsConst={hasStickyFooter}
            className={cx('of-y-auto', hasStickyHeader && styles.mainContentContainer)}>
            {hasHeader && hasStickyFooter && !hasStickyHeader ? (
              <Header hasStickyHeader={false} changesThePage={changesThePage} />
            ) : (
              ''
            )}
            <Div className="">{children}</Div>
          </DivMinFullHeight>
        </Div>

        <Div ref={(el) => (footerRef.current = el)}>
          {profile?.id && (
            <Div showIn={smDesignSize}>
              <FooterNavigation />
            </Div>
          )}
          {hasFooter && <Footer />}
        </Div>
      </Div>
      {hasSideBarDashboard && profile?.id ? (
        <Div showIn={lgDesignSize}>
          <SideBarDashboard />
        </Div>
      ) : (
        ''
      )}
    </>
  );
};

export default PageContainer;
