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
import UserNav from '@/baseComponents/UserNav';

import { USER_GROUPS } from '@/constants/userGroups';
import { setCurUserGroup } from '@/reducers/general/curUserGroup';

import styles from './PageContainer.module.scss';
import { USE_GOOGLE_ANALYTICS, GOOGLE_ANALYTICS_ID, USE_HOTJAR, HOTJAR_ID } from 'config';

const PageContainer = ({
  pageIdentifier = '',
  pageSubNavIdentifier = '',
  pageDashboardIdentifier = '',
  hasHeader = true,
  hasFooter = true,
  hasStickyHeader = false,
  hasStickyFooter = false,
  hasSideBarDashboard = false,
  hasFooterNavInMobile = false,
  changesThePage = true,
  hasScrollToTop = true,
  hasWavyShape = true,
  footerIsColored = true,
  headerColorType = 'light',
  isAppPage = false,
  usersOfThePage = '',
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
    window?.scrollTo(0, 0);
  }, []);

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

  useEffect(() => {
    if (usersOfThePage) {
      dispatch(setCurUserGroup(usersOfThePage));
    }
  }, [usersOfThePage]);

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
      <Div className={cx(isAppPage ? 'bgCyan' : 'bgWhite')}>
        <Div
          type="flex"
          className={cx(hasSideBarDashboard && 'maxContainerWidthForApp pos-rel bgFaded')}>
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
              hasSideBarDashboard && styles.headerAndBodyContianer
            )}>
            <Div className="flex--gr--1">
              {hasHeader && !hasStickyFooter ? (
                <Div ref={(el) => (headerRef.current = el)}>
                  <Header
                    hasStickyHeader={hasStickyHeader}
                    changesThePage={changesThePage}
                    hasWavyShape={hasWavyShape}
                    headerColorType={headerColorType}
                    isAppPage={isAppPage}
                  />
                </Div>
              ) : hasHeader && hasStickyFooter && hasStickyHeader ? (
                <Div ref={(el) => (headerRef.current = el)}>
                  <Header
                    hasStickyHeader={hasStickyHeader}
                    changesThePage={changesThePage}
                    hasWavyShape={hasWavyShape}
                    headerColorType={headerColorType}
                    isAppPage={isAppPage}
                  />
                </Div>
              ) : (
                ''
              )}
              <DivMinFullHeight
                divHeightIsConst={hasStickyFooter}
                className={cx(
                  hasStickyHeader && styles.mainContentContainer,
                  hasSideBarDashboard && styles.headerAndBodyContianer
                )}>
                {hasHeader && hasStickyFooter && !hasStickyHeader ? (
                  <Header
                    hasStickyHeader={false}
                    changesThePage={changesThePage}
                    hasWavyShape={hasWavyShape}
                    headerColorType={headerColorType}
                    isAppPage={isAppPage}
                  />
                ) : (
                  ''
                )}
                <Div
                  className={cx(
                    hasSideBarDashboard && profile?.id ? styles.container : '',
                    hasSideBarDashboard && sideBarDashboardIsActive && profile?.id
                      ? styles.containerWhenDashboardIsActive
                      : ''
                  )}>
                  <Div
                    className={cx(
                      hasSideBarDashboard && styles.bodyContainer,
                      hasSideBarDashboard && 'p2 of-x-hidden'
                    )}>
                    {children}
                  </Div>
                </Div>
              </DivMinFullHeight>
            </Div>

            <Div ref={(el) => (footerRef.current = el)}>
              {hasFooterNavInMobile && profile?.id ? (
                <Div showIn={smDesignSize}>
                  <FooterNavigation />
                </Div>
              ) : (
                ''
              )}
              {hasFooter && <Footer footerIsColored={footerIsColored} />}
            </Div>
          </DivMinFullHeight>

          {hasScrollToTop && scrollPosition > 0 ? (
            <Div className={cx('pos-fix', styles.scrollToTopContainer)}>
              <ScrollToTop />
            </Div>
          ) : (
            ''
          )}

          {/* {profile?.user?.groups?.some((item) =>
            [USER_GROUPS.APP_ADMIN, USER_GROUPS.DEVELOPER]?.includes(item)
          ) && <AdminToolbar />} */}

          <Div>
            <UserNav />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default PageContainer;
