import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const WhyCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: why</Div>
        <Card
          type="why"
          title="We are looking for more meaning."
          details="The renowned psychologist and author Martin Seligman says: “Just as the good life is something beyond the pleasant life, the meaningful life is beyond the good life.” We believe that meaning can be found in helping others and in building community."
        />
      </Div>
    </>
  );
};

export default WhyCard;
