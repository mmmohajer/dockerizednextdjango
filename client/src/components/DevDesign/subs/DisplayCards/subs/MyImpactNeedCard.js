import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import Photo from '@/images/js-Images/general/About-Page/Advisors/Andrew.png';

import styles from '../../../DevDesign.module.scss';

const MyImpactNeedCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: my-impact-need</Div>
        <Card
          type="my-impact-need"
          needImage="https://picsum.photos/seed/picsum/300"
          short_description="Slippers for Shelter Residents"
          charity="Mattew House"
          fulfilledByPledge={true}
          donation={350}
        />
      </Div>
    </>
  );
};

export default MyImpactNeedCard;
