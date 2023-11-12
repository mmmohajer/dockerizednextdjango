import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import Photo from '@/images/js-Images/general/Integrations-Page/Integrations-Teams.png';

import styles from '../../../DevDesign.module.scss';

const IntegrationCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: integration</Div>
        <Card
          type="integration"
          imgSrc={Photo}
          title="Boost employee participation"
          details="Meet your team where they are – online. Bring social impact into your digital HQ with the Troop app. When your company’s curated list of local needs is ready, your team gets vote notifications and reminders delivered straight to their social impact Slack or Teams channel. Which local need will you fulfill this month, team?"
        />
      </Div>
    </>
  );
};

export default IntegrationCard;
