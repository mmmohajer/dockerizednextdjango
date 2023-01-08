import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ProgressiveBar from '@/baseComponents/ProgressiveBar';

import SectionSeparator from './subs/SectionSeparator';
import LandingComp from './subs/LandingComp';
import AboutSection from './subs/AboutSection';
import SkillsSection from './subs/SkillsSection';
import ExperienceSection from './subs/ExperienceSection';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (percentage < 70) {
      setTimeout(() => {
        setPercentage(percentage + 1);
      }, 10);
    }
  }, [percentage]);
  return (
    <>
      <LandingComp />
      <AboutSection />
      <SectionSeparator title="Services" />
      <SkillsSection />
      <SectionSeparator title="Experience" />
      <ExperienceSection />
    </>
  );
};

export default HomePage;
