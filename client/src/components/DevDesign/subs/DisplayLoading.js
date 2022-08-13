import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { isLoading, isLoaded } from '@/reducers/general/loading';

import styles from '../DevDesign.module.scss';

function DisplayLoading() {
  const dispatch = useDispatch();

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <Button
          className={'w-px-200 ml-auto mr-auto mb1'}
          onClick={() => {
            dispatch(isLoading());
            setTimeout(() => {
              dispatch(isLoaded());
            }, 5000);
          }}>
          Show Loading for 5 seconds
        </Button>
      </Div>
    </>
  );
}

export default DisplayLoading;
