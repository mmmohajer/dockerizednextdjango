import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const NeedCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: need</Div>
        <Card
          type="need"
          title="Diapers"
          city="Toronto"
          imgSrc="https://picsum.photos/seed/picsum/300"
          shortDescription="Clothing"
          isFulfilled={true}
        />
      </Div>
    </>
  );
};

export default NeedCard;
