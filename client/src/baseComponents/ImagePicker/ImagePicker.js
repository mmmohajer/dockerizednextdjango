import React, { useState, useRef } from 'react';
import cx from 'classnames';
import { Div, Label, Input } from 'basedesign-iswad';

import { COLORS } from '@/constants/vars';

import Icon from '@/baseComponents/Icon';
import ImagePreview from './subs/ImagePreview';
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
      <Div className={cx('mainInputContainer pos-rel', className)} onClick={() => errorHandler('')}>
        {labelText && (
          <Div className={cx('labelForInputContainer')}>
            <Label className={cx(isRequired && 'required', 'labelForInput')}>{labelText}</Label>
          </Div>
        )}
        <Div type="flex" hAlign="start" vAlign="center" className={cx('inputFieldContainer')}>
          <Label>
            <Input
              type="file"
              onChange={fileChangeHandler}
              className="no-display"
              accept=".jpg,.jpeg,.png"
              ref={(el) => (inputFileField.current = el)}
            />
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className={cx(styles.iconContainer)}
              color="#ccc">
              <Icon type="image-upload" color={COLORS.grayDark} scale={4} />
            </Div>
          </Label>
          <ImagePreview
            src={src}
            setSrc={setSrc}
            setFile={setFile}
            setFileName={setFileName}
            inputFileField={inputFileField}
          />
        </Div>
        <Div className={cx('inputErrorMessage', errorMessage && 'inputErrorMessageIsActive')}>
          {errorMessage}
        </Div>
      </Div>
    </>
  );
};

export default ImagePicker;
