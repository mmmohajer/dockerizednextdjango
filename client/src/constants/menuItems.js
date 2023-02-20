export const MENU_ITEMS = [
  { identifier: 'about', title: 'About', to: '/test-pages/test-about', hasSubMenu: false },
  {
    identifier: 'services',
    title: 'Services',
    to: '/',
    hasSubMenu: true,
    submenuTranslteX: '-100px',
    subMenuWidth: '300px'
  },
  {
    identifier: 'experience',
    title: 'Experience',
    to: '/',
    hasSubMenu: false
  },
  { identifier: 'projects', title: 'Projects', to: '/', hasSubMenu: false },
  {
    identifier: 'testimonials',
    title: 'Testimonials',
    to: '/',
    hasSubMenu: false
  },
  { identifier: 'contact', title: 'Contact', to: '/', hasSubMenu: false }
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
