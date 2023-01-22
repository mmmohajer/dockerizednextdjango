import React from 'react';
import cx from 'classnames';
import { div } from 'basedesign-iswad';

import styles from '../EmailTemplatesHtmlCode.module.scss';

const ContactFormReceived = ({ name = '', email = '', phone = '', message = '' }) => {
  return (
    <>
      <div style={{ fontSize: '16px', lineHeight: '1.5rem', fontFamily: 'arial', color: 'black' }}>
        <div>Dear Mohammad,</div>
        <br />
        <div>
          A new contact form submission has been received on the website. Please find the details
          below:
        </div>
        <br />
        <div>Name: {name}</div>
        <br />
        <div>Email: {email}</div>
        <br />
        <div>Phone: {phone}</div>
        <br />
        <div>Message: {message}</div>
        <br />
        <div>Best regards,</div>
        <div>mohimohajer.com</div>
      </div>
    </>
  );
};

export default ContactFormReceived;
