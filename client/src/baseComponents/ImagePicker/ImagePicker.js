import React, { useState, useRef } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import DefaultPicker from './subs/ImagePickers/DefaultPicker';
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
  className
}) => {
  const inputFileField = useRef();

  const [src, setSrc] = useState('');
  const [fileName, setFileName] = useState('');
  const [showCropper, setShowCropper] = useState(false);
  const [showResizer, setShowResizer] = useState(false);

  const fileChangeHandler = (e) => {
    if (e.target?.files?.[0]) {
      const localFile = e.target.files[0];
      setFile(localFile);
      setFileName(localFile?.name);
      setSrc(URL.createObjectURL(localFile));
      setShowCropper(true);
      setShowResizer(true);
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
        />
      ) : (
        ''
      )}
      {type === 'default' && (
        <DefaultPicker
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
        />
      )}
    </>
  );
};

export default ImagePicker;
