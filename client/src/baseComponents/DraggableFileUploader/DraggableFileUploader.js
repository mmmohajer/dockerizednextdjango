import React, { useState, useCallback } from 'react';
import cx from 'classnames';
import { Div, DragDropFileUpload } from 'basedesign-iswad';

import { COLORS } from '@/constants/vars';

import Icon from '@/baseComponents/Icon';
import Close from '@/baseComponents/Close';

import styles from './DraggableFileUploader.module.scss';

const DraggableFileUploader = ({
  file,
  setFile,
  acceptableFileType,
  inputId = 'draggableFileUploaderId',
  acceptableFileString = '.csv',
  iconType = 'file-upload'
}) => {
  const [openFileBrowser, setOpenFileBrowser] = useState();

  const removeFileClickHandler = useCallback(() => {
    setFile({});
    const inputFileFiled = document.getElementById(inputId);
    console.log(inputFileFiled);
    inputFileFiled.value = null;
  }, []);

  const draggableElement = () => (
    <Div
      type="flex"
      hAlign="center"
      vAlign="center"
      className={cx(
        'w-per-100 height-px-200 bgWhite boxShadowType1 p2 br-rad-px-10',
        styles.draggableElementContainer
      )}>
      {!file?.length ? (
        <Div type="flex" direction="vertical" hAlign="center">
          <Icon
            type={iconType}
            scale={4}
            color={COLORS.themeOne}
            className="w-px-70 height-px-80 mouse-hand"
            onClick={() => setOpenFileBrowser(true)}
          />
          <Div className="fs-px-12 textGrayDark">{acceptableFileString}</Div>
        </Div>
      ) : (
        <Div type="flex" hAlign="center" vAlign="center" className="w-per-100 p2">
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="w-per-100 max-w-px-300 p2 height-px-50 bgWhite oneLine boxShadowType1 pos-rel">
            <Close onClick={removeFileClickHandler} />
            {file?.[0]?.name}
          </Div>
        </Div>
      )}
    </Div>
  );

  return (
    <>
      <DragDropFileUpload
        file={file}
        setFile={setFile}
        acceptableFileType={acceptableFileType}
        openFileBrowser={openFileBrowser}
        setOpenFileBrowser={setOpenFileBrowser}
        draggableElement={draggableElement}
        mainContainerClassName="w-px-400 height-px-200"
        whileDraggingElementClassName={cx(
          'pos-abs pos-abs--lt w-per-100 br-all-solid-2 br-color-themeOne br-rad-px-10',
          styles.dragIsActive
        )}
        inputId={inputId}
      />
    </>
  );
};

export default DraggableFileUploader;
