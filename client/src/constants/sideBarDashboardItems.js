import { USER_GROUPS } from '@/constants/userGroups';
import { PAGE_ROUTES } from '@/constants/vars';

export const adminRoutes = [
  {
    identifier: 'dashboard',
    title: 'Dashboard',
    to: PAGE_ROUTES.DASHBOARD,
    icon: 'dashboard2',
    allowedGroups: [USER_GROUPS.APP_ADMIN]
  }
];

export const SIDE_BAR_DASHBOARD_ITEMS = [...adminRoutes];
