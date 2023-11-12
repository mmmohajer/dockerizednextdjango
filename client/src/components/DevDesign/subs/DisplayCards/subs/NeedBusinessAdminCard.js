import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const NeedBusinessAdminCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: need-business-admin</Div>
        <Card
          type="need-business-admin"
          title="Diapers"
          charityName="Armagh"
          imgSrc="https://picsum.photos/seed/picsum/300"
          shortDescription="Clothing"
          isFulfilled={false}
          id={1}
          charitySlug="armagh"
          value={500}
          pledgePercentage={30}
          pledgeAmount={100}
          numberOfPledgers={2}
          numberOfVotes={12}
          isRegisteredCharity
        />
      </Div>
    </>
  );
};

export default NeedBusinessAdminCard;
