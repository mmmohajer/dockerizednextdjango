import {
  GOOGLE_AUTH_CLIENT_ID,
  MICROSOFT_AUTH_CLIENT_ID,
  FACEBOOK_AUTH_CLIENT_ID
} from '@/root/config';

export const ACCESS_TOKEN_CHEANGE_TIME = 1000 * 60 * 4.5;
export const TOKEN_SPACE_WORD = 'JWT';

export const AUTOMATIC_REMOVE_ALERT_TIME_IN_SECONDS = 10;

export const AUTO_SCROLL_BEHAVIOR = {
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest',
  alignToTop: true
};

// ------------------------- Google Auth -------------------------
const GOOGLE_AUTH_BASE_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
export const GOOGLE_AUTH_SCOPE_PROFILE_URL = 'https://www.googleapis.com/auth/userinfo.profile';
export const GOOGLE_AUTH_SCOPE_EMAIL_URL = 'https://www.googleapis.com/auth/userinfo.email';
const GOOGLE_AUTH_SCOPE_OPEN_ID = 'openid';
const GOOGLE_AUTH_REDIRECT_URL = 'http://localhost/login';
export const GOOGLE_AUTH_URL = `${GOOGLE_AUTH_BASE_URL}?scope=${GOOGLE_AUTH_SCOPE_PROFILE_URL} ${GOOGLE_AUTH_SCOPE_EMAIL_URL} ${GOOGLE_AUTH_SCOPE_OPEN_ID}&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${GOOGLE_AUTH_REDIRECT_URL}&client_id=${GOOGLE_AUTH_CLIENT_ID}`;

// ------------------------- Microsoft Auth -------------------------
const MICROSOFT_AUTH_BASE_URL = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize';
const MICROSOFT_AUTH_REDIRECT_URL = 'https://makeclient.ngrok.io/login';
export const MICROSOFT_AUTH_URL = `${MICROSOFT_AUTH_BASE_URL}?client_id=${MICROSOFT_AUTH_CLIENT_ID}&scope=openid email profile&response_type=code&redirect_uri=${MICROSOFT_AUTH_REDIRECT_URL}`;
// ---------------------------------------------------------------------------

// ------------------------- Facebbok Auth -------------------------
const FACEBOOK_AUTH_BASE_URL = 'https://www.facebook.com/v14.0/dialog/oauth';
const Facebbok_AUTH_REDIRECT_URL = 'https://makeclient.ngrok.io/login';
export const FACEBOOK_AUTH_URL = `${FACEBOOK_AUTH_BASE_URL}?client_id=${FACEBOOK_AUTH_CLIENT_ID}&redirect_uri=${Facebbok_AUTH_REDIRECT_URL}&auth_type=rerequest&scope=email public_profile`;
// ---------------------------------------------------------------------------

export const lgDesignSize = ['md', 'lg'];
export const smDesignSize = ['xs', 'sm'];

// ---------------------------------------------------------------------------

export const COLORS = {
  primary: '#0a2647',
  faded: '#f3f3f3',
  info: '#5bc0de',
  inverse: '#292b2c',
  warning: '#f0ad4e',
  success: '#5cb85c',
  danger: '#d9534f',
  grayBright: '#737373',
  grayDark: '#5c5c5c',
  themeOne: '#666dff',
  themeTwo: '#f5891f',
  themeThree: '#00ff7f',
  themeFour: '#26335d',
  themeFive: '#ffe5d0',
  themeSix: '#FEBA13'
};

export const PAGE_ROUTES = {
  HOME: '/',
  DASHBOARD: '/test-pages/sample-of-admin-route'
};

// ---------------------------------------------------------------------------

export const PROVINCE_CHOICES = [
  { value: 'AB', shownText: 'Alberta' },
  { value: 'BC', shownText: 'British Columbia' },
  { value: 'MB', shownText: 'Manitoba' },
  { value: 'NB', shownText: 'New Brunswick' },
  { value: 'NL', shownText: 'Newfoundland and Labrador' },
  { value: 'NT', shownText: 'Northwest Territories' },
  { value: 'NS', shownText: 'Nova Scotia' },
  { value: 'NU', shownText: 'Nunavut' },
  { value: 'ON', shownText: 'Ontario' },
  { value: 'PE', shownText: 'Prince Edward Island' },
  { value: 'QC', shownText: 'Quebec' },
  { value: 'YT', shownText: 'Yukon Territories' }
];

export const DATE_FORMAT = 'DD MMM, YYYY';
