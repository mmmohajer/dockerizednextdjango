import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';

import InstagramIcon from '@/images/js-Images/icons/png/instagram.png';
import TwitterIcon from '@/images/js-Images/icons/png/twitter.png';
import LinkedinIcon from '@/images/js-Images/icons/png/linkedin.png';
import FacebookIcon from '@/images/js-Images/icons/png/facebook.png';
import SlackIcon from '@/images/js-Images/icons/png/slack.png';
import TeamsIcon from '@/images/js-Images/icons/png/teams.png';

import styles from './PngIcon.module.scss';

const PngIcon = ({ type, width = 50, height = 50 }) => {
  return (
    <>
      <Div
        type="flex"
        vAlign="center"
        hAlign="center"
        className="pos-rel of-hidden"
        style={{ width, height }}>
        {type === 'instagram' && <AppImage src={InstagramIcon} />}
        {type === 'twitter' && <AppImage src={TwitterIcon} />}
        {type === 'linkedin' && <AppImage src={LinkedinIcon} />}
        {type === 'facebook' && <AppImage src={FacebookIcon} />}
        {type === 'slack' && <AppImage src={SlackIcon} />}
        {type === 'teams' && <AppImage src={TeamsIcon} />}
      </Div>
    </>
  );
};

export default PngIcon;
