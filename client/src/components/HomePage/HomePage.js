import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setHomePageElements } from '@/reducers/general/homePageElements';

import SectionSeparator from './subs/SectionSeparator';
import LandingComp from './subs/LandingComp';
import AboutSection from './subs/AboutSection';
import SkillsSection from './subs/SkillsSection';
import ExperienceSection from './subs/ExperienceSection';
import ProjectSection from './subs/ProjectSection';
import TestimonialSection from './subs/TestimonialSection';
import ContactSection from './subs/ContactSection';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const scrollPosition = useSelector((state) => state.scrollPosition);
  const dispatch = useDispatch();

  const aboutRef = useRef();
  const servicesRef = useRef();
  const experienceRef = useRef();
  const projectRef = useRef();
  const testimonialRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    if (
      aboutRef?.current &&
      servicesRef?.current &&
      experienceRef?.current &&
      projectRef?.current &&
      testimonialRef?.current &&
      contactRef?.current
    ) {
      dispatch(
        setHomePageElements({
          about: aboutRef.current,
          services: servicesRef.current,
          experience: experienceRef.current,
          projects: projectRef.current,
          testimonials: testimonialRef.current,
          contact: contactRef.current
        })
      );
      if (aboutRef.current.getBoundingClientRect().top - window.innerHeight > 0) {
        dispatch(setActiveMenu('home'));
      }
      if (
        aboutRef.current.getBoundingClientRect().top - window.innerHeight <= 0 &&
        servicesRef?.current.getBoundingClientRect().top - window.innerHeight > 0
      ) {
        dispatch(setActiveMenu('about'));
      } else if (
        servicesRef.current.getBoundingClientRect().top - window.innerHeight <= 0 &&
        experienceRef?.current.getBoundingClientRect().top - window.innerHeight > 0
      ) {
        dispatch(setActiveMenu('services'));
      } else if (
        experienceRef.current.getBoundingClientRect().top - window.innerHeight <= 0 &&
        projectRef?.current.getBoundingClientRect().top - window.innerHeight > 0
      ) {
        dispatch(setActiveMenu('experience'));
      } else if (
        projectRef.current.getBoundingClientRect().top - window.innerHeight <= 0 &&
        testimonialRef?.current.getBoundingClientRect().top - window.innerHeight > 0
      ) {
        dispatch(setActiveMenu('projects'));
      } else if (
        testimonialRef.current.getBoundingClientRect().top - window.innerHeight <= 0 &&
        contactRef?.current.getBoundingClientRect().top - window.innerHeight > 0
      ) {
        dispatch(setActiveMenu('testimonials'));
      } else if (contactRef.current.getBoundingClientRect().top - window.innerHeight <= 0) {
        dispatch(setActiveMenu('contact'));
      }
    }
  }, [
    scrollPosition,
    aboutRef?.current,
    servicesRef?.current,
    experienceRef?.current,
    projectRef?.current,
    testimonialRef?.current,
    contactRef?.current
  ]);

  return (
    <>
      <LandingComp />
      <Div ref={(el) => (aboutRef.current = el)}>
        <AboutSection />
      </Div>
      <SectionSeparator title="Services" elemRef={servicesRef} />
      <SkillsSection />
      <SectionSeparator title="Experience" elemRef={experienceRef} />
      <ExperienceSection />
      <SectionSeparator title="Projects" elemRef={projectRef} />
      <ProjectSection />
      <SectionSeparator title="Testimonials" elemRef={testimonialRef} />
      <TestimonialSection />
      <SectionSeparator title="Contact" hasMargin={false} elemRef={contactRef} />
      <ContactSection />
    </>
  );
};

export default HomePage;
