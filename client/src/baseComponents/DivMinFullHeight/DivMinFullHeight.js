import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import styles from './DivMinFullHeight.module.scss';

const DivMinFullHeight = ({ style = {}, children, ...props }) => {
  const elementsHeightStore = useSelector((state) => state.elementsHeightStore);

  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    console.log(elementsHeightStore?.headerHeight);
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
  return (
    <>
      <Div style={{ ...style, minHeight }} {...props}>
        {children}
      </Div>
    </>
  );
};

export default DivMinFullHeight;
