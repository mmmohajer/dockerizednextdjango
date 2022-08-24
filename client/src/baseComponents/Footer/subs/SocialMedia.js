import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';
import { COLORS } from '@/constants/vars';

import styles from '../Footer.module.scss';

const SocialMedia = ({ href, type, scale = 1.5, ...props }) => {
  const [iconColor, setIconColor] = useState(COLORS.faded);

  return (
    <>
      <a href={href} target="_blank" {...props}>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          onMouseOver={() => {
            setIconColor(COLORS.themeFour);
          }}
          onMouseLeave={() => {
            setIconColor(COLORS.faded);
          }}
          className={cx(
            'flex flex--jc--center w-px-50 height-px-50 br-none mx1',
            styles.socialMediaIconContainer
          )}>
          <Icon type={type} color={iconColor} scale={scale} />
        </Div>
      </a>
    </>
  );
};
export default SocialMedia;
