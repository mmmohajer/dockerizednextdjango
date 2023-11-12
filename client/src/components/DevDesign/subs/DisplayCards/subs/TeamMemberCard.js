import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import Photo from '@/images/js-Images/general/About-Page/TeamMember/Kelly.png';

import styles from '../../../DevDesign.module.scss';

const TeamMemberCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: team-member</Div>
        <Card
          type="team-member"
          imgSrc={Photo}
          details="“We bring it up in our all-hands every month. It puts a smile on their faces, and Troop really does engage everybody.”"
          name="Mohammad Mahdi Mohajer"
          role="Lead Software Developer"
        />
      </Div>
    </>
  );
};

export default TeamMemberCard;
