import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { setActiveMenu } from '@/reducers/general/activeMenu';

import Header from '@/baseComponents/Header';
import Footer from '@/baseComponents/Footer';

import styles from './PageContainer.module.scss';

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

  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    if (pageIdentifier) {
      dispatch(setActiveMenu(pageIdentifier));
    }
  }, [pageIdentifier]);

  useEffect(() => {
    if (window?.innerHeight) {
      let bodyHeight = window.innerHeight || 0;
      if (headerRef?.current && footerRef?.current) {
        setMinHeight(
          bodyHeight - headerRef?.current?.clientHeight - footerRef?.current?.clientHeight
        );
      } else if (headerRef?.current && !footerRef?.current) {
        setMinHeight(bodyHeight - headerRef?.current?.clientHeight);
      } else if (!headerRef?.current && footerRef?.current) {
        setMinHeight(bodyHeight - footerRef?.current?.clientHeight);
      } else if (!headerRef?.current && !footerRef?.current) {
        setMinHeight(bodyHeight);
      }
    }
  }, [headerRef?.current?.clientHeight, footerRef?.current?.clientHeight]);

  return (
    <>
      <Div className={cx('flex flex--dir--col min-height-vh-full flex--jc--between')}>
        <Div className="flex--gr--1">
          {hasHeader && (
            <Div ref={(el) => (headerRef.current = el)}>
              <Header hasStickyHeader={hasStickyHeader} changesThePage={changesThePage} />
            </Div>
          )}
          <Div className={cx(hasStickyHeader && styles.mainContentContainer)} style={{ minHeight }}>
            {children}
          </Div>
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
