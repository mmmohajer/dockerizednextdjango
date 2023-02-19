import React from 'react';
import cx from 'classnames';
import { Div, Modal } from 'basedesign-iswad';

import Close from '@/baseComponents/Close';
import Button from '@/baseComponents/Button';
import DivConvertTextToHtml from '@/baseComponents/DivConvertTextToHtml';

import styles from '../ApiDoc.module.scss';
import { COLORS } from '@/constants/vars';

const InfoModal = ({ categoryInfo, setInfoModalContext }) => {
  return (
    <>
      <Modal
        fullHeightclassName={cx('ModalMainClickableZIndex bgBlack op-70')}
        className={cx(
          'pos-rel w-per-80 baxShadowType1 bgWhite br-rad-px-10 of-hidden ModalContainerZIndex',
          styles.modalContainer
        )}>
        <Div type="flex" direction="vertical" hAlign="start" className="">
          <Close barColor="dodgerblue" onClick={() => setInfoModalContext('')} />
          <Div
            type="flex"
            direction="vertical"
            hAlign="start"
            className={cx('of-y-auto scrollType1 p2', styles.modalMainContentContainer)}>
            <DivConvertTextToHtml
              className={cx('text-justify', styles.modalInfoTextContainer)}
              text={categoryInfo}
            />
          </Div>
        </Div>

        <Div className="pb2 pl2 pr2">
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={'bgBlue textWhite p2 w-px-80 mouse-hand hover-bg-green br-rad-px-5'}
            onClick={() => setInfoModalContext('')}>
            OK
          </Div>
        </Div>
      </Modal>
    </>
  );
};

export default InfoModal;
