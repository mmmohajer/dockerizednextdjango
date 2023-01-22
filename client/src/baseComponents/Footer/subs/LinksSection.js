import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Heading } from 'basedesign-iswad';

import { MENU_ITEMS } from '@/constants/menuItems';
import { AUTO_SCROLL_BEHAVIOR } from '@/constants/vars';

import Icon from '@/baseComponents/Icon';

import styles from '../Footer.module.scss';

const LinksSection = () => {
  const homePageElements = useSelector((state) => state.homePageElements);

  return (
    <>
      <Div className="fs-px-14">
        <Heading type={3} className="pt2">
          Links
        </Heading>
        <Div className="">
          {MENU_ITEMS?.map((item, idx) => (
            <Div
              key={idx}
              type="flex"
              vAlign="center"
              className="mt1 mouse-hand"
              onClick={() =>
                homePageElements[item.identifier].scrollIntoView(AUTO_SCROLL_BEHAVIOR)
              }>
              <Div className="mr1">
                <Icon type="arrow-right" color="white" scale={0.75} />
              </Div>
              <Div>{item.title}</Div>
            </Div>
          ))}
        </Div>
      </Div>
    </>
  );
};

export default LinksSection;
