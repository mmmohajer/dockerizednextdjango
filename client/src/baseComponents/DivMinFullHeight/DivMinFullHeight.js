import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import styles from './DivMinFullHeight.module.scss';

const DivMinFullHeight = ({ divHeightIsConst = false, style = {}, children, ...props }) => {
  const elementsHeightStore = useSelector((state) => state.elementsHeightStore);

  const [minHeight, setMinHeight] = useState(0);
  const [curStyle, setCurStyle] = useState({});

  useEffect(() => {
    if (window?.innerHeight) {
      let bodyHeight = window.innerHeight || 0;
      if (elementsHeightStore?.headerHeight && elementsHeightStore?.footerHeight) {
        setMinHeight(
          bodyHeight - elementsHeightStore.headerHeight - elementsHeightStore.footerHeight
        );
      } else if (elementsHeightStore?.headerHeight && !elementsHeightStore?.footerHeight) {
        setMinHeight(bodyHeight - elementsHeightStore.headerHeight);
      } else if (!elementsHeightStore?.headerHeight && elementsHeightStore?.footerHeight) {
        setMinHeight(bodyHeight - elementsHeightStore.footerHeight);
      } else if (!elementsHeightStore?.headerHeight && !elementsHeightStore?.footerHeight) {
        setMinHeight(bodyHeight);
      }
    }
  }, [elementsHeightStore?.headerHeight, elementsHeightStore?.footerHeight]);

  useEffect(() => {
    if (minHeight < 0) {
      setMinHeight(0);
    }
  }, [minHeight]);

  useEffect(() => {
    if (minHeight >= 0) {
      if (divHeightIsConst) {
        setCurStyle({ height: minHeight });
      } else {
        setCurStyle({ minHeight });
      }
    }
  }, [divHeightIsConst, minHeight]);

  return (
    <>
      <Div style={{ ...style, ...curStyle }} {...props}>
        {children}
      </Div>
    </>
  );
};

export default DivMinFullHeight;
