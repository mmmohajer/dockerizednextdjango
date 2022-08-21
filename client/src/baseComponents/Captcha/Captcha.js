import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import TextBox from '@/baseComponents/TextBox';
import Icon from '@/baseComponents/Icon';

import styles from './Captcha.module.scss';

const Captcha = () => {
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className="w-per-100 max-w-px-200 bgWhite height-px-80 textBlack ml-auto mr-auto mb1 captcha">
        <Div>A34D32</Div>
      </Div>
      <Div type="flex" hAlign="center" vAlign="center" className="text-center fs-px-12 textBlack">
        <Div className="pl1 mouse-hand">Reload</Div>
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
        id="captchaTextBox"
      />
    </>
  );
};

export default Captcha;
