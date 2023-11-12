import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const NeedProfileCard = ({ ...props }) => {
  const [state, setState] = useState(3);

  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: need-profile</Div>
        {state === 1 && (
          <Div type="flex">
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Ipsum is simply dummy text of the printing and type Ipsum is simply dummy text of the printing and type  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              // userHasVoted
              // isInPledge
              isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              // userHasVoted
              // isInPledge
              isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              // userHasVoted
              // isInPledge
              isInVoting
            />
          </Div>
        )}
        {state === 2 && (
          <Div type="flex">
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              isUserVote
              userHasVoted
              // isInPledge
              isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              userHasVoted
              // isInPledge
              isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Ah, summer...it's the time for festivals and fun in the sun. Well, the Ki-Low-Na Friendship Society has an extra special event for their community! Turtle Island Festival is a celebration of National Indigenous Peoples Day. It's a chance to showcase the diversity of Indigenous cultures in Canada, and to learn more about and celebrate the unique heritage, culture, and outstanding achievements of Okanagan Indigenous peoples. They're in need of a few key items to ensure the safety and success of this event - namely, sunscreen and first aid kits! Let's help out our neighbours put on the best event they can this year."
              // isFulfilled
              // isUserVote
              userHasVoted
              // isInPledge
              isInVoting
            />
          </Div>
        )}
        {state === 3 && (
          <Div type="flex">
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Ah, summer...it's the time for festivals and fun in the sun. Well, the Ki-Low-Na Friendship Society has an extra special event for their community! Turtle Island Festival is a celebration of National Indigenous Peoples Day. It's a chance to showcase the diversity of Indigenous cultures in Canada, and to learn more about and celebrate the unique heritage, culture, and outstanding achievements of Okanagan Indigenous peoples. They're in need of a few key items to ensure the safety and success of this event - namely, sunscreen and first aid kits! Let's help out our neighbours put on the best event they can this year."
              isFulfilled
              fulfilledByPledge
              // isUserVote
              // userHasVoted
              // isInPledge
              isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              // userHasVoted
              // isInPledge
              isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              // userHasVoted
              // isInPledge
              isInVoting
            />
          </Div>
        )}
        {state === 4 && (
          <Div type="flex">
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              isFulfilled
              fulfilledByPledge
              // isUserVote
              userHasVoted
              // isInPledge
              isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              isUserVote
              userHasVoted
              // isInPledge
              isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              userHasVoted
              // isInPledge
              isInVoting
            />
          </Div>
        )}

        {state === 5 && (
          <Div type="flex">
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              isFulfilled
              isUserVote
              userHasVoted
              isInPledge
              // isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              // userHasVoted
              isInPledge
              // isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              userHasVoted
              isInPledge
              // isInVoting
            />
          </Div>
        )}
        {state === 6 && (
          <Div type="flex">
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              isFulfilled
              isUserVote
              userHasVoted
              isInPledge
              // isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              isFulfilled
              fulfilledByPledge
              // isUserVote
              // userHasVoted
              isInPledge
              // isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              userHasVoted
              isInPledge
              // isInVoting
            />
          </Div>
        )}
        {state === 7 && (
          <Div type="flex">
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              isFulfilled
              // isUserVote
              // userHasVoted
              // isInPledge
              // isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              // userHasVoted
              // isInPledge
              // isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              // userHasVoted
              // isInPledge
              // isInVoting
            />
          </Div>
        )}
        {state === 8 && (
          <Div type="flex">
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              isFulfilled
              // isUserVote
              // userHasVoted
              // isInPledge
              // isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              isFulfilled
              fulfilledByPledge
              // isUserVote
              // userHasVoted
              // isInPledge
              // isInVoting
            />
            <Card
              type="need-profile"
              title="Diapers"
              charityName="Armagh"
              imgSrc="https://picsum.photos/seed/picsum/300"
              shortDescription="Clothing"
              id={1}
              charitySlug="armagh"
              value={500}
              pledgePercentage={30}
              pledgeAmount={100}
              numberOfPledgers={2}
              votePercentage={12}
              isRegisteredCharity
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              // isFulfilled
              // isUserVote
              // userHasVoted
              // isInPledge
              // isInVoting
            />
          </Div>
        )}
      </Div>
    </>
  );
};

export default NeedProfileCard;
