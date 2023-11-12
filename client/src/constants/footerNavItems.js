import { USER_GROUPS } from '@/constants/userGroups';
import { PAGE_ROUTES } from './vars';

const adminFooterNavItems = [
  {
    identifier: 'dashboard',
    title: 'Dashboard',
    to: PAGE_ROUTES.DASHBOARD,
    icon: 'dashboard2',
    allowedGroups: [USER_GROUPS.APP_ADMIN]
  },
  {
    identifier: 'settings',
    title: 'Settings',
    to: PAGE_ROUTES.DASHBOARD,
    icon: 'envelope',
    allowedGroups: [USER_GROUPS.APP_ADMIN]
  }
];

export const FOOTER_NAV_ITEMS = [...adminFooterNavItems];
