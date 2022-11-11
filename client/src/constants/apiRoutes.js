// INTERNAL API ROUTES
export const REGISTER_API_ROUTE = '/api/auth/users/';
export const LOGIN_API_ROUTE = '/api/create-token/';
export const LOGOUT_API_ROUTE = '/api/logout/';
export const REFRESH_TOKEN_API_ROUTE = '/api/auth/jwt/refresh/';
export const MY_PROFILE_API_ROUTE = '/api/profile/me/';
export const ACTIVATE_USER_API_ROUTE = '/api/activate-user/';
export const RESEND_ACTIVATE_EMAIL_API_ROUTE = '/api/resend-activation-email/';
export const SEND_RESET_PASSWORD_EMAIL_API_ROUTE = '/api/send-reset-password-email/';
export const PASSWORD_SET_API_ROUTE = '/api/reset-password/';
export const AUTHENTICATE_USER_API_ROUTE = '/api/auth/authenticate-user/';
export const GOOGLE_AUTH_TOKEN_API_ROUTE = '/api/auth/google-auth/';
export const GOOGLE_AUTH_HANDLE_TOKEN_API_ROUTE = '/api/auth/google-auth-handle-token/';
export const MICROSOFT_AUTH_TOKEN_API_ROUTE = '/api/auth/microsoft-auth/';
export const MICROSOFT_AUTH_HANDLE_TOKEN_API_ROUTE = '/api/auth/microsoft-auth-handle-token/';
export const FACEBOOK_AUTH_TOKEN_API_ROUTE = '/api/auth/facebook-auth/';
export const FACEBOOK_AUTH_HANDLE_TOKEN_API_ROUTE = '/api/auth/facebook-auth-handle-token/';
export const CAPTCHA_API_ROUTE = '/api/captcha/';
export const STRIPE_CREATE_PAYMENT_INTENT_API_ROUTE = '/api/create-payment-intent/';
export const STRIPE_RETRIEVE_PAYMENT_INTENT_API_ROUTE = '/api/retrieve-payment-intent/';
export const STRIPE_CREATE_SETUP_INTENT_API_ROUTE = '/api/create-setup-intent/';
export const STRIPE_RETRIEVE_SETUP_INTENT_API_ROUTE = '/api/retrieve-setup-intent/';
export const STRIPE_ADD_ACTIVE_CARD_FOR_CUSTOMER = '/api/add-active-card-to-stripe-customer/';
export const STRIPE_CUSTOMER_SOURCE_HANDLER = '/api/stripe-customer-source-handler/';
// WEBSOCKET API ROUTES
export const WEBSOCKET_CHAT_API_ROUTE = `/wss/public-chat/`;

// EXTERNAL API ROUTES
export const GET_IP_INFO_ROUTE = 'https://geolocation-db.com/json/';
