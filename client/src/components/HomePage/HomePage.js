import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import LandingComp from './subs/LandingComp';
import AboutSection from './subs/AboutSection';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      <LandingComp />
      <AboutSection />
    </>
  );
};

export default HomePage;
