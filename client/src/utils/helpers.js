import { APP_DOMAIN, WITHOUT_DOCKER, PRODUCTION } from '@/root/config';

export const generateKey = (length = 16) => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.><,=-)(*&^%$#@!~';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const websocketApiRoute = (url) => {
  if (Boolean(parseInt(WITHOUT_DOCKER))) {
    return `ws://localhost:8000${url}`;
  } else {
    if (!PRODUCTION) {
      return `ws://${APP_DOMAIN}${url}`;
    } else {
      return `wss://${APP_DOMAIN}${url}`;
    }
  }
};
