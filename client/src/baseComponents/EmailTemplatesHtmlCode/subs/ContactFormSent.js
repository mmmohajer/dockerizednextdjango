import React from 'react';
import cx from 'classnames';
import { div } from 'basedesign-iswad';

import styles from '../EmailTemplatesHtmlCode.module.scss';

const ContactFormSent = ({ name = '' }) => {
  return (
    <>
      <div style={{ fontSize: '16px', lineHeight: '1.5rem', fontFamily: 'arial', color: 'black' }}>
        <div>Dear {name},</div>
        <br />
        <div>
          Thank you for taking the time to reach out to me through my website's contact form. I
          appreciate your interest in my services and the message you have sent.
        </div>
        <br />
        <div>
          I will review your message and get back to you as soon as possible. If your inquiry
          requires an immediate response, please feel free to call me at +1(226)977-0855.
        </div>
        <br />
        <div>Thank you again for your message and I look forward to connecting with you soon.</div>
        <br />
        <div>Best regards,</div>
        <div>Mohammad Mohajer</div>
      </div>
    </>
  );
};

export default ContactFormSent;
