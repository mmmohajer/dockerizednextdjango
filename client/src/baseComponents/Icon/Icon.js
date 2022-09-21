import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Div } from 'basedesign-iswad';
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
  faAngleDown,
  faAngleUp,
  faCheck,
  faRotate,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faSearch,
  faMinus,
  faFileUpload,
  faSave
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
function Icon({ type, color, width, scale, className, ...props }) {
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
    angleDown: (
      <FontAwesomeIcon icon={faAngleDown} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    angleUp: (
      <FontAwesomeIcon icon={faAngleUp} style={{ color, width, transform: `scale(${scale})` }} />
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
    ),
    rotate: (
      <FontAwesomeIcon icon={faRotate} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    angleDoubleLeft: (
      <FontAwesomeIcon
        icon={faAngleDoubleLeft}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    angleDoubleRight: (
      <FontAwesomeIcon
        icon={faAngleDoubleRight}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    search: (
      <FontAwesomeIcon icon={faSearch} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    minus: (
      <FontAwesomeIcon icon={faMinus} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'file-upload': (
      <FontAwesomeIcon icon={faFileUpload} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    save: <FontAwesomeIcon icon={faSave} style={{ color, width, transform: `scale(${scale})` }} />
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

  return (
    <>
      <Div type="flex" hAlign="center" vAlign="center" className={cx(className)} {...props}>
        {iconTypes[type]}
      </Div>
    </>
  );
}

Icon.propTypes = {
  type: PropTypes.oneOf(LIST_OF_ICONS),
  color: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string
};

Icon.defaultProps = {
  type: 'close',
  color: 'black',
  width: '16px'
};

export default Icon;
