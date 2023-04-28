import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import Image from 'next/image';

import Close from '@/baseComponents/Close';

import { COLORS } from '@/constants/vars';

import styles from '../../ImagePicker.module.scss';

const DefaultImagePreview = ({ src, setFile, setSrc, setFileName, inputFileField }) => {
  return (
    <>
      {src && (
        <Div
          type="flex"
          direction="vertical"
          className={cx('ml1 of-hidden w-px-100 height-px-100', styles.previewContainer)}>
          <Close
            barColor={COLORS.themeThree}
            barHeight="25px"
            iconScale={0.4}
            iconCircleSize="15px"
            onClick={() => {
              setFile('');
              setSrc('');
              setFileName('');
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
              className={cx('ml1 pos-rel mouse-hand of-hidden', styles.imagePreviewContainer)}>
              <Image width={60} height={60} src={src} objectFit="cover" />
            </Div>
          </Div>
        </Div>
      )}
    </>
  );
};

export default DefaultImagePreview;
