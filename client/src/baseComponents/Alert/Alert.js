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
              'm1 boxShadowType1 br-rad-px-5',
              notif?.type === 'success' && styles.success,
              notif?.type === 'error' && styles.error,
              notif?.type === 'warning' && styles.warning
            )}>
            <Div className="w-per-100" direction="vertical" type="flex">
              <Close
                barHeight="30px"
                barColor="transparent"
                iconScale={0.6}
                onClick={() => removeAlertItem(dispatch, notif.key)}
              />
              <Paragraph className="pb2 pl2 pr2">{notif.message}</Paragraph>
            </Div>
          </AlertItem>
        ))}
      </BaseAlert>
    </>
  );
};

export default Alert;
