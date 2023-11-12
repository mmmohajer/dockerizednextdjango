import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Paragraph, Alert as BaseAlert, AlertItem } from 'basedesign-iswad';

import Close from '@/baseComponents/Close';

import { COLORS } from '@/constants/vars';
import { removeAlertItem } from '@/utils/notifications';

import styles from './Alert.module.scss';

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
                barColor=""
                iconColor={COLORS.grayDark}
                iconScale={0.8}
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
