import React from 'react';
import cx from 'classnames';
import { Div, Label, Input } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import DefaultVideoPreview from '../VideoPreviews/DefaultVideoPreview';
import styles from '../../ImagePicker.module.scss';

const DefaultPicker = ({
  labelText,
  isRequired,
  fileChangeHandler,
  src,
  setSrc,
  setFile,
  setFileName,
  inputFileField,
  errorMessage,
  errorHandler,
  setInitialSrc,
  previewer = 'default',
  hasDefaultClass = true,
  className
}) => {
  return (
    <>
      <Div
        className={cx('pos-rel', hasDefaultClass ? 'mainInputContainer' : '', className)}
        onClick={() => {
          if (errorHandler) {
            errorHandler('');
          }
        }}>
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
              accept=".mp4,.webm,.ogg,.avi,.mkv,.flv,.wmv,.mov"
              ref={(el) => (inputFileField.current = el)}
            />
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className={cx(styles.iconContainer)}
              color="#ccc">
              <Icon type="circle-play" color={COLORS.grayDark} scale={4} />
            </Div>
          </Label>
          {previewer === 'default' ? (
            <DefaultVideoPreview
              src={src}
              setSrc={setSrc}
              setFile={setFile}
              setFileName={setFileName}
              inputFileField={inputFileField}
              setInitialSrc={setInitialSrc}
            />
          ) : (
            ''
          )}
        </Div>
        <Div className={cx('inputErrorMessage', errorMessage && 'inputErrorMessageIsActive')}>
          {errorMessage}
        </Div>
      </Div>
    </>
  );
};

export default DefaultPicker;
