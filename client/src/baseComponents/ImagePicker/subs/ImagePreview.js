import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import Image from 'next/image';

import Close from '@/baseComponents/Close';

import styles from '../ImagePicker.module.scss';

const ImagePreview = ({ src, setFile, setSrc, setFileName, inputFileField }) => {
  return (
    <>
      {src && (
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('pos-rel w-px-100 height-px-100 ml1', styles.previewerContainer)}>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx('ml1 pos-rel mouse-hand of-hidden', styles.imagePreviewContainer)}>
            <Image width={60} height={60} src={src} objectFit="cover" />
          </Div>
          <Close
            type={2}
            className=""
            onClick={() => {
              setFile('');
              setSrc('');
              setFileName('');
              inputFileField.current.value = null;
            }}
          />
        </Div>
      )}
    </>
  );
};

export default ImagePreview;
