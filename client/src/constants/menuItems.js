import { USER_GROUPS } from '@/constants/userGroups';

export const MENU_ITEMS = [
  {
    identifier: 'about',
    title: 'About',
    to: '/test-pages/test-about',
    hasSubMenu: false,
    showInDesktop: true,
    showInMobile: true
  },
  {
    identifier: 'services',
    title: 'Services',
    to: '/',
    hasSubMenu: true,
    submenuTranslteX: '-100px',
    subMenuWidth: '300px',
    showInDesktop: true,
    showInMobile: true
  },
  {
    identifier: 'dev-design',
    title: 'Dev Design',
    to: '/dev-pages/dev-design',
    icon: 'desktop',
    allowedGroups: [USER_GROUPS.APP_ADMIN, USER_GROUPS.DEVELOPER],
    showInDesktop: false,
    showInMobile: true
  },
  {
    identifier: 'api-doc',
    title: 'API Doc',
    to: '/dev-pages/api-doc',
    icon: 'source-code',
    allowedGroups: [USER_GROUPS.APP_ADMIN, USER_GROUPS.DEVELOPER],
    showInDesktop: false,
    showInMobile: true
  }
];

export const SUB_MENU_ITEMS = {
  services: [
    {
      identifier: 'web-development',
      title: 'Web Development',
      to: '/'
    },

    {
      identifier: 'mvp-development',
      title: 'MVP Development',
      to: '/'
    },
    {
      identifier: 'api-development',
      title: 'API Development',
      to: '/'
    }
  ]
};
