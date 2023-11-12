import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const SkinnyCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: skinny</Div>
        <Card
          type="skinny"
          title="Implementation"
          details="Zero implementation needed! When you sign up, we take over. Just upload your employee list and leave the rest up to us."
        />
      </Div>
    </>
  );
};

export default SkinnyCard;
