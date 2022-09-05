import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, Form } from 'basedesign-iswad';
import Router from 'next/router';

import TextBox from '@/baseComponents/TextBox';
import Button from '@/baseComponents/Button';
import SingleCheckBox from '@/baseComponents/SingleCheckBox';

import useApiCalls from '@/hooks/useApiCalls';
import { emailValidators, passwordValidators } from './utils';
import { loginUser } from '@/utils/auth';
import { LOGIN_API_ROUTE } from '@/constants/apiRoutes';

import styles from './LoginComponent.module.scss';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const toBeValidatedFields = [
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

  useEffect(() => {
    if (isAuthenticated?.authenticated) {
      Router.push('/');
    }
  }, [isAuthenticated]);

  const [sendLoginReq, setSendLoginReq] = useState(false);
  const bodyData = {
    email: email.toLowerCase(),
    password,
    keep_logged_in: keepLoggedIn
  };
  const { data, error } = useApiCalls({
    sendReq: sendLoginReq,
    setSendReq: setSendLoginReq,
    method: 'POST',
    url: LOGIN_API_ROUTE,
    bodyData
  });

  useEffect(() => {
    if (data) {
      loginUser(data['access'], data['refresh'], dispatch);
    }
  }, [data]);

  return (
    <>
      {isAuthenticated?.isChecked && (
        <Form
          className="textWhite py1 flex flex--jc--center flex--dir--col ml-auto mr-auto w-per-100"
          toBeValidatedFields={toBeValidatedFields}
          onSubmit={() => setSendLoginReq(true)}>
          <TextBox
            type="text"
            name="email"
            labelText="Email"
            placeholder=""
            isRequired
            val={email}
            setVal={setEmail}
            errorMessage={emailErrorMessage}
            errorHandler={setEmailErrorMessage}
            id="loginEmail"
          />
          <TextBox
            type="password"
            name="password"
            labelText="Password"
            placeholder=""
            isRequired
            val={password}
            setVal={setPassword}
            errorMessage={passwordErrorMessage}
            errorHandler={setPasswordErrorMessage}
            id="loginPassword"
          />
          <SingleCheckBox
            labelText="Keep me logged in"
            selected={keepLoggedIn}
            setSelected={setKeepLoggedIn}
          />
          <Div type="flex" hAlign="center">
            <Button className="w-px-200" type="submit" id="loginButton">
              Login
            </Button>
          </Div>
        </Form>
      )}
    </>
  );
};

export default LoginComponent;
