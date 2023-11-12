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
        <Div className="mb1">Type: need-info</Div>
        <Card
          type="need-info"
          city="Toronto"
          province="ON"
          value={1000}
          charity_website="Elizabete Fry"
          isEligibleForTax={true}
          community_supported="Neighbours experiencing homelessness"
          isFulfilled={false}
        />
      </Div>
    </>
  );
};

export default NeedCard;
