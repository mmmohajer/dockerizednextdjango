import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import CircularProgressBar from '@/baseComponents/CircularProgressBar';

import SectionSeparator from './subs/SectionSeparator';
import LandingComp from './subs/LandingComp';
import AboutSection from './subs/AboutSection';
import SkillsSection from './subs/SkillsSection';
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
      {/* <SectionSeparator title="Other Skills" /> */}
      {/* <SkillsSection /> */}
    </>
  );
};

export default HomePage;
