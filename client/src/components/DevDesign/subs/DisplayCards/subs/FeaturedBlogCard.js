import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const FeaturedBlogCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: featured-blog</Div>
        <Card
          type="featured-blog"
          title={'Trooper in Focus: Christina Sorbara from Sorbara Group of Companies'}
          link={`/blog`}
          date='Aug 5, 2020'
          text='lorem ipsom sj jsdk jks  kjs k jsk k jsk k skj sk skj sk ks  skj '
          prevPhoto={ 'https://picsum.photos/200' }
        />
      </Div>
    </>
  );
};

export default FeaturedBlogCard;
