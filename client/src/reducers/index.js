import { combineReducers } from 'redux';

import loading from './general/loading';
import notifications from './general/notifications';
import language from './general/language';
import activeMenu from './general/activeMenu';
import activeSubMenu from './general/activeSubMenu';
import modalType from './general/modalType';
import modalProps from './general/modalProps';
import mobileNavIsActive from './general/mobileNavIsActive';
import chatSocket from './general/chatSocket';
import scrollPosition from './general/scrollPosition';
import homePageElements from './general/homePageElements';
import elementsHeightStore from './general/elementsHeightStore';
import userIPInfo from './general/userIPInfo';
import sideBarDashboardIsActive from './general/sidebarDashboardIsActive';

import isAuthenticated from './apiCalls/isAuthenticated';
import profile from './apiCalls/profile';

const reducer = combineReducers({
  loading,
  notifications,
  language,
  activeMenu,
  activeSubMenu,
  modalType,
  modalProps,
  mobileNavIsActive,
  chatSocket,
  scrollPosition,
  homePageElements,
  elementsHeightStore,
  userIPInfo,
  sideBarDashboardIsActive,
  isAuthenticated,
  profile
});

export default reducer;
