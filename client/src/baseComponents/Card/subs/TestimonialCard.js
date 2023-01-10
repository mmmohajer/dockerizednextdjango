import React from 'react';
import cx from 'classnames';
import { Div, Card, CardHeader, CardBody, CardFooter } from 'basedesign-iswad';
import Image from 'next/image';

import Icon from '@/baseComponents/Icon';
import Text from '@/baseComponents/Text';

import { COLORS } from '@/constants/vars';

import styles from '../Card.module.scss';

const TestimonialCard = ({ quote, photo, name, email, career, className, ...props }) => {
  return (
    <>
      <Card
        {...props}
        className={cx(
          'boxShadowType1 w-per-100 bgThemeThree br-rad-px-10 of-y-hidden of-x-hidden',
          styles.testimonialCardContainer,
          className
        )}>
        <CardHeader className="px2 my2 w-per-100">
          <Div type="flex" className="w-per-100">
            <Div>
              <Icon type="quoteLeft" scale={1.5} color={COLORS.themeOne} />
            </Div>
          </Div>
        </CardHeader>
        <CardBody className="px2 w-per-100">
          <Text
            textMessage={quote}
            iconColor={COLORS.themeOne}
            initialTextContainerHeight="100px"
            countJump={1}
            className="z-100000"
          />
        </CardBody>
        <CardFooter className="px2 my2">
          <Div type="flex" vAlign="start">
            {photo && (
              <Div className="w-px-50 height-px-50 br-rad-per-50 of-hidden">
                <Image src={photo} width={50} height={50} />
              </Div>
            )}
            <Div className="ml1">
              <Div className="fs-px-14 f-b">{name}</Div>
              {career && <Div className="fs-px-12">{career}</Div>}
              {email && <Div className="fs-px-12">{email}</Div>}
            </Div>
          </Div>
        </CardFooter>
      </Card>
    </>
  );
};

export default TestimonialCard;
