import { generateKey } from '@/utils/helpers';
import {
  addNotification,
  activateNotification,
  removeNotification,
  deactivateNotification
} from '@/reducers/general/notifications';
import { AUTOMATIC_REMOVE_ALERT_TIME_IN_SECONDS } from '@/constants/vars';

export const removeAlertItem = (dispatch, key) => {
  dispatch(deactivateNotification({ key }));
  setTimeout(() => {
    dispatch(removeNotification({ key }));
  }, 500);
};

export const addAlertItem = (dispatch, message, type) => {
  const key = generateKey();
  dispatch(addNotification({ key, message, type }));
  setTimeout(() => {
    dispatch(activateNotification({ key }));
  }, 5);
  setTimeout(() => {
    removeAlertItem(dispatch, key);
  }, AUTOMATIC_REMOVE_ALERT_TIME_IN_SECONDS * 1000);
};

const cleaningError = (err) => {
  err = err.replaceAll('[', '');
  err = err.replaceAll(']', '');
  err = err.replaceAll("'", '');
  return err;
};

export const showErrorAPIAlert = (error, dispatch) => {
  if (error && error?.data) {
    if (typeof error.data === 'object') {
      Object.keys(error.data).forEach((key) => {
        if (error.data[key]) {
          if (Array.isArray(error.data[key])) {
            error.data[key].forEach((err) => {
              if (typeof err === 'string') {
                addAlertItem(dispatch, err, 'error');
              } else if (err?.message) {
                if (typeof err.message === 'string') {
                  addAlertItem(dispatch, err.message, 'error');
                }
              } else {
                console.log(e);
              }
            });
          } else {
            addAlertItem(dispatch, error.data[key], 'error');
          }
        }
      });
    } else if (typeof error.data === 'string') {
      if (Array.isArray(error.data)) {
        error.data.forEach((err) => {
          if (typeof err === 'string') {
            addAlertItem(dispatch, err, 'error');
          } else if (err?.message) {
            if (typeof err.message === 'string') {
              addAlertItem(dispatch, err.message, 'error');
            }
          } else {
            console.log(e);
          }
        });
      } else {
        addAlertItem(dispatch, error.data, 'error');
      }
    }
  }
};
