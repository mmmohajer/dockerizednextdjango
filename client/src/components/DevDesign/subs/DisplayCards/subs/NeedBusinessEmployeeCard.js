import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const NeedBusinessEmployeeCard = ({ ...props }) => {
  const [state, setState] = useState(1);

  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: need-business-employee</Div>
        {state === 1 && (
          <Div type="flex">
            <Card
              type="need-business-employee"
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
              type="need-business-employee"
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
              type="need-business-employee"
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
              type="need-business-employee"
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
              type="need-business-employee"
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
              type="need-business-employee"
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
        {state === 3 && (
          <Div type="flex">
            <Card
              type="need-business-employee"
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
              isInVoting
            />
            <Card
              type="need-business-employee"
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
              type="need-business-employee"
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
              type="need-business-employee"
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
              type="need-business-employee"
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
              type="need-business-employee"
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
          </Div>
        )}

        {state === 5 && (
          <Div type="flex">
            <Card
              type="need-business-employee"
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
              isInPledge
              // isInVoting
            />
            <Card
              type="need-business-employee"
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
              type="need-business-employee"
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
          </Div>
        )}
        {state === 6 && (
          <Div type="flex">
            <Card
              type="need-business-employee"
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
              isInPledge
              // isInVoting
            />
            <Card
              type="need-business-employee"
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
              type="need-business-employee"
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
          </Div>
        )}
        {state === 7 && (
          <Div type="flex">
            <Card
              type="need-business-employee"
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
              type="need-business-employee"
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
              type="need-business-employee"
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
              type="need-business-employee"
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
              type="need-business-employee"
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
              type="need-business-employee"
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

export default NeedBusinessEmployeeCard;
