import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { Div, Card, CardHeader, CardBody, CardFooter, Heading } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';
import CircularProgressBar from '@/baseComponents/CircularProgressBar';
import ProgressiveBar from '@/baseComponents/ProgressiveBar';
import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from '../Card.module.scss';

const SkillCard = ({
  photo,
  skill,
  proficiencyPercentage,
  yearsOfExperience,
  progressBarUID,
  listOfSkills,
  className,
  ...props
}) => {
  const [topSkills, setTopSkills] = useState([]);
  const [otherSkills, setOtherSkills] = useState([]);
  const [showOtherSkills, setShowOtherSkills] = useState(false);

  useEffect(() => {
    if (listOfSkills) {
      setTopSkills(listOfSkills.slice(0, 3));
    }
  }, [listOfSkills]);

  useEffect(() => {
    if (showOtherSkills) {
      setOtherSkills(listOfSkills.slice(3));
    } else {
      setTimeout(() => {
        setOtherSkills([]);
      }, 300);
    }
  }, [listOfSkills, showOtherSkills]);

  return (
    <>
      <Card
        {...props}
        className={cx('boxShadowType1 bgWhite br-rad-px-10 of-hidden w-px-350', className)}>
        <CardHeader className="pos-rel">
          <AppImage src={photo} width={350} height={200} />
        </CardHeader>
        <CardBody className="w-per-100 flex flex--jc--center flex--ai--center flex--dir--col my2 px2">
          <Div className="text-center mb2 fs-px-24 f-b">{skill}</Div>
          <CircularProgressBar
            outerCircleSize={140}
            innerCircleSize={125}
            percentage={proficiencyPercentage}
            filledBgColor={COLORS.themeOne}
            emptyBgColor={COLORS.themeFour}
            containerUID={progressBarUID}
          />
          <Div className="mt2 w-per-100">
            {topSkills?.map((skill, idx) => (
              <ProgressiveBar
                key={idx}
                percentage={skill.percentage}
                title={skill.title}
                className={'mb2'}
              />
            ))}
            <Div
              className={cx(
                styles.otherSkillsContainer,
                showOtherSkills && styles.otherSkillsContainerActive
              )}>
              {otherSkills?.map((skill, idx) => (
                <ProgressiveBar
                  key={idx}
                  percentage={skill.percentage}
                  title={skill.title}
                  className={'mb2'}
                />
              ))}
            </Div>
            <Div type="flex" hAlign="center" className="">
              <Div className="mouse-hand" onClick={() => setShowOtherSkills(!showOtherSkills)}>
                <Icon
                  type={showOtherSkills ? 'minus-circle' : 'plus-circle'}
                  scale={1.5}
                  color={COLORS.themeFour}
                />
              </Div>
            </Div>
          </Div>
        </CardBody>
        <CardFooter className="py1 textBlack p2">
          Years of Experience: {yearsOfExperience}
        </CardFooter>
      </Card>
    </>
  );
};

export default SkillCard;
