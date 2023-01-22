import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Card, CardHeader, CardBody, CardFooter, Heading } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';
import Anchor from '@/baseComponents/Anchor';
import Paragraph from '@/baseComponents/Paragraph';
import List from '@/baseComponents/List';
import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from '../Card.module.scss';

const ExperienceCard = ({
  logo,
  company,
  companyWebsite,
  role,
  detailsList,
  period,
  className,
  ...props
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (showDetails) {
      setList(detailsList);
    } else {
      setTimeout(() => {
        setList([]);
      }, 300);
    }
  }, [showDetails]);
  return (
    <>
      <Card
        {...props}
        className={cx(
          'boxShadowType1 bgWhite br-rad-px-10 of-y-hidden of-x-hidden w-px-350',
          className
        )}>
        <CardHeader className="pb1">
          <Div type="flex" hAlign="center" className="height-px-200 pos-rel">
            <AppImage src={logo} objectFit="cover" height={200} width={200} />
          </Div>
        </CardHeader>
        <CardBody className="px2">
          <Heading type={3} className="text-center">
            <Anchor to={companyWebsite} internal={false}>
              {company}
            </Anchor>
          </Heading>
          <Div type="flex" vAlign="center" className="mt2">
            <Div>{role}</Div>
            <Div className="ml1 mouse-hand" onClick={() => setShowDetails(!showDetails)}>
              {!showDetails ? (
                <Icon type="plus-circle" scale={1.25} color={COLORS.themeFour} />
              ) : (
                <Icon type="minus-circle" scale={1.25} color={COLORS.themeFour} />
              )}
            </Div>
          </Div>
          <Div
            className={cx(
              'mt2',
              styles.experienceDetailContainer,
              showDetails && styles.experienceDetailContainerActive
            )}>
            <List list={list} />
          </Div>
        </CardBody>
        <CardFooter className="p2 textBlack">
          <Div>{period}</Div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ExperienceCard;
