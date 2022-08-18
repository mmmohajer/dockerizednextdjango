import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Image as BaseImage } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import 'react-image-crop/dist/ReactCrop.css';

import { resizeImage, getResizedImg } from '../utils';
import { RESIZE_IMAGE_CANVAS_ID, IMAGE_RESIZER_ID, RESIZER_ID } from '../constants';

import styles from '../ImagePicker.module.scss';

const Cropper = ({
  src,
  setSrc,
  setFile,
  fileName,
  maxWidth,
  setShowResizer,
  useScaledSize = false
}) => {
  const [widthScale, setWidthScale] = useState(1);
  const [heightScale, setHeightScale] = useState(1);

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

  const resizeHandler = (e) => {
    e.preventDefault();
    doResize().then(() => {
      setFile(getResizedImg(setSrc, fileName));
      setShowResizer(false);
    });
  };

  const getScaledVal = () => {
    const resizer = document.getElementById(CROPPER_ID);
    const originalImage = new Image();
    originalImage.src = src;
    setTimeout(() => {
      setWidthScale(resizer.offsetWidth / originalImage.width);
      setHeightScale(resizer.offsetHeight / originalImage.height);
    }, 1000);
  };

  useEffect(() => {
    if (useScaledSize) {
      getScaledVal();
    }
  }, [src, useScaledSize]);

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('pos-fix pos-fix--center p2 bgWhite', styles.cropperContainer)}
        id={RESIZER_ID}>
        <Div className={styles.reactCropper}>
          <Div type="flex" hAlign="center" vAlign="center" className={cx(styles.cropper)}>
            <BaseImage src={src} id={IMAGE_RESIZER_ID} />
          </Div>
        </Div>
        <Div type="flex" hAlign="center" vAlign="center" className="w-per-100 mt2">
          <Button onClick={resizeHandler}>Resize Image</Button>
          <Div className={cx(styles.canvasContainer)}>
            <canvas id={RESIZE_IMAGE_CANVAS_ID} className=""></canvas>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Cropper;
