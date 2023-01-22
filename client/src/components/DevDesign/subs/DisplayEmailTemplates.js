import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import EmailTemplatesHtmlCode from '@/baseComponents/EmailTemplatesHtmlCode';

import { EMAIL_TEMPLATES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayEmailTemplates() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {EMAIL_TEMPLATES.map((item, idx) => {
          if (item === 'contact_form_sent') {
            return (
              <Div
                key={idx}
                direction="vertical"
                type="flex"
                hAlign="start"
                vAlign="center"
                className="mb4 w-per-100">
                <Div className="mb1">Type: {item}</Div>
                <EmailTemplatesHtmlCode type={item} name="Mohammad Mohajer" />
              </Div>
            );
          } else if (item === 'contact_form_received') {
            return (
              <Div
                key={idx}
                direction="vertical"
                type="flex"
                hAlign="start"
                vAlign="center"
                className="mb4">
                <Div className="mb1">Type: {item}</Div>
                <EmailTemplatesHtmlCode
                  type={item}
                  name="John Doe"
                  email="johndoe@gmail.com"
                  phone="+12269770855"
                  message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
              </Div>
            );
          }
        })}
      </Div>
    </>
  );
}

export default DisplayEmailTemplates;
