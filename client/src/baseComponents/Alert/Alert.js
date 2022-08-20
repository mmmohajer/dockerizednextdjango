import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Paragraph, Alert as BaseAlert, AlertItem } from 'basedesign-iswad';

import styles from './Alert.module.scss';

import Close from '@/baseComponents/Close';

import { removeAlertItem } from '@/utils/notifications';

const Alert = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

  return (
    <>
      <BaseAlert className="AlertContainerZIndex">
        {notifications.map((notif) => (
          <AlertItem
            key={notif.key}
            isActive={notif.isActive}
            className={cx(
              'm1 p1',
              notif?.type === 'success' && 'bgSuccess',
              notif?.type === 'error' && 'bgDanger',
              notif?.type === 'warning' && 'bgWarning'
            )}>
            <Div className="w-per-100" type="flex" direction="horizontal" distributedBetween>
              <Paragraph className="p1">{notif.message}</Paragraph>
              <Close onClick={() => removeAlertItem(dispatch, notif.key)} />
            </Div>
          </AlertItem>
        ))}
      </BaseAlert>
    </>
  );
};

export default Alert;
