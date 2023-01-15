import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Modal as BaseModal } from 'basedesign-iswad';

import Close from '@/baseComponents/Close';

import { clearModal } from '@/utils/modal';

import DataSubmittedSuccessfully from './subs/DataSubmittedSuccessfully';
import { HAS_CCELEBERATION_BG_TYPES } from './constans';
import styles from './Modal.module.scss';

const Modal = () => {
  const dispatch = useDispatch();

  const modalType = useSelector((state) => state.modalType);
  const modalProps = useSelector((state) => state.modalProps);

  return (
    <>
      {modalType && (
        <BaseModal
          fullHeightclassName={cx(
            'ModalMainClickableZIndex',
            HAS_CCELEBERATION_BG_TYPES.includes(modalType) && styles.celeberationBg,
            HAS_CCELEBERATION_BG_TYPES.includes(modalType) ? 'bgThemeFive op-90' : 'bgBlack op-50'
          )}
          className={cx(
            'pos-rel w-per-80 baxShadowType1 bgWhite br-rad-px-10 ModalContainerZIndex',
            styles.modalContainer
          )}>
          <Div type="flex" direction="vertical" hAlign="start" className="">
            <Div className={cx('pos-rel bgSuccess w-per-100', styles.closeContainer)}>
              <Close onClick={() => clearModal(dispatch)} />
            </Div>
            <Div
              type="flex"
              direction="vertical"
              hAlign="start"
              className={cx('of-y-auto scrollType1 p2', styles.mainContentContainer)}>
              {modalType === 'data_submitted_successfully' && (
                <DataSubmittedSuccessfully {...modalProps} />
              )}
            </Div>
          </Div>
        </BaseModal>
      )}

      {/* <BaseModal
          fullHeightclassName="op-50 bgBlack ModalMainClickableZIndex"
          className={cx(
            'pos-rel bgWhite p2 w-per-80 min-w-px-300 max-w-px-600 ModalContainerZIndex of-y-auto scrollType1',
            styles.modalContainer
          )}>
          <WriteTestimonial {...modalProps} />
        </BaseModal>
      )} */}

      {/* {modalType === 'contact_form_sent' && (
        <BaseModal
          fullHeightclassName={cx('ModalMainClickableZIndex', styles.celeberation_bg)}
          className={cx(
            'pos-rel bgWhite w-per-80 min-w-px-300 max-w-px-600 ModalContainerZIndex of-y-auto scrollType1 br-rad-px-10',
            styles.modalContainer
          )}>
          <ContactFormSentSuccessfully {...modalProps} />
        </BaseModal>
      )} */}
    </>
  );
};

export default Modal;
