import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Modal as BaseModal } from 'basedesign-iswad';

import DataSubmittedSuccessfully from './subs/DataSubmittedSuccessfully';

import styles from './Modal.module.scss';

const Modal = () => {
  const modalType = useSelector((state) => state.modalType);
  const modalProps = useSelector((state) => state.modalProps);

  return (
    <>
      {modalType === 'data_submitted_successfully' && (
        <BaseModal
          fullHeightclassName="op-50 bgBlack ModalMainClickableZIndex"
          className={cx(
            'pos-rel baxShadowType1 bgWhite p2 w-per-80 min-w-px-300 max-w-px-600 br-all-solid-1 br-rad-px-10 br-color-inverse ModalContainerZIndex'
          )}>
          <DataSubmittedSuccessfully {...modalProps} />
        </BaseModal>
      )}
    </>
  );
};

export default Modal;
