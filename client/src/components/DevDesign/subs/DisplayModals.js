import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { setModalType } from '@/reducers/general/modalType';
import { MODAL_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayModals() {
  const dispatch = useDispatch();

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {MODAL_TYPES.map((item, idx) => (
          <Button
            key={idx}
            className={'w-px-200 ml-auto mr-auto mb1'}
            onClick={() => dispatch(setModalType(item))}>
            Show moal of type {item}
          </Button>
        ))}
      </Div>
    </>
  );
}

export default DisplayModals;
