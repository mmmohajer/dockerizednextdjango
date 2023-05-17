import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const ServiceCard = ({ idx, ...props }) => {
  return (
    <>
      <Div
        key={idx}
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4">
        <Div className="mb1">Type: service</Div>
        <Card type="service" />
      </Div>
    </>
  );
};

export default ServiceCard;
