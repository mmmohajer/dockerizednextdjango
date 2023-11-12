import { USER_GROUPS } from '@/constants/userGroups';
import { PAGE_ROUTES } from './vars';

const generalItems = [
  {
    identifier: 'home',
    title: 'Home',
    to: PAGE_ROUTES.HOME,
    hasSubMenu: false,
    showInDesktop: true,
    showInMobile: true
  },
  {
    identifier: 'services',
    title: 'Services',
    to: PAGE_ROUTES.HOME,
    hasSubMenu: true,
    showInDesktop: true,
    showInMobile: true,
    submenuTranslteX: '-100px'
  }
];

const adminItems = [
  {
    identifier: 'settings',
    title: 'Settings',
    to: PAGE_ROUTES.DASHBOARD,
    icon: 'gear',
    allowedGroups: [USER_GROUPS.APP_ADMIN],
    showInDesktop: false,
    showInMobile: true
  }
];

export const MENU_ITEMS = [...generalItems, ...adminItems];

export const SUB_MENU_ITEMS = {
  services: [
    {
      identifier: 'business',
      title: 'For Businesses',
      to: PAGE_ROUTES.HOME
    },

    {
      identifier: 'apps',
      title: 'Integrations',
      to: PAGE_ROUTES.HOME
    }
  ]
};
