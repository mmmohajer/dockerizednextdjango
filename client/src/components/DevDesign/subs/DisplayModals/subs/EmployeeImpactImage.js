import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { setModalType } from '@/reducers/general/modalType';
import { setModalProps } from '@/reducers/general/modalProps';

import styles from '../../../DevDesign.module.scss';

const EmployeeImpactImage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        className={'w-px-200 ml-auto mr-auto mb1'}
        onClick={() => {
          dispatch(setModalProps({ imgSrc: 'https://picsum.photos/seed/picsum/200/300' }));
          dispatch(setModalType('employee-impact-image'));
        }}>
        Show moal of type employee-impact-image
      </Button>
    </>
  );
};

export default EmployeeImpactImage;
