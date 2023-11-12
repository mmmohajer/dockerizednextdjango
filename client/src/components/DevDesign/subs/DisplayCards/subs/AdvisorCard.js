import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import Photo from '@/images/js-Images/general/About-Page/Advisors/Andrew.png';

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
        <Div className="mb1">Type: advisor</Div>
        <Card type="advisor" imgSrc={Photo} name="Andrew Lo" role="President, Financeit" />
      </Div>
    </>
  );
};

export default AdvisorCard;
