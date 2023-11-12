import React, { useState, useEffect, useCallback } from 'react';
import cx from 'classnames';
import { Div, DragDropFileUpload } from 'basedesign-iswad';

import DefaultDraggableElement from './subs/DefaultDraggableElement';
import styles from './DraggableFileUploader.module.scss';

const DraggableFileUploader = ({
  file,
  setFile,
  acceptableFileType,
  inputId = 'draggableFileUploaderId',
  acceptableFileString = '.csv',
  iconType = 'file-upload',
  type = 'default'
}) => {
  const [openFileBrowser, setOpenFileBrowser] = useState();
  const [inputName, setInputName] = useState('');

  const removeFileClickHandler = useCallback(() => {
    setFile(null);
    const inputFileFiled = document.getElementById(inputId);
    inputFileFiled.value = null;
  }, []);

  const draggableElement = () => {
    if (type === 'default') {
      return (
        <DefaultDraggableElement
          file={file}
          iconType={iconType}
          setOpenFileBrowser={setOpenFileBrowser}
          acceptableFileString={acceptableFileString}
          removeFileClickHandler={removeFileClickHandler}
        />
      );
    }
  };

  useEffect(() => {
    if (file) {
      Object.keys(file || {})?.forEach((key) => {
        setInputName(file[key]?.name);
      });
    }
  }, [file]);

  return (
    <>
      <DragDropFileUpload
        file={file}
        setFile={setFile}
        acceptableFileType={acceptableFileType}
        openFileBrowser={openFileBrowser}
        setOpenFileBrowser={setOpenFileBrowser}
        draggableElement={draggableElement}
        mainContainerClassName={cx(type === 'default' && 'w-per-100 height-px-100')}
        whileDraggingElementClassName={cx(
          type === 'default' &&
            'pos-abs pos-abs--lt w-per-100 br-all-solid-2 br-color-themeOne br-rad-px-10 height-px-100',
          type === 'default' && styles.dragIsActive
        )}
        inputId={inputId}
        inputName={inputName}
      />
    </>
  );
};

export default DraggableFileUploader;
