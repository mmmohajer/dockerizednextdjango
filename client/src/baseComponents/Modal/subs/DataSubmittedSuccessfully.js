import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';
import Close from '@/baseComponents/Close';

import { clearModal } from '@/utils/modal';

import styles from '../Modal.module.scss';

const DataSubmittedSuccessfully = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Div type="flex" direction="vertical" hAlign="start" className="">
        <Close onClick={() => dispatch(clearModalType())} />
        <Div className="mb2">Your data has been submitted successfully!</Div>
        <Div>
          <Button className={'w-px-100'} onClick={() => clearModal(dispatch)}>
            OK
          </Button>
        </Div>
      </Div>
    </>
  );
};

export default DataSubmittedSuccessfully;
