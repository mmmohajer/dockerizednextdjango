import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';
import Anchor from '@/baseComponents/Anchor';

import { COLORS, lgDesignSize } from '@/constants/vars';

import styles from '../Header.module.scss';

const WebUser = () => {
  return (
    <>
      <Div type="flex" hAlign="center" vAlign="center">
        <Div className="textWhite mr2">
          <Anchor to="https://app.hitroop.com/login" anchorType={4} internal={false}>
            Login
          </Anchor>
        </Div>
        <Div showIn={lgDesignSize} className="">
          <Anchor to="https://meetings.hubspot.com/kelly366/troop-demo" internal={false}>
            <Button
              btnType={2}
              iconType="arrow-right"
              iconColor="white"
              className={cx(styles.userManagerBtn)}
              onClick={() => {
                gtag('event', 'cta_click', {
                  event_category: 'Button',
                  event_label: 'CTA_Click'
                });
              }}>
              Talk to us
            </Button>
          </Anchor>
        </Div>
      </Div>
    </>
  );
};

export default WebUser;
