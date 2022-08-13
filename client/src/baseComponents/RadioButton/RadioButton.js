import React from 'react';
import cx from 'classnames';
import { Div, Label } from 'basedesign-iswad';

import styles from './RadioButton.module.scss';

const RadioButton = ({ labelText, selected = false, onRadioButtonClick }) => {
  return (
    <>
      <Div type="flex" vAlign="center" className="mainInputContainer">
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="w-px-20 height-px-20 br-rad-per-50 radioButtonField mr1"
          onClick={onRadioButtonClick}>
          {selected && (
            <Div className="w-px-10 height-px-10 br-rad-per-50 radioButtonField bgBlue"></Div>
          )}
        </Div>
        <Div>
          <Label>{labelText}</Label>
        </Div>
      </Div>
    </>
  );
};

export default RadioButton;
