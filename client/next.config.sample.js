module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },

  publicRuntimeConfig: {
    PRODUCTION: false,
    WITHOUT_DOCKER: 0
  },

  env: {
    APP_DOMAIN: 'localhost',
    STRIPE_PUBLISHABLE_API_KEY_DEVELOPMENT: 'STRIPE_PUBLISHABLE_API_KEY_DEVELOPMENT',
    STRIPE_PUBLISHABLE_API_KEY_PRODUCTION: 'STRIPE_PUBLISHABLE_API_KEY_PRODUCTION',
    GOOGLE_AUTH_CLIENT_ID_DEVELOPMENT: 'GOOGLE_AUTH_CLIENT_ID_DEVELOPMENT',
    GOOGLE_AUTH_CLIENT_ID_PRODUCTION: 'GOOGLE_AUTH_CLIENT_ID_PRODUCTION',
    MICROSOFT_AUTH_CLIENT_ID_DEVELOPMENT: 'MICROSOFT_AUTH_CLIENT_ID_DEVELOPMENT',
    MICROSOFT_AUTH_CLIENT_ID_PRODUCTION: 'MICROSOFT_AUTH_CLIENT_ID_PRODUCTION',
    FACEBOOK_AUTH_CLIENT_ID_DEVELOPMENT: 'FACEBOOK_AUTH_CLIENT_ID_DEVELOPMENT',
    FACEBOOK_AUTH_CLIENT_ID_PRODUCTION: 'FACEBOOK_AUTH_CLIENT_ID_PRODUCTION',
    GOOGLE_ANALYTICS_ID_DEVELOPMENT: 'GOOGLE_ANALYTICS_ID_DEVELOPMENT',
    GOOGLE_ANALYTICS_ID_PRODUCTION: 'GOOGLE_ANALYTICS_ID_PRODUCTION',
    USE_GOOGLE_ANALYTICS_IN_DEVELOPMENT: true,
    USE_GOOGLE_ANALYTICS_IN_PRODUCTION: true,
    TINY_CME_API_KEY_DEVELOPMENT: 'TINY_CME_API_KEY_DEVELOPMENT',
    TINY_CME_API_KEY_PRODUCTION: 'TINY_CME_API_KEY_PRODUCTION'
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },

  images: {
    domains: ['localhost', 'makeclient.ngrok.io', 'picsum.photos', 'img.icons8.com']
  }
};
