import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const AdvisorCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: advocate</Div>
        <Card type="advocate" title="Refer a Friend" text="send an email to a friend" number={1} />
      </Div>
    </>
  );
};

export default AdvisorCard;
