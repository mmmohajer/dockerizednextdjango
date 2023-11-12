import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import styles from './DivWidthDynamic.module.scss';

const DivWidthDynamic = ({ setContainerWidth, children, ...props }) => {
  const containerRef = useRef();
  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);

  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    if (containerRef?.current?.clientWidth) {
      setContainerWidth(containerRef.current.clientWidth);
    }
  }, [containerRef?.current?.clientWidth, showDiv]);

  useEffect(() => {
    setShowDiv(false);
    setTimeout(() => {
      setShowDiv(true);
    }, 600);
  }, [sideBarDashboardIsActive]);

  return (
    <>
      {showDiv && (
        <Div ref={(el) => (containerRef.current = el)} {...props}>
          {children}
        </Div>
      )}
    </>
  );
};

export default DivWidthDynamic;
