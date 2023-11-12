import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const BlogCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4"
        {...props}>
        <Div className="mb1">Type: blog</Div>
        <Card
          type="blog"
          title="B Corps: The Cool Kids of the Business World, and Why You Should Join the Club"
          excerpt="Learn about the growing popularity of B Corps and why businesses should consider becoming a B Corp. Discover the benefits of being a B Corp, what’s involved in becoming one. Join the movement of using business as a force for good."
          date="February 13, 2023"
          text='helllo sh sh hsh jsj jsj jsj'
          link="https://google.com"
          prevPhoto="https://picsum.photos/350"
        />
      </Div>
    </>
  );
};

export default BlogCard;
