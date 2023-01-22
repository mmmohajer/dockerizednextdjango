import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';
import Close from '@/baseComponents/Close';
import Paragraph from '@/baseComponents/Paragraph';

import { clearModal } from '@/utils/modal';

import styles from '../Modal.module.scss';

const TestimonialSubmittedSuccessfully = ({ name = '' }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Div className="mb2">
        <Paragraph>Dear {name},</Paragraph>
        <Paragraph>
          Thank you so much for taking the time to leave a testimonial on my website. Your feedback
          is greatly appreciated and helps me improve my services.
        </Paragraph>
        <Paragraph>
          I have received your message and after reviewing it, I am pleased to inform you that it
          will be added to my website. Your kind words are a testament to the hard work and
          dedication of me, and I am honored to have you as a satisfied customer.
        </Paragraph>
        <Paragraph>
          Thank you again for your support, and please let me know if there is anything else I can
          do for you in the future.
        </Paragraph>
        <Div>Best regards,</Div>
        <Div>Mohammad Mohajer</Div>
      </Div>
      <Div className="">
        <Button className={'w-px-100'} onClick={() => clearModal(dispatch)}>
          OK
        </Button>
      </Div>
    </>
  );
};

export default TestimonialSubmittedSuccessfully;
