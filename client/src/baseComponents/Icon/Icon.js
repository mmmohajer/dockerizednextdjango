import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Div } from 'basedesign-iswad';
// import { config, library } from '@fortawesome/fontawesome-svg-core';
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
  faSave,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faEnvelope,
  faPhone,
  faLocationDot,
  faFilePdf,
  faPlusCircle,
  faMinusCircle,
  faCode,
  faLink,
  faHandPointer
} from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram, faJs, faCss3Alt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import Dashboard from '@/images/js-Images/icons/svg/dashboard.svg';
import Instagram from '@/images/js-Images/icons/svg/instagram.svg';
import Location from '@/images/js-Images/icons/svg/location.svg';
import Phone from '@/images/js-Images/icons/svg/phone.svg';
import Mail from '@/images/js-Images/icons/svg/mail.svg';
import Youtube from '@/images/js-Images/icons/svg/youtube.svg';
import Person from '@/images/js-Images/icons/svg/person.svg';
import PersonFill from '@/images/js-Images/icons/svg/person-fill.svg';
import Drag from '@/images/js-Images/icons/svg/drag.svg';

// library.add(fab);

import { LIST_OF_ICONS } from '@/constants/devDesignVars';
function Icon({ type, color, width, scale, isBlock = true, className, ...props }) {
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowIcon(true);
    }
  }, []);
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
    'arrow-down': (
      <FontAwesomeIcon icon={faArrowDown} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'arrow-left': (
      <FontAwesomeIcon icon={faArrowLeft} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'arrow-right': (
      <FontAwesomeIcon icon={faArrowRight} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'arrow-up': (
      <FontAwesomeIcon icon={faArrowUp} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    envelope: (
      <FontAwesomeIcon icon={faEnvelope} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'location-fill': (
      <FontAwesomeIcon
        icon={faLocationDot}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'phone-fill': (
      <FontAwesomeIcon icon={faPhone} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'pdf-file': (
      <FontAwesomeIcon icon={faFilePdf} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'hand-pointer': (
      <FontAwesomeIcon
        icon={faHandPointer}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'plus-circle': (
      <FontAwesomeIcon icon={faPlusCircle} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'minus-circle': (
      <FontAwesomeIcon
        icon={faMinusCircle}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'source-code': (
      <FontAwesomeIcon icon={faCode} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    link: <FontAwesomeIcon icon={faLink} style={{ color, width, transform: `scale(${scale})` }} />,
    'java-script': (
      <FontAwesomeIcon icon={faJs} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    css: (
      <FontAwesomeIcon icon={faCss3Alt} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    linkedin: (
      <FontAwesomeIcon icon={faLinkedin} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'instagram-fill': (
      <FontAwesomeIcon
        icon={faSquareInstagram}
        style={{ color, width, transform: `scale(${scale})` }}
      />
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

  iconTypes['drag'] = <Drag fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />;

  return (
    <>
      {isBlock && (
        <Div type="flex" hAlign="center" vAlign="center" className={cx(className)} {...props}>
          {showIcon && iconTypes[type]}
        </Div>
      )}
      {!isBlock && showIcon ? iconTypes[type] : ''}
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
