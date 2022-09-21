import { combineReducers } from 'redux';

import loading from './general/loading';
import notifications from './general/notifications';
import language from './general/language';
import activeMenu from './general/activeMenu';
import modalType from './general/modalType';
import modalProps from './general/modalProps';
import mobileNavIsActive from './general/mobileNavIsActive';

import isAuthenticated from './apiCalls/isAuthenticated';
import profile from './apiCalls/profile';

const reducer = combineReducers({
  loading,
  notifications,
  language,
  activeMenu,
  modalType,
  modalProps,
  mobileNavIsActive,
  isAuthenticated,
  profile
});

export default reducer;
