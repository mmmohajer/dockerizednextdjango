import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import DisplayHeadings from './subs/DisplayHeadings';
import DisplayColors from './subs/DisplayColors';
import DisplayIcons from './subs/DisplayIcons';
import DisplayButtons from './subs/DisplayButtons';

import styles from './DevDesign.module.scss';

const DevDesign = () => {
  return (
    <>
      <Heading className="flex flex--jc--center flex--ai--center my1">Headings</Heading>
      <DisplayHeadings />
      <Heading className="flex flex--jc--center flex--ai--center my1">Colors</Heading>
      <DisplayColors />
      <Heading className="flex flex--jc--center flex--ai--center my1">Icons</Heading>
      <DisplayIcons />
      <Heading className="flex flex--jc--center flex--ai--center my1">Buttons</Heading>
      <DisplayButtons />
    </>
  );
};

export default DevDesign;
