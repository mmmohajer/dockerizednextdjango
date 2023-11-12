import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ServiceCard from './subs/ServiceCard';

import styles from './Card.module.scss';

const Card = ({ type, ...props }) => {
  return <>{type === 'service' && <ServiceCard {...props} />}</>;
};

export default Card;
