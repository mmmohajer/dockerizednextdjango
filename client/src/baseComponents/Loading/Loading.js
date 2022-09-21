import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import Image from 'next/image';

import Spinner from '@/images/js-Images/gifs/spinner.gif';

import styles from './Loading.module.scss';

function Loading() {
  return (
    <Div
      className={cx(
        'flex flex--jc--center flex--ai--center w-per-100 text-center height-vh-full pos-fix LoadingZIndex',
        styles.loading
      )}>
      <Div className="flex flex--jc--center flex--ai--center w-px-200 height-px-200 br-rad-per-50">
        <Image src={Spinner} />
      </Div>
    </Div>
  );
}

export default Loading;
