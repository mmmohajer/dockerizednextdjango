import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const ImpactStoryCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: impact-story</Div>
        <Card
          type="impact-story"
          isLetter={true}
          story="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          referral="Company"
        />
      </Div>
    </>
  );
};

export default ImpactStoryCard;
