import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

import Logo from '@/images/js-Images/general/troop.png';

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
          if (item === 'skill') {
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
