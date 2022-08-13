import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import DisplayHeadings from './subs/DisplayHeadings';
import DisplayColors from './subs/DisplayColors';
import DisplayIcons from './subs/DisplayIcons';
import DisplayButtons from './subs/DisplayButtons';
import DisplayForm from './subs/DisplayForm';
import DisplayAlert from './subs/DisplayAlert';
import DisplayModals from './subs/DisplayModals';

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
      <Heading className="flex flex--jc--center flex--ai--center my1">Form Components</Heading>
      <DisplayForm />
      <Heading className="flex flex--jc--center flex--ai--center my1">Alerts</Heading>
      <DisplayAlert />
      <Heading className="flex flex--jc--center flex--ai--center my1">Modals</Heading>
      <DisplayModals />
    </>
  );
};

export default DevDesign;
