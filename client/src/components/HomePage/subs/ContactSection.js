import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Form, Row, Column } from 'basedesign-iswad';
import Image from 'next/image';

import TextBox from '@/baseComponents/TextBox';
import TextArea from '@/baseComponents/TextArea';
import Button from '@/baseComponents/Button';

import styles from '../HomePage.module.scss';

import ContactAnimation from '@/images/js-Images/general/contact-us.png';

const ContactSection = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');

  const [message, setMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');

  return (
    <>
      <Row>
        <Column xs={0} sm={0} md={6} lg={6}>
          <Image src={ContactAnimation} />
        </Column>
        <Column xs={12} sm={12} md={6} lg={6} className={cx('', styles.contactFormContainer)}>
          <Div type="flex" hAlign="center" vAlign="center" className="w-per-100">
            <Form
              className={cx('w-per-90 p2 br-rad-px-10')}
              // onSubmit={submitHandler}
              // toBeValidatedFields={toBeValidatedFields}
              id="testForm">
              <TextBox
                isRequired
                type="text"
                labelText="First Name"
                val={firstName}
                setVal={setFirstName}
                errorMessage={firstNameErrorMessage}
                errorHandler={setFirstNameErrorMessage}
                name="firstName"
                id="firstNameContactSecHomePage"
              />
              <TextBox
                isRequired
                type="text"
                labelText="First Name"
                val={firstName}
                setVal={setFirstName}
                errorMessage={firstNameErrorMessage}
                errorHandler={setFirstNameErrorMessage}
                name="firstName"
                id="firstNameContactSecHomePage"
              />
              <TextBox
                isRequired
                type="text"
                labelText="First Name"
                val={firstName}
                setVal={setFirstName}
                errorMessage={firstNameErrorMessage}
                errorHandler={setFirstNameErrorMessage}
                name="firstName"
                id="firstNameContactSecHomePage"
              />

              <TextArea
                isRequired
                labelText="Message"
                val={message}
                setVal={setMessage}
                errorMessage={messageErrorMessage}
                errorHandler={setMessageErrorMessage}
                id="messageFieldHomePage"
              />
              <Button className={cx('w-px-200 height-px-40')} type="submit" id="testFormSubmit">
                Submit
              </Button>
            </Form>
          </Div>
        </Column>
      </Row>
    </>
  );
};

export default ContactSection;
