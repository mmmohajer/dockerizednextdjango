import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Modal as BaseModal } from 'basedesign-iswad';

import Close from '@/baseComponents/Close';

import { COLORS } from '@/constants/vars';
import { clearModal } from '@/utils/modal';

import { HAS_CCELEBERATION_BG_TYPES } from './constans';
import DataSubmittedSuccessfully from './subs/DataSubmittedSuccessfully';

import styles from './Modal.module.scss';

const Modal = () => {
  const dispatch = useDispatch();

  const modalType = useSelector((state) => state.modalType);
  const modalProps = useSelector((state) => state.modalProps);
  const header = useSelector((state) => state.modalHeader);

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
            'pos-rel w-per-80 baxShadowType1 bgWhite br-rad-px-10 of-hidden ModalContainerZIndex',
            styles.modalContainer
          )}>
          <Div type="flex" direction="vertical" hAlign="start" className="">
            <Close
              barColor={
                HAS_CCELEBERATION_BG_TYPES.includes(modalType) ? COLORS.success : COLORS.themeOne
              }
              headerText={header}
              onClick={() => clearModal(dispatch)}
            />
            <Div
              type="flex"
              direction="vertical"
              hAlign="start"
              className={cx('of-y-auto scrollType1 p2', styles.mainContentContainer)}>
              {modalType === 'data-submitted-successfully' && (
                <DataSubmittedSuccessfully {...modalProps} />
              )}
            </Div>
          </Div>
        </BaseModal>
      )}
    </>
  );
};

export default Modal;
