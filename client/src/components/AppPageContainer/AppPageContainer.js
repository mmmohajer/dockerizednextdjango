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
import ScrollToTop from '@/baseComponents/ScrollToTop';
import AdminToolbar from '@/baseComponents/AdminToolbar/AdminToolbar';

import { USER_GROUPS } from '@/constants/userGroups';

import styles from './AppPageContainer.module.scss';
import { USE_GOOGLE_ANALYTICS, GOOGLE_ANALYTICS_ID, USE_HOTJAR, HOTJAR_ID } from 'config';

const AppPageContainer = ({
  pageDashboardIdentifier = '',
  hasHeader = true,
  hasStickyHeader = false,
  hasFooter = false,
  hasSideBarDashboard = true,
  hasScrollToTop = true,
  children
}) => {
  const dispatch = useDispatch();
  const headerRef = useRef();
  const footerRef = useRef();
  const elementsHeightStore = useSelector((state) => state.elementsHeightStore);
  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);
  const profile = useSelector((state) => state.profile);
  const scrollPosition = useSelector((state) => state.scrollPosition);

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

      {USE_HOTJAR && (
        <Script>
          {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>
      )}

      <Div className={cx('bgCyan')}>
        <Div type="flex" className={cx(hasSideBarDashboard && 'maxContainerWidth pos-rel bgWhite')}>
          {hasSideBarDashboard && profile?.id ? (
            <Div
              showIn={lgDesignSize}
              className={cx('pos-abs pos-abs--lt', styles.sideBarContainer)}>
              <SideBarDashboard />
            </Div>
          ) : (
            ''
          )}
          <DivMinFullHeight
            className={cx(
              'flex flex--dir--col min-height-vh-full flex--jc--between w-per-100',
              hasSideBarDashboard && profile?.id ? styles.headerAndBodyContianer : ''
            )}>
            <Div className="flex--gr--1">
              {hasHeader && hasStickyHeader ? (
                <Div ref={(el) => (headerRef.current = el)}>
                  <Header hasStickyHeader={hasStickyHeader} />
                </Div>
              ) : (
                ''
              )}
              <DivMinFullHeight
                divHeightIsConst={true}
                className={cx(
                  hasStickyHeader && styles.mainContentContainer,
                  hasSideBarDashboard && styles.headerAndBodyContianer
                )}>
                {hasHeader && !hasStickyHeader ? <Header hasStickyHeader={false} /> : ''}
                <Div
                  className={cx(
                    hasSideBarDashboard && profile?.id ? styles.container : '',
                    hasSideBarDashboard && sideBarDashboardIsActive && profile?.id
                      ? styles.containerWhenDashboardIsActive
                      : ''
                  )}>
                  <Div
                    className={cx(hasSideBarDashboard && profile?.id ? styles.bodyContainer : '')}>
                    {children}
                  </Div>
                </Div>
              </DivMinFullHeight>
            </Div>

            <Div ref={(el) => (footerRef.current = el)}>
              {profile?.id ? (
                <Div showIn={smDesignSize}>
                  <FooterNavigation />
                </Div>
              ) : (
                ''
              )}
              {hasFooter && <Footer />}
            </Div>
          </DivMinFullHeight>

          {hasScrollToTop && scrollPosition > 0 ? (
            <Div className={cx('pos-fix', styles.scrollToTopContainer)}>
              <ScrollToTop />
            </Div>
          ) : (
            ''
          )}

          {profile?.user?.groups?.some((item) =>
            [USER_GROUPS.APP_ADMIN, USER_GROUPS.DEVELOPER]?.includes(item)
          ) && <AdminToolbar />}
        </Div>
      </Div>
    </>
  );
};

export default AppPageContainer;
