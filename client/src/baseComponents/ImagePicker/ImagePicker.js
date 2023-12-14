import React, { useState, useRef, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';

import DefaultImagePicker from './subs/ImagePickers/DefaultPicker';
import DefaultVideoPicker from './subs/VideoPickers/DefaultPicker';
import Cropper from './subs/Cropper';
import Resizer from './subs/Resizer';
import styles from './ImagePicker.module.scss';

const ImagePicker = ({
  labelText,
  isRequired,
  file,
  setFile,
  hasCropper = true,
  cropInfo,
  hasResizer = false,
  maxWidth,
  errorMessage,
  errorHandler,
  type = 'default',
  initialSrc = '',
  setInitialSrc,
  initialSrcComesFromOurServer = false,
  previewer = 'default',
  className,
  hasDefaultClass,
  fileType = 'image'
}) => {
  const inputFileField = useRef();

  const [src, setSrc] = useState('');
  const [fileName, setFileName] = useState('');
  const [showCropper, setShowCropper] = useState(false);
  const [showResizer, setShowResizer] = useState(false);

  useEffect(() => {
    if (initialSrc) {
      if (initialSrcComesFromOurServer) {
        setSrc(`${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}${initialSrc}`);
      } else {
        setSrc(initialSrc);
      }
    }
  }, [initialSrc]);

  const fileChangeHandler = (e) => {
    if (e.target?.files?.[0]) {
      const localFile = e.target.files[0];
      setFile(localFile);
      setFileName(localFile?.name);
      setSrc(URL.createObjectURL(localFile));
      setShowCropper(true);
      if (hasResizer) {
        setShowResizer(true);
      }
    }
  };

  return (
    <>
      {hasResizer && showResizer ? (
        <Resizer
          src={src}
          setSrc={setSrc}
          setFile={setFile}
          fileName={fileName}
          setShowResizer={setShowResizer}
          maxWidth={maxWidth}
        />
      ) : (
        ''
      )}

      {hasCropper && showCropper && !showResizer ? (
        <Cropper
          src={src}
          setSrc={setSrc}
          setFile={setFile}
          fileName={fileName}
          setShowCropper={setShowCropper}
          cropInfo={cropInfo}
          mainMaxWidth={maxWidth}
        />
      ) : (
        ''
      )}
      {fileType === 'image' && type === 'default' ? (
        <DefaultImagePicker
          labelText={labelText}
          isRequired={isRequired}
          fileChangeHandler={fileChangeHandler}
          src={src}
          setSrc={setSrc}
          setFile={setFile}
          setFileName={setFileName}
          inputFileField={inputFileField}
          errorMessage={errorMessage}
          errorHandler={errorHandler}
          className={cx(className)}
          setInitialSrc={setInitialSrc}
          previewer={previewer}
          hasDefaultClass={hasDefaultClass}
        />
      ) : (
        ''
      )}

      {fileType === 'video' && type === 'default' ? (
        <DefaultVideoPicker
          labelText={labelText}
          isRequired={isRequired}
          fileChangeHandler={fileChangeHandler}
          src={src}
          setSrc={setSrc}
          setFile={setFile}
          setFileName={setFileName}
          inputFileField={inputFileField}
          errorMessage={errorMessage}
          errorHandler={errorHandler}
          className={cx(className)}
          setInitialSrc={setInitialSrc}
          previewer={previewer}
          hasDefaultClass={hasDefaultClass}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default ImagePicker;
