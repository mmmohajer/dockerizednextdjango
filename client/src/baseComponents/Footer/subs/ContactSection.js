import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';
import PngIcon from '@/baseComponents/PngIcon';
import Anchor from '@/baseComponents/Anchor';

import { CONTACT_INFO } from '../constants';
import styles from '../Footer.module.scss';

const ContactSection = ({ footerIsColored }) => {
  return (
    <>
      <Div type="flex" direction="vertical" className="">
        <Div type="flex" vAlign="center" className="">
          <Div className="mr2">
            <Anchor
              to="https://app.hitroop.com/login"
              anchorType={footerIsColored ? 4 : 3}
              internal={false}>
              Login
            </Anchor>
          </Div>
          <Anchor to='https://meetings.hubspot.com/kelly366/troop-demo' internal={false}>
            <Button btnType={2} className={''} onClick={() => {
              gtag('event', 'cta_click', {
                event_category: 'Button',
                event_label: 'CTA_Click'
              });
            }}>
              Talk to us
            </Button>
          </Anchor>
        </Div>
        <Div type="flex" vAlign="center" className="mt2">
          {CONTACT_INFO?.map((item, idx) => (
            <Div key={idx} className="mr2 mt2 mouse-hand">
              <Anchor to={item.url} internal={false} anchorType={3}>
                <PngIcon type={item.iconType} width={30} height={30} />
              </Anchor>
            </Div>
          ))}
        </Div>
      </Div>
    </>
  );
};

export default ContactSection;
