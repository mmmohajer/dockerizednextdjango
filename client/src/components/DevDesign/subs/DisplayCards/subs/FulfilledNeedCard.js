import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const FulfilledNeedCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: fulfilled-need</Div>
        <Card
          type="fulfilled-need"
          title="Diapers"
          city="Toronto"
          imgSrc="https://picsum.photos/seed/picsum/300"
          shortDescription="Clothing"
        />
      </Div>
    </>
  );
};

export default FulfilledNeedCard;
