import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { generateRandomName } from '@/utils/helpers';

import styles from './DownloadBtn.module.scss';

const DownloadBtn = ({ btnTitle = '', imgSrc, imgName = '' }) => {
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    if (imgName?.length) {
      setFileName(imgName);
    } else {
      setFileName(generateRandomName(8));
    }
  }, [imgName]);

  const handleDownload = () => {
    fetch(imgSrc)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.jpg`;
        a.click();
      });
  };

  return (
    <>
      <Div>
        <Button className={'w-px-200'} btnType={2} onClick={handleDownload}>
          {btnTitle}
        </Button>
      </Div>
    </>
  );
};

export default DownloadBtn;
