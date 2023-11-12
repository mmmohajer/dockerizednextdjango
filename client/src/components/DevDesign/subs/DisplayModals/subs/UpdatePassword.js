import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { setModalType } from '@/reducers/general/modalType';

import styles from '../../../DevDesign.module.scss';

const UpdatePassword = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        className={'w-px-200 ml-auto mr-auto mb1'}
        onClick={() => dispatch(setModalType('update-password'))}>
        Show moal of type update-password
      </Button>
    </>
  );
};

export default UpdatePassword;
