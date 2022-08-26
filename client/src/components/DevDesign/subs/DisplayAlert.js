import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { addAlertItem } from '@/utils/notifications';
import { ALERT_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayColors() {
  const dispatch = useDispatch();

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {ALERT_TYPES.map((item, idx) => (
          <Button
            key={idx}
            className={'w-px-200 ml-auto mr-auto mb1'}
            onClick={() =>
              addAlertItem(
                dispatch,
                `This is a sample of ${item} alert, hope it looks good to you!`,
                item
              )
            }>
            Show {item} alert
          </Button>
        ))}
      </Div>
    </>
  );
}

export default DisplayColors;
