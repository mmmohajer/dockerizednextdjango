import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import UserEvent from '@/baseComponents/UserEvent';

import styles from '../DevDesign.module.scss';

function DisplayUserEvent() {
  const [sendCreateEventReq, setSendCreateEventReq] = useState(false);

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <UserEvent
          sendCreateEventReq={sendCreateEventReq}
          setSendCreateEventReq={setSendCreateEventReq}
          event="opened_the_app">
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            onClick={() => setSendCreateEventReq(true)}
            className="w-px-300 height-px-40 bgBlue textWhite mouse-hand">
            Create Event
          </Div>
        </UserEvent>
      </Div>
    </>
  );
}

export default DisplayUserEvent;
