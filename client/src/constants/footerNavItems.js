import { USER_GROUPS } from '@/constants/userGroups';

export const FOOTER_NAV_ITEMS = [
  { identifier: 'profile', title: 'Profile', to: '/', icon: 'person-fill' },
  { identifier: 'settings', title: 'Settings', to: '/', icon: 'gear' },
  {
    identifier: 'dev-design',
    title: 'Dev Design',
    to: '/dev-pages/dev-design',
    icon: 'desktop',
    allowedGroups: [USER_GROUPS.APP_ADMIN, USER_GROUPS.DEVELOPER]
  },
  {
    identifier: 'api-doc',
    title: 'API Doc',
    to: '/dev-pages/api-doc',
    icon: 'source-code',
    allowedGroups: [USER_GROUPS.APP_ADMIN, USER_GROUPS.DEVELOPER]
  }
];
