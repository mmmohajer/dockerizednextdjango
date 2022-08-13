import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlag,
  faEye,
  faImage,
  faClose,
  faCertificate,
  faQuoteLeft,
  faAngleRight,
  faAngleLeft,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

import Dashboard from '@/images/js-Images/icons/svg/dashboard.svg';
import Instagram from '@/images/js-Images/icons/svg/instagram.svg';
import Location from '@/images/js-Images/icons/svg/location.svg';
import Phone from '@/images/js-Images/icons/svg/phone.svg';
import Mail from '@/images/js-Images/icons/svg/mail.svg';
import Youtube from '@/images/js-Images/icons/svg/youtube.svg';
import Person from '@/images/js-Images/icons/svg/person.svg';
import PersonFill from '@/images/js-Images/icons/svg/person-fill.svg';

import { LIST_OF_ICONS } from '@/constants/devDesignVars';
function Icon({ type, color, width, scale }) {
  let iconTypes = {
    flag: <FontAwesomeIcon icon={faFlag} style={{ color, width, transform: `scale(${scale})` }} />,
    certificate: (
      <FontAwesomeIcon
        icon={faCertificate}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    quoteLeft: (
      <FontAwesomeIcon icon={faQuoteLeft} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    angleRight: (
      <FontAwesomeIcon icon={faAngleRight} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    angleLeft: (
      <FontAwesomeIcon icon={faAngleLeft} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    eye: <FontAwesomeIcon icon={faEye} style={{ color, width, transform: `scale(${scale})` }} />,
    'image-upload': (
      <FontAwesomeIcon icon={faImage} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    close: (
      <FontAwesomeIcon icon={faClose} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'check-mark': (
      <FontAwesomeIcon icon={faCheck} style={{ color, width, transform: `scale(${scale})` }} />
    )
  };

  iconTypes['dashboard'] = (
    <Dashboard fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );

  iconTypes['instagram'] = (
    <Instagram
      fill={color}
      stroke={color}
      strokeWidth="0.1"
      style={{ transform: `scale(${scale})` }}
    />
  );

  iconTypes['location'] = (
    <Location
      fill={color}
      stroke={color}
      strokeWidth="0.1"
      style={{ transform: `scale(${scale})` }}
    />
  );

  iconTypes['phone'] = (
    <Phone fill={color} stroke={color} strokeWidth="0.1" style={{ transform: `scale(${scale})` }} />
  );

  iconTypes['mail'] = (
    <Mail fill={color} stroke={color} strokeWidth="0.1" style={{ transform: `scale(${scale})` }} />
  );

  iconTypes['youtube'] = (
    <Youtube
      fill={color}
      stroke={color}
      strokeWidth="0.1"
      style={{ transform: `scale(${scale})` }}
    />
  );

  iconTypes['person'] = (
    <Person fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );

  iconTypes['person-fill'] = (
    <PersonFill fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );

  return <>{iconTypes[type]}</>;
}

Icon.propTypes = {
  type: PropTypes.oneOf(LIST_OF_ICONS),
  color: PropTypes.string,
  width: PropTypes.string
};

Icon.defaultProps = {
  type: 'close',
  color: 'black',
  width: '16px'
};

export default Icon;
