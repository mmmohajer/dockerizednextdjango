import { COLORS } from '@/constants/vars';
import { loadStripe } from '@stripe/stripe-js';

import { STRIPE_PUBLISHABLE_API_KEY } from 'config';

export const stripePublishableApiKey = loadStripe(STRIPE_PUBLISHABLE_API_KEY);

export const options = {
  style: {
    base: {
      color: 'black',
      iconColor: COLORS.grayDark,
      backgroundColor: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: COLORS.grayDark
      }
    },
    invalid: {
      color: COLORS.danger,
      iconColor: COLORS.danger
    }
  }
};
