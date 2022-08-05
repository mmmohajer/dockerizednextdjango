module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },

  publicRuntimeConfig: {
    PRODUCTION: false
  },

  env: {
    GOOGLE_AUTH_CLIENT_ID_DEVELOPMENT:
      '756930718150-3k2bojhjc10vdaqt8aa1n93q6le60r90.apps.googleusercontent.com',
    GOOGLE_AUTH_CLIENT_ID_PRODUCTION:
      '756930718150-3k2bojhjc10vdaqt8aa1n93q6le60r90.apps.googleusercontent.com',
    MICROSOFT_AUTH_CLIENT_ID_DEVELOPMENT: '2baf1919-0b31-4750-b845-25101ddee912',
    MICROSOFT_AUTH_CLIENT_ID_PRODUCTION: '2baf1919-0b31-4750-b845-25101ddee912',
    FACEBOOK_AUTH_CLIENT_ID_DEVELOPMENT: '330573512581569',
    FACEBOOK_AUTH_CLIENT_ID_PRODUCTION: '330573512581569'
  },

  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};
