import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import useApiCalls from '@/hooks/useApiCalls';
import { CAPTCHA_API_ROUTE } from '@/constants/apiRoutes';

import TextBox from '@/baseComponents/TextBox';
import Icon from '@/baseComponents/Icon';

import styles from './Captcha.module.scss';

const Captcha = ({
  userCaptchaCode,
  setUserCaptchaCode,
  userCaptchaCodeErrorMessage,
  setUserCaptchaCodeErrorMessage,
  captchaCode,
  setCaptchaCode,
  setCaptchaUUID
}) => {
  const [captchaId, setCaptchaId] = useState('');

  const [sendReq, setSendReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq,
    setSendReq,
    method: 'POST',
    url: CAPTCHA_API_ROUTE
  });
  useEffect(() => {
    if (data) {
      setCaptchaUUID(data.uuid);
      setCaptchaCode(data.captcha);
      setCaptchaId(data.id);
    }
  }, [data]);

  useEffect(() => {
    setSendReq(true);
  }, []);

  const [sendUpdateReq, setSendUpdateReq] = useState(false);
  const { data: updateData, error: updateError } = useApiCalls({
    sendReq: sendUpdateReq,
    setSendReq: setSendUpdateReq,
    method: 'PUT',
    url: `${CAPTCHA_API_ROUTE}${captchaId}/`
  });
  useEffect(() => {
    if (updateData) {
      setCaptchaUUID(updateData.uuid);
      setCaptchaCode(updateData.captcha);
      setCaptchaId(updateData.id);
      setSendUpdateReq(false);
    }
  }, [updateData]);

  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className="w-per-100 max-w-px-200 bgWhite height-px-80 textBlack ml-auto mr-auto mb1 captcha">
        <Div>{captchaCode}</Div>
      </Div>
      <Div type="flex" hAlign="center" vAlign="center" className="text-center fs-px-12 textBlack">
        <Div className="pl1 mouse-hand" onClick={() => setSendUpdateReq(true)}>
          Reload
        </Div>
        <Div className="mouse-hand">
          <Icon type="rotate" />
        </Div>
      </Div>
      <TextBox
        type="text"
        name="captcha"
        labelText="Type what you see"
        placeholder="e.g. A34D32"
        isRequired
        val={userCaptchaCode}
        setVal={setUserCaptchaCode}
        errorMessage={userCaptchaCodeErrorMessage}
        errorHandler={setUserCaptchaCodeErrorMessage}
        id="captchaTextBox"
      />
    </>
  );
};

export default Captcha;
