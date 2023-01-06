import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Row, Column, Triangle } from 'basedesign-iswad';

import {
  LANDING_TRIANGLE_CSS_CONFIG,
  LANDING_TRIANGLE_CSS_CONTAINER_UID,
  ARRAY_OF_MY_SKILLS
} from '../constants';
import { textAnimator } from '../utils';
import styles from '../HomePage.module.scss';

const LandingComp = () => {
  const [skill, setSkill] = useState('');

  useEffect(() => {
    textAnimator(ARRAY_OF_MY_SKILLS, setSkill, 0);
  }, []);

  return (
    <>
      <Div className={cx('pos-rel', styles.landingSection)}>
        <Row>
          <Column
            xs={6}
            sm={6}
            md={6}
            lg={6}
            className={cx('bgThemeThree pos-rel', styles.landingSectionLeftSide)}>
            <Div className={cx('pos-abs', styles.landingSectionTriangleContainer)}>
              <Triangle
                containerUID={LANDING_TRIANGLE_CSS_CONTAINER_UID}
                cssConfig={LANDING_TRIANGLE_CSS_CONFIG}
              />
            </Div>
          </Column>
          <Column
            xs={6}
            sm={6}
            md={6}
            lg={6}
            className={cx('bgThemeFour', styles.landingSectionRightSide)}></Column>
        </Row>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          direction="vertical"
          className={cx(
            'pos-abs pos-abs--lt w-per-100 textWhite',
            styles.landingSectionContentContainer
          )}>
          <Div>Hey! I am</Div>
          <Div className={cx('fs-r-4 my1 text-center', styles.landingSectionNameContainer)}>
            Mohammad Mohajer
          </Div>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx('fs-r-2', styles.landingSectionSkillContainer)}>
            <Div>I'm a {skill}</Div>
            <Div className={cx(styles.landingSectionPen)}></Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default LandingComp;
