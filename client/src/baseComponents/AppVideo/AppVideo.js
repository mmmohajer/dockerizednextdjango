import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './AppVideo.module.scss';

const AppVideo = ({ width, height, src }) => {
  return (
    <>
      <video width={width} height={height} controls>
        <source src="src" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default AppVideo;
