import React from 'react';
import cx from 'classnames';
import { Div, Card, CardHeader, CardBody, CardFooter } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';
import Icon from '@/baseComponents/Icon';
import Text from '@/baseComponents/Text';

import { COLORS } from '@/constants/vars';

import styles from '../Card.module.scss';

const TestimonialCard = ({
  quote,
  photo,
  name,
  email,
  career,
  isDraggable = false,
  isPreview = false,
  className,
  ...props
}) => {
  return (
    <>
      <Card
        {...props}
        className={cx(
          'boxShadowType1 bgThemeFive br-rad-px-10 of-y-hidden of-x-hidden',
          styles.testimonialCardContainer,
          className
        )}>
        <CardHeader className="px2 my2 w-per-100">
          <Div distributedBetween type="flex" className="w-per-100">
            <Div>
              <Icon type="quoteLeft" scale={1.5} color={COLORS.themeOne} />
            </Div>
            {isDraggable && (
              <Div className={cx(styles.draggableIcon)}>
                <Icon type="hand-pointer" scale={1.1} color={COLORS.themeOne} />
              </Div>
            )}
          </Div>
        </CardHeader>
        <CardBody className="px2 w-per-100 min-height-px-100">
          {!isPreview ? (
            <Text
              textMessage={quote}
              iconColor={COLORS.themeOne}
              initialTextContainerHeight="100px"
              countJump={1}
              className="z-100000"
            />
          ) : (
            <Div className="text-ltr">{quote}</Div>
          )}
        </CardBody>
        <CardFooter className="px2 my2">
          <Div type="flex" vAlign="start">
            {photo && (
              <Div className="w-px-50 height-px-50 br-rad-per-50 of-hidden pos-rel">
                <AppImage type={2} src={photo} width={50} height={50} />
              </Div>
            )}
            <Div type="flex" direction="vertical" hAlign="start" className={cx(photo && 'ml1')}>
              <Div className={cx('fs-px-14 f-b text-ltr oneLine', styles.testimonialInfo)}>
                {name}
              </Div>
              {career && (
                <Div className={cx('fs-px-12 text-ltr oneLine', styles.testimonialInfo)}>
                  {career}
                </Div>
              )}
              {email && (
                <Div className={cx('fs-px-12 text-ltr oneLine', styles.testimonialInfo)}>
                  {email}
                </Div>
              )}
            </Div>
          </Div>
        </CardFooter>
      </Card>
    </>
  );
};

export default TestimonialCard;
