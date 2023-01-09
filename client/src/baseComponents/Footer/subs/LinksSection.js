import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { LINKS } from '../constants';
import styles from '../Footer.module.scss';

const LinksSection = () => {
  return (
    <>
      <Div className="fs-px-14">
        <Heading type={3} className="pt2">
          Links
        </Heading>
        <Div className="">
          {LINKS?.map((link, idx) => (
            <Div key={idx} type="flex" vAlign="center" className="mt1 mouse-hand">
              <Div className="mr1">
                <Icon type="arrow-right" color="white" scale={0.75} />
              </Div>
              <Div>{link.title}</Div>
            </Div>
          ))}
        </Div>
      </Div>
    </>
  );
};

export default LinksSection;
