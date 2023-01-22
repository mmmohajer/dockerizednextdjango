import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ContactFormSent from './subs/ContactFormSent';
import ContactFormReceived from './subs/ContactFormReceived';
import styles from './EmailTemplatesHtmlCode.module.scss';

const EmailTemplatesHtmlCode = ({ type, ...props }) => {
  return (
    <>
      {type === 'contact_form_sent' && <ContactFormSent {...props} />}{' '}
      {type === 'contact_form_received' && <ContactFormReceived {...props} />}
    </>
  );
};

export default EmailTemplatesHtmlCode;
