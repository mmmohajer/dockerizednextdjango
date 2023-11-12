import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const WhySocialImpactReasonCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: why-social-impact-reason</Div>
        <Card
          type="why-social-impact-reason"
          title="RECRUITMENT"
          percentage="77"
          details="of Canadians want to work for a company with a strong corporate social responsibility plan."
        />
      </Div>
    </>
  );
};

export default WhySocialImpactReasonCard;
