import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';
import Close from '@/baseComponents/Close';
import Paragraph from '@/baseComponents/Paragraph';

import { clearModal } from '@/utils/modal';

import styles from '../Modal.module.scss';

const ContactFormSentSuccessfully = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Div className="mb2">
        <Paragraph>
          Thank you for reaching out! Your message has been successfully submitted and I will be in
          touch with you shortly. I appreciate your interest and look forward to connecting with
          you.
        </Paragraph>
      </Div>
      <Div className="">
        <Button className={'w-px-100'} onClick={() => clearModal(dispatch)}>
          OK
        </Button>
      </Div>
    </>
  );
};

export default ContactFormSentSuccessfully;
