import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import styles from '../HomePage.module.scss';

const SectionSeparator = ({ title }) => {
  return (
    <>
      <Heading
        type={2}
        className="flex flex--jc--center flex--ai--center p2 my1 w-per-100 bgThemeOne textWhite">
        {title}
      </Heading>
    </>
  );
};

export default SectionSeparator;
