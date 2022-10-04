import { loadStripe } from '@stripe/stripe-js';

import { STRIPE_PUBLISHABLE_API_KEY } from 'config';
import { COLORS } from '@/constants/vars';

const boxShadow1 = 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px';

export const stripePublishableApiKey = loadStripe(STRIPE_PUBLISHABLE_API_KEY);

export const appearance = {
  theme: 'none',

  variables: {
    colorPrimary: COLORS.primary,
    colorBackground: 'white',
    colorText: 'black',
    colorDanger: COLORS.danger,
    fontFamily: 'Roboto, sans-serif',
    spacingUnit: '2px',
    borderRadius: '4px'
  },

  rules: {
    '.Label': {
      fontSize: '14px',
      color: COLORS.grayDark,
      marginTop: '2rem',
      marginLeft: '4px'
    },

    '.Input': {
      border: 'none',
      boxShadow: boxShadow1,
      border: `solid 1px ${COLORS.grayBright}`,
      padding: '12px 1rem'
    },

    '.Input:focus': {
      outline: 'none'
    }
  }
};
