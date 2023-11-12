import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import Photo from '@/images/js-Images/general/About-Page/Advisors/Andrew.png';

import styles from '../../../DevDesign.module.scss';

const EmployeeNewsCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: employee-news</Div>
        <Card
          type="employee-news"
          imgSrc="https://picsum.photos/seed/picsum/200"
          title="Thanksgiving Day"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          cta="Learn More >"
          cta_link="https://google.com"
          parentWidth={600}
        />
      </Div>
    </>
  );
};

export default EmployeeNewsCard;
