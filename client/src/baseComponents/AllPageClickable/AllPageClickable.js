import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './AllPageClickable.module.scss';

const AllPageClickable = ({ ...props }) => {
  return (
    <>
      <Div
        className="pos-fix pos-fix--lt w-per-100 height-vh-full bgBlack op-30 AllPageClickableZIndex"
        {...props}></Div>
    </>
  );
};

export default AllPageClickable;
