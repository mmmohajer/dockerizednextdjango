import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import { TOP_SKILLS } from '../constants';
import styles from '../HomePage.module.scss';

const SkillsSection = () => {
  return (
    <>
      <Div className={cx('px2', styles.topSkillsContainer)}>
        {TOP_SKILLS.map((skillObj, idx) => (
          <Card
            key={idx}
            type="skill"
            skill={skillObj.skill}
            proficiencyPercentage={skillObj.proficiencyPercentage}
            yearsOfExperience={skillObj.yearsOfExperience}
            progressBarUID={skillObj.progressBarUID}
            listOfSkills={skillObj.listOfSkills}
            className="m2"
          />
        ))}
      </Div>
    </>
  );
};

export default SkillsSection;
