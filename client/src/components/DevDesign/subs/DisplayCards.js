import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

import Logo from '@/images/js-Images/general/troop.png';
import ServicePhoto from '@/images/js-Images/general/api.jpg';
import BaseDesignPhoto from '@/images/js-Images/general/basedesign-project.jpg';
import MyPhoto from '@/images/js-Images/general/myProfilePhoto.jpg';

function DisplayModals() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {CARD_TYPES.map((item, idx) => {
          if (item === 'project') {
            return (
              <Div
                key={idx}
                direction="vertical"
                type="flex"
                hAlign="center"
                vAlign="center"
                className="mb4">
                <Div className="mb1">Type: {item}</Div>
                <Div className="w-px-400">
                  <Card
                    type={item}
                    photo={BaseDesignPhoto}
                    title="Base Design"
                    info="Developed a collection of over 15 reusable components and more than 500 CSS
                    classes using SCSS that improve developer productivity and code cleanliness.
                    These components are flexible and can be used in any React/Next.js projects."
                    codeLink="https://github.com/mmmohajer/baseDesign"
                    themeLink="https://github.com/mmmohajer/baseDesign"
                  />
                </Div>
              </Div>
            );
          } else if (item === 'skill') {
            return (
              <Div
                key={idx}
                direction="vertical"
                type="flex"
                hAlign="center"
                vAlign="center"
                className="mb4">
                <Div className="mb1">Type: {item}</Div>
                <Card
                  type={item}
                  photo={ServicePhoto}
                  skill="React/Redux"
                  proficiencyPercentage={80}
                  listOfSkills={[
                    { title: 'Css', percentage: '80' },
                    { title: 'Css', percentage: '80' },
                    { title: 'Css', percentage: '80' },
                    { title: 'Css', percentage: '80' },
                    { title: 'Css', percentage: '80' }
                  ]}
                  yearsOfExperience={4}
                />
              </Div>
            );
          } else if (item === 'experience') {
            return (
              <Div
                key={idx}
                direction="vertical"
                type="flex"
                hAlign="center"
                vAlign="center"
                className="mb4">
                <Div className="mb1">Type: {item}</Div>
                <Card
                  type={item}
                  logo={Logo}
                  company={'Troop'}
                  companyWebsite={'https://hitroop.com'}
                  role="Lead Software Developer"
                  detailsList={['Hello']}
                  period="Dec 2022 - Current"
                />
              </Div>
            );
          } else if (item === 'testimonial') {
            return (
              <Div
                key={idx}
                direction="vertical"
                type="flex"
                hAlign="center"
                vAlign="center"
                className="mb4">
                <Div className="mb1">Type: {item}</Div>
                <Card
                  type={item}
                  quote={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
                  photo={MyPhoto}
                  name="Mohammad Mohajer"
                  career="Software DEveloper"
                  email="mmmohajer70@gmail.com"
                />
              </Div>
            );
          } else {
            return (
              <Div
                key={idx}
                direction="vertical"
                type="flex"
                hAlign="center"
                vAlign="center"
                className="mb4">
                <Div className="mb1">Type: {item}</Div>
                <Card type={item} />
              </Div>
            );
          }
        })}
      </Div>
    </>
  );
}

export default DisplayModals;
