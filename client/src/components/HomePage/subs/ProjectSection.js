import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import { PROJECTS } from '../constants';
import styles from '../HomePage.module.scss';

const ProjectSection = () => {
  return (
    <>
      <Div className={cx('', styles.projectsContainer)}>
        {PROJECTS?.map((projectObj, idx) => (
          <Card
            key={idx}
            type="project"
            photo={projectObj.photo}
            title={projectObj.title}
            codeLink={projectObj?.codeLink}
            themeLink={projectObj?.themeLink}
            className={cx(styles.projectCardItem)}
          />
        ))}
      </Div>
    </>
  );
};

export default ProjectSection;
