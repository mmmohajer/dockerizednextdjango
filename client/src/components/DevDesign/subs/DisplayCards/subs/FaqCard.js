import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const FaqCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: faq</Div>
        <Card
          type="faq"
          question="IS TROOP A CHARITY OR NOT-FOR-PROFIT?"
          answer="Troop is a social enterprise, which means we exist for profit and purpose. Our aim is to build a sustainable business model and achieve our social goal: build stronger, more thriving communities. We do this by helping businesses discover local charitable needs and by engaging employees in community giving initiatives. For businesses, the time to act is now!  Customers and employees are demanding that businesses operate for more than just profit. t Troop, we offer a cost-effective, hassle-free solution for creating meaningful local impact."
        />
      </Div>
    </>
  );
};

export default FaqCard;
