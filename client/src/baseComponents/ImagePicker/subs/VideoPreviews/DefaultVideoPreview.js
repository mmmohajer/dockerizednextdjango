import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Close from '@/baseComponents/Close';
import AppImage from '@/baseComponents/AppImage';

import { COLORS } from '@/constants/vars';

import styles from '../../ImagePicker.module.scss';

const DefaultVideoPreview = ({
  src,
  setFile,
  setSrc,
  setFileName,
  inputFileField,
  setInitialSrc
}) => {
  return (
    <>
      {src && (
        <Div
          type="flex"
          direction="vertical"
          className={cx('ml1 of-hidden w-px-100 height-px-100', styles.previewContainer)}>
          <Close
            barColor={COLORS.themeOne}
            barHeight="25px"
            iconScale={0.8}
            iconCircleSize="15px"
            onClick={() => {
              setFile('');
              setSrc('');
              setFileName('');
              if (setInitialSrc) {
                setInitialSrc('');
              }
              inputFileField.current.value = null;
            }}
          />
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx('pos-rel w-per-100 height-px-70')}>
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className={cx('pos-rel mouse-hand of-hidden', styles.imagePreviewContainer)}>
              <video width="90" height="60" controls>
                <source src={src} type="video/mp4"></source>
                <source src={src} type="video/webm"></source>
                <source src={src} type="video/ogg"></source>
                Your browser does not support the video tag.
              </video>
            </Div>
          </Div>
        </Div>
      )}
    </>
  );
};

export default DefaultVideoPreview;
