import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Image as BaseImage } from 'basedesign-iswad';

import { resizeImage, getResizedImg } from '../utils';
import { RESIZE_IMAGE_CANVAS_ID, IMAGE_RESIZER_ID, RESIZER_ID } from '../constants';

import styles from '../ImagePicker.module.scss';

const Resizer = ({ src, setSrc, setFile, fileName, maxWidth, setShowResizer }) => {
  const doResize = () => {
    return new Promise(function (resolve, reject) {
      const resized = resizeImage(src, maxWidth);
      setTimeout(() => {
        if (resized) {
          resolve('Stuff worked!');
        } else {
          reject(Error('It broke'));
        }
      }, 1000);
    });
  };

  const resizeHandler = () => {
    doResize().then(() => {
      setFile(getResizedImg(setSrc, fileName));
      setShowResizer(false);
    });
  };

  useEffect(() => {
    if (src && maxWidth) {
      setTimeout(() => {
        resizeHandler();
      }, [500]);
    }
  }, [src, maxWidth]);

  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className="pos-fix pos-fix--lt w-per-100 height-vh-full z-10000 bgBlack op-90 textWhite">
        Processing your image
      </Div>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx(
          'pos-fix pos-fix--center p2 bgWhite ImagePickerCropperContainerZIndex',
          styles.cropperContainer
        )}
        id={RESIZER_ID}>
        <Div className={styles.reactCropper}>
          <Div type="flex" hAlign="center" vAlign="center" className={cx(styles.cropper)}>
            <BaseImage src={src} id={IMAGE_RESIZER_ID} />
          </Div>
        </Div>
        <Div type="flex" hAlign="center" vAlign="center" className="w-per-100 mt2">
          <Div className={cx('ImagePickerCanvasContainerZIndex', styles.canvasContainer)}>
            <canvas id={RESIZE_IMAGE_CANVAS_ID} className=""></canvas>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Resizer;
