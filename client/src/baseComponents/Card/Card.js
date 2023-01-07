import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ServiceCard from './subs/ServiceCard';
import ProjectCard from './subs/ProjectCard';
import SkillCard from './subs/SkillCard';
import styles from './Card.module.scss';

const Card = ({ type, ...props }) => {
  return (
    <>
      {type === 'service' && <ServiceCard {...props} />}
      {type === 'project' && <ProjectCard {...props} />}
      {type === 'skill' && <SkillCard {...props} />}
    </>
  );
};

export default Card;
