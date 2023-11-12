import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import MethodPerson from '@/images/js-Images/general/Tetimonial-People/method-person.png';

import styles from '../../../DevDesign.module.scss';

const TestimonialCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: testimonial</Div>
        <Card
          type="testimonial"
          imgSrc={MethodPerson}
          name="Mohammad Mohajer"
          career="Developer"
          letter="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s"
        />
      </Div>
    </>
  );
};

export default TestimonialCard;
