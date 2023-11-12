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
  faHandPointer,
  faQuestionCircle,
  faSignOut,
  faSliders,
  faGear,
  faDesktop,
  faUsers,
  faHandHoldingHeart,
  faHandHoldingDollar,
  faChartLine,
  faTable,
  faCircleQuestion,
  faHouse,
  faCaretRight,
  faCircleCheck,
  faGift,
  faGlobe,
  faPuzzlePiece,
  faHeart,
  faMagnifyingGlass,
  faClipboard,
  faDashboard,
  faCalendarDays,
  faStar,
  faFilePen,
  faRightFromBracket,
  faUserPlus,
  faReceipt,
  faTrash,
  faCircleExclamation,
  faWallet,
  faDollarSign,
  faUserGraduate,
  faUser,
  faCalendar,
  faLocation,
  faCircleChevronLeft,
  faCircleChevronRight,
  faAnglesRight,
  faAnglesLeft,
  faHourglassHalf,
  faClock,
  faCircleInfo
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquareInstagram,
  faJs,
  faCss3Alt,
  faLinkedin,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';

import Dashboard from '@/images/js-Images/icons/svg/dashboard.svg';
import Instagram from '@/images/js-Images/icons/svg/instagram.svg';
import Location from '@/images/js-Images/icons/svg/location.svg';
import Phone from '@/images/js-Images/icons/svg/phone.svg';
import Mail from '@/images/js-Images/icons/svg/mail.svg';
import Youtube from '@/images/js-Images/icons/svg/youtube.svg';
import Person from '@/images/js-Images/icons/svg/person.svg';
import PersonFill from '@/images/js-Images/icons/svg/person-fill.svg';
import Drag from '@/images/js-Images/icons/svg/drag.svg';
import Slack from '@/images/js-Images/icons/svg/slack.svg';
import Teams from '@/images/js-Images/icons/svg/teams.svg';
import PDF from '@/images/js-Images/icons/svg/pdf.svg';
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
    'angles-right': (
      <FontAwesomeIcon
        icon={faAnglesRight}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'angles-left': (
      <FontAwesomeIcon icon={faAnglesLeft} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    flag: <FontAwesomeIcon icon={faFlag} style={{ color, width, transform: `scale(${scale})` }} />,
    clock: (
      <FontAwesomeIcon icon={faClock} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    certificate: (
      <FontAwesomeIcon
        icon={faCertificate}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    dollar: (
      <FontAwesomeIcon icon={faDollarSign} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    location: (
      <FontAwesomeIcon icon={faLocation} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    calendar: (
      <FontAwesomeIcon icon={faCalendar} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'circle-chevron-right': (
      <FontAwesomeIcon
        icon={faCircleChevronRight}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'circle-chevron-left': (
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    users: (
      <FontAwesomeIcon icon={faUsers} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    heart: (
      <FontAwesomeIcon icon={faHeart} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    user: <FontAwesomeIcon icon={faUser} style={{ color, width, transform: `scale(${scale})` }} />,
    magnifyer: (
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'puzzle-piece': (
      <FontAwesomeIcon
        icon={faPuzzlePiece}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'user-graduate': (
      <FontAwesomeIcon
        icon={faUserGraduate}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'hand-holding-heart': (
      <FontAwesomeIcon
        icon={faHandHoldingHeart}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'hand-holding-dollar': (
      <FontAwesomeIcon
        icon={faHandHoldingDollar}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    chart: (
      <FontAwesomeIcon icon={faChartLine} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    gift: <FontAwesomeIcon icon={faGift} style={{ color, width, transform: `scale(${scale})` }} />,
    globe: (
      <FontAwesomeIcon icon={faGlobe} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'circle-check': (
      <FontAwesomeIcon
        icon={faCircleCheck}
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
    wallet: (
      <FontAwesomeIcon icon={faWallet} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'instagram-fill': (
      <FontAwesomeIcon
        icon={faSquareInstagram}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    save: <FontAwesomeIcon icon={faSave} style={{ color, width, transform: `scale(${scale})` }} />,
    'question-circle': (
      <FontAwesomeIcon
        icon={faQuestionCircle}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    signout: (
      <FontAwesomeIcon icon={faSignOut} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    slider: (
      <FontAwesomeIcon icon={faSliders} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    gear: <FontAwesomeIcon icon={faGear} style={{ color, width, transform: `scale(${scale})` }} />,
    desktop: (
      <FontAwesomeIcon icon={faDesktop} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'heart-empty': (
      <FontAwesomeIcon icon={emptyHeart} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    grid: <FontAwesomeIcon icon={faTable} style={{ color, width, transform: `scale(${scale})` }} />,
    'circle-question': (
      <FontAwesomeIcon
        icon={faCircleQuestion}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    house: (
      <FontAwesomeIcon icon={faHouse} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'caret-right': (
      <FontAwesomeIcon icon={faCaretRight} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'linkedin-in': (
      <FontAwesomeIcon icon={faLinkedinIn} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    clipboard: (
      <FontAwesomeIcon icon={faClipboard} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    dashboard2: (
      <FontAwesomeIcon icon={faDashboard} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'calendar-days': (
      <FontAwesomeIcon
        icon={faCalendarDays}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    star: <FontAwesomeIcon icon={faStar} style={{ color, width, transform: `scale(${scale})` }} />,
    'file-pen': (
      <FontAwesomeIcon icon={faFilePen} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    logout: (
      <FontAwesomeIcon
        icon={faRightFromBracket}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'user-plus': (
      <FontAwesomeIcon icon={faUserPlus} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    receipt: (
      <FontAwesomeIcon icon={faReceipt} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    trash: (
      <FontAwesomeIcon icon={faTrash} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    'circle-exclamation': (
      <FontAwesomeIcon
        icon={faCircleExclamation}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'hour-glass': (
      <FontAwesomeIcon
        icon={faHourglassHalf}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),
    'circle-info': (
      <FontAwesomeIcon icon={faCircleInfo} style={{ color, width, transform: `scale(${scale})` }} />
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

  iconTypes['drag'] = <Drag fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />;
  iconTypes['slack'] = (
    <Slack fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );
  iconTypes['teams'] = (
    <Teams fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );
  iconTypes['pdf'] = <PDF fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />;
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
