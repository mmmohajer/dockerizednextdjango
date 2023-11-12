import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const RecentActionCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: recent-action</Div>
        <Card
          type="recent-action"
          //   imgSrc={'https://picsum.photos/seed/picsum/300'}
          action={'VOTE'}
          voteStreak={3}
          moneyTransferAmount={0}
          meesage={''}
          userFirstName={'Mohammad'}
          userPhoto={''}
        />
      </Div>
    </>
  );
};

export default RecentActionCard;
