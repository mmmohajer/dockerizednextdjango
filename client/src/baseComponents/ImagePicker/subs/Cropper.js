import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import ReactCrop from 'react-image-crop';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';
import Button from '@/baseComponents/Button';
import Close from '@/baseComponents/Close';

import { COLORS } from '@/constants/vars';

import 'react-image-crop/dist/ReactCrop.css';

import { cropImage, getCroppedImg } from '../utils';
import { CANVAS_ID, IMAGE_CROPPER_ID, CROPPER_ID } from '../constants';

import styles from '../ImagePicker.module.scss';

const Cropper = ({ src, setSrc, setFile, fileName, setShowCropper, cropInfo, mainMaxWidth }) => {
  const aspect = cropInfo?.aspect || 1;
  const minWidth = cropInfo?.minWidth || 0;
  const minHeight = cropInfo?.minHeight || 0;
  const maxWidth = cropInfo?.maxWidth || 200;
  const maxHeight = cropInfo?.maxHeight || 200;
  const useScaledSize = cropInfo?.useScaledSize;

  const [crop, setCrop] = useState();
  const [widthScale, setWidthScale] = useState(1);
  const [heightScale, setHeightScale] = useState(1);
  const [showSubmit, setShowSubmit] = useState(false);

  const doCrop = () => {
    return new Promise(function (resolve, reject) {
      console.log(crop.width);
      console.log(crop.height);
      const cropped = cropImage(src, crop.x, crop.y, crop.width, crop.height);
      setTimeout(() => {
        if (cropped) {
          resolve('Stuff worked!');
        } else {
          reject(Error('It broke'));
        }
      }, 1000);
    });
  };

  const cropHandler = (e) => {
    e.preventDefault();
    if (crop?.width) {
      doCrop().then(() => {
        setFile(getCroppedImg(setSrc, fileName));
        setShowCropper(false);
      });
    }
  };

  const getScaledVal = () => {
    const cropper = document.getElementById(CROPPER_ID);
    const originalImage = new Image();
    originalImage.src = src;
    setTimeout(() => {
      setWidthScale(cropper.offsetWidth / originalImage.width);
      setHeightScale(cropper.offsetHeight / originalImage.height);
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
        hAlign="start"
        vAlign="start"
        className={cx(
          'pos-fix pos-fix--center bgWhite z-100000 br-rad-px-10 of-x-hidden of-y-hidden pb2',
          styles.cropperContainer
        )}
        id={CROPPER_ID}>
        <Div className="w-per-100">
          <Close
            barHeight="40px"
            onClick={() => setShowCropper(false)}
            barColor={COLORS.themeOne}
            iconScale={1.3}
            type={1}
          />
        </Div>
        {showSubmit && (
          <ReactCrop
            aspect={aspect}
            minWidth={minWidth * widthScale}
            minHeight={minHeight * heightScale}
            maxWidth={maxWidth * widthScale}
            maxHeight={maxHeight * heightScale}
            crop={crop}
            onChange={(c) => {
              setCrop(c);
            }}
            className={styles.reactCropper}>
            <Div type="flex" hAlign="center" vAlign="center" className={cx(styles.cropper)}>
              <AppImage
                src={src}
                id={IMAGE_CROPPER_ID}
                width={mainMaxWidth || 500}
                height={mainMaxWidth || 500}
                objectFit="contain"
              />
            </Div>
          </ReactCrop>
        )}
        {!showSubmit && (
          <Div type="flex" hAlign="center" vAlign="center" className={cx(styles.cropper)}>
            <AppImage
              src={src}
              id={IMAGE_CROPPER_ID}
              width={mainMaxWidth || 500}
              height={mainMaxWidth || 500}
              objectFit="contain"
            />
          </Div>
        )}
        <Div type="flex" hAlign="center" vAlign="center" className="w-per-100 mt2">
          {!showSubmit && (
            <Button
              btnType={2}
              className={cx('')}
              onClick={(e) => {
                e.preventDefault();
                setCrop({
                  width: minWidth,
                  height: minWidth / aspect,
                  x: 0,
                  y: 0,
                  unit: 'px'
                });
                setShowSubmit(true);
              }}>
              Crop
            </Button>
          )}
          {showSubmit && (
            <Button
              btnType={2}
              isDisabled={!crop?.width}
              className={cx('mb2')}
              onClick={cropHandler}>
              Submit
            </Button>
          )}
          <Div className={cx(styles.canvasContainer)}>
            <canvas id={CANVAS_ID} className=""></canvas>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Cropper;
