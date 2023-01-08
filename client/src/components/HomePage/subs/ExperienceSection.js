import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import { EXPERIENCE } from '../constants';
import styles from '../HomePage.module.scss';

const ExperienceSection = () => {
  return (
    <>
      <Div className={cx('px2', styles.experienceContainer)}>
        {EXPERIENCE.map((experienceObj, idx) => (
          <Card
            key={idx}
            type="experience"
            logo={experienceObj.logo}
            company={experienceObj.company}
            companyWebsite={experienceObj.companyWebsite}
            role={experienceObj.role}
            detailsList={experienceObj.detailsList}
            period={experienceObj.period}
            className="m2"
          />
        ))}
      </Div>
    </>
  );
};

export default ExperienceSection;
