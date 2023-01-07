import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { Div, Card, CardHeader, CardBody, CardFooter, Heading } from 'basedesign-iswad';
import Image from 'next/image';

import CircularProgressBar from '@/baseComponents/CircularProgressBar';

import { COLORS } from '@/constants/vars';

import styles from '../Card.module.scss';

const SkillCard = ({
  skill,
  proficiencyPercentage,
  yearsOfExperience,
  progressBarUID,
  tools = '',
  className,
  ...props
}) => {
  const scrollPosition = useSelector((state) => state.scrollPosition);
  const barRef = useRef();

  const [showAnimation, setShowAnimation] = useState(false);
  const [skillPercentage, setSkillPercentage] = useState(0);

  useEffect(() => {
    if (barRef?.current) {
      if (
        barRef.current.getBoundingClientRect().bottom - window.innerHeight <= 0 &&
        !showAnimation
      ) {
        setShowAnimation(true);
      }
    }
  }, [scrollPosition, barRef]);

  useEffect(() => {
    if (skillPercentage < proficiencyPercentage && showAnimation) {
      if (skillPercentage >= 10) {
        setTimeout(() => {
          setSkillPercentage(skillPercentage + 1);
        }, 10);
      } else {
        setSkillPercentage(skillPercentage + 1);
      }
    }
  }, [skillPercentage, proficiencyPercentage, showAnimation]);
  return (
    <>
      <Card
        {...props}
        className={cx('boxShadowType1 bgWhite br-rad-px-10 of-hidden p2 w-px-350', className)}>
        <CardHeader className="">
          <Heading type={3} className="text-center">
            {skill}
          </Heading>
        </CardHeader>
        <CardBody
          className="w-per-100 flex flex--jc--center flex--ai--center flex--dir--col my2"
          ref={(el) => (barRef.current = el)}>
          <CircularProgressBar
            outerCircleSize={140}
            innerCircleSize={125}
            percentage={skillPercentage}
            filledBgColor={COLORS.themeOne}
            emptyBgColor={COLORS.themeFour}
            containerUID={progressBarUID}
          />
          <Div className="mt2 text-center">{tools}</Div>
        </CardBody>
        <CardFooter className="p1 text-center">Years of Experience: {yearsOfExperience}</CardFooter>
      </Card>
    </>
  );
};

export default SkillCard;
