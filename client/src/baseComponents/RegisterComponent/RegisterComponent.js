import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Div } from 'basedesign-iswad';
import Router from 'next/router';

import useApiCalls from '@/hooks/useApiCalls';
import { REGISTER_API_ROUTE, RESEND_ACTIVATE_EMAIL_API_ROUTE } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';

import TextBox from '@/baseComponents/TextBox';
import Button from '@/baseComponents/Button';
import Icon from '@/baseComponents/Icon';
import Captcha from '@/baseComponents/Captcha';

import styles from './RegisterComponent.module.scss';

import {
  firstNameValidators,
  lastNameValidators,
  emailValidators,
  passwordValidators
} from './utils';

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [firstName, setFirstName] = useState('');
  const [fistNameErrorMessage, setFirstNameErrorMessage] = useState('');

  const [lastName, setLastName] = useState('');
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const [userCaptchaCode, setUserCaptchaCode] = useState('');
  const [userCaptchaCodeErrorMessage, setUserCaptchaCodeErrorMessage] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  const [captchaUUID, setCaptchaUUID] = useState('');

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isAuthenticated?.authenticated) {
      Router.push('/');
    }
  }, [isAuthenticated]);

  const toBeValidatedFields = [
    {
      input_name: 'first_name',
      validators: firstNameValidators,
      errorMessageHandler: setFirstNameErrorMessage
    },
    {
      input_name: 'last_name',
      validators: lastNameValidators,
      errorMessageHandler: setLastNameErrorMessage
    },
    {
      input_name: 'email',
      validators: emailValidators,
      errorMessageHandler: setEmailErrorMessage
    },
    {
      input_name: 'password',
      validators: passwordValidators,
      errorMessageHandler: setPasswordErrorMessage
    }
  ];

  const [sendRegisterReq, setSendRegisterReq] = useState(false);
  const bodyData = {
    first_name: firstName,
    last_name: lastName,
    email: email.toLowerCase(),
    password,
    captcha_uuid: captchaUUID,
    user_captcha_code: userCaptchaCode
  };
  const { data, error } = useApiCalls({
    sendReq: sendRegisterReq,
    setSendReq: setSendRegisterReq,
    method: 'POST',
    url: REGISTER_API_ROUTE,
    bodyData
  });

  useEffect(() => {
    if (data) {
      setSubmitted(true);
      addAlertItem(dispatch, 'Please check your inbox to validate your email address.', 'success');
    }
  }, [data]);

  const [sendResendEmailReq, setSendResendEmailReq] = useState(false);
  const bodyResendData = {
    email
  };
  const { data: resendData, error: resendError } = useApiCalls({
    sendReq: sendResendEmailReq,
    setSendReq: setSendResendEmailReq,
    method: 'POST',
    url: RESEND_ACTIVATE_EMAIL_API_ROUTE,
    bodyData: bodyResendData
  });

  useEffect(() => {
    if (resendData) {
      addAlertItem(dispatch, 'Please check your inbox to validate your email address.', 'success');
    }
  }, [resendData]);

  const customValidations = () => {
    let validated = true;
    if (!userCaptchaCode) {
      setUserCaptchaCodeErrorMessage('Captcha is required');
      validated = false;
    }

    if (userCaptchaCode !== captchaCode) {
      setUserCaptchaCodeErrorMessage('Captcha code is incorrect');
      validated = false;
    }

    return validated;
  };

  const handleSubmit = () => {
    if (customValidations()) {
      setSendRegisterReq(true);
    }
  };

  return (
    <>
      {isAuthenticated?.isChecked && (
        <Form
          className="textWhite py1"
          toBeValidatedFields={toBeValidatedFields}
          onSubmit={handleSubmit}>
          <TextBox
            type="text"
            name="first_name"
            isRequired
            labelText="First Name"
            placeholder=""
            val={firstName}
            setVal={setFirstName}
            errorMessage={fistNameErrorMessage}
            errorHandler={setFirstNameErrorMessage}
            id="loginFirstName"
          />
          <TextBox
            type="text"
            name="last_name"
            isRequired
            labelText="Last Name"
            placeholder=""
            val={lastName}
            setVal={setLastName}
            errorMessage={lastNameErrorMessage}
            errorHandler={setLastNameErrorMessage}
            id="loginLastName"
          />
          <TextBox
            type="text"
            name="email"
            isRequired
            labelText="Email"
            placeholder=""
            val={email}
            setVal={setEmail}
            errorMessage={emailErrorMessage}
            errorHandler={setEmailErrorMessage}
            id="loginEmail"
          />
          <TextBox
            type="password"
            name="password"
            placeholder=""
            labelText="Password"
            isRequired
            val={password}
            setVal={setPassword}
            errorMessage={passwordErrorMessage}
            errorHandler={setPasswordErrorMessage}
            id="loginPassword"
          />
          <Captcha
            userCaptchaCode={userCaptchaCode}
            setUserCaptchaCode={setUserCaptchaCode}
            userCaptchaCodeErrorMessage={userCaptchaCodeErrorMessage}
            setUserCaptchaCodeErrorMessage={setUserCaptchaCodeErrorMessage}
            captchaCode={captchaCode}
            setCaptchaCode={setCaptchaCode}
            setCaptchaUUID={setCaptchaUUID}
          />
          <Div type="flex" hAlign="center">
            <Button id="registerSubmit" className="w-px-200" type="submit">
              Register
            </Button>
          </Div>
        </Form>
      )}
      {submitted && (
        <Div type="flex" hAlign="center" className="w-per-100">
          <Button
            className="w-px-200 flex flex--jc--center flex--ai--center"
            onClick={() => setSendResendEmailReq(true)}>
            <Div className={cx('ml1', styles.iconContainer)}>
              <Icon type="rotate" color="white" />
            </Div>
            <Div>Resend Email</Div>
          </Button>
        </Div>
      )}
    </>
  );
};

export default RegisterComponent;
