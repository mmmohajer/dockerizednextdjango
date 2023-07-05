import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const PRODUCTION = publicRuntimeConfig.PRODUCTION;
export const WITHOUT_DOCKER = !publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.WITHOUT_DOCKER
  : 0;
export const APP_DOMAIN = !publicRuntimeConfig.PRODUCTION ? 'localhost' : process.env.APP_DOMAIN;
export const APP_DOMAIN_FOR_SERVER_SIDE_PROPS = !publicRuntimeConfig.PRODUCTION
  ? 'https://makeclient.ngrok.io'
  : `https://${process.env.APP_DOMAIN}`;
export const FRONT_END_URL = !publicRuntimeConfig.PRODUCTION
  ? 'http://localhost'
  : `https://${process.env.APP_DOMAIN}`;
export const API_BASE_URL_WITHOUT_DOCKER = 'http://localhost:8000';
export const STRIPE_PUBLISHABLE_API_KEY = !publicRuntimeConfig.PRODUCTION
  ? process.env.STRIPE_PUBLISHABLE_API_KEY_DEVELOPMENT
  : process.env.STRIPE_PUBLISHABLE_API_KEY_PRODUCTION;
export const GOOGLE_AUTH_CLIENT_ID = !publicRuntimeConfig.PRODUCTION
  ? process.env.GOOGLE_AUTH_CLIENT_ID_DEVELOPMENT
  : process.env.GOOGLE_AUTH_CLIENT_ID_PRODUCTION;
export const MICROSOFT_AUTH_CLIENT_ID = !publicRuntimeConfig.PRODUCTION
  ? process.env.MICROSOFT_AUTH_CLIENT_ID_DEVELOPMENT
  : process.env.MICROSOFT_AUTH_CLIENT_ID_PRODUCTION;
export const FACEBOOK_AUTH_CLIENT_ID = !publicRuntimeConfig.PRODUCTION
  ? process.env.FACEBOOK_AUTH_CLIENT_ID_DEVELOPMENT
  : process.env.FACEBOOK_AUTH_CLIENT_ID_PRODUCTION;
export const GOOGLE_ANALYTICS_ID = !publicRuntimeConfig.PRODUCTION
  ? process.env.GOOGLE_ANALYTICS_ID_DEVELOPMENT
  : process.env.GOOGLE_ANALYTICS_ID_PRODUCTION;
export const USE_GOOGLE_ANALYTICS = !publicRuntimeConfig.PRODUCTION
  ? process.env.USE_GOOGLE_ANALYTICS_IN_DEVELOPMENT
  : process.env.USE_GOOGLE_ANALYTICS_IN_PRODUCTION;
export const TINY_CME_API_KEY = !publicRuntimeConfig.PRODUCTION
  ? process.env.TINY_CME_API_KEY_DEVELOPMENT
  : process.env.TINY_CME_API_KEY_PRODUCTION;
export const IP_INFO_TOKEN = !publicRuntimeConfig.PRODUCTION
  ? process.env.IP_INFO_TOKEN_DEVELOPMENT
  : process.env.IP_INFO_TOKEN_PRODUCTION;
export const USE_GET_IP_INFO_TOKEN = !publicRuntimeConfig.PRODUCTION
  ? process.env.USE_GET_IP_INFO_TOKEN_DEVELOPMENT
  : process.env.USE_GET_IP_INFO_TOKEN_PRODUCTION;
export const USE_HOTJAR = !publicRuntimeConfig.PRODUCTION
  ? process.env.USE_HOTJAR_DEVELOPMENT
  : process.env.USE_HOTJAR_PRODUCTION;
export const HOTJAR_ID = !publicRuntimeConfig.PRODUCTION
  ? process.env.HOTJAR_ID_DEVELOPMENT
  : process.env.HOTJAR_ID_PRODUCTION;
export const IS_STAGING_ENV = !publicRuntimeConfig.PRODUCTION ? 0 : process.env.IS_STAGING_ENV;
