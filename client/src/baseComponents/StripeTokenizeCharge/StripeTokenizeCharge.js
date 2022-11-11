import React from 'react';
import cx from 'classnames';
import { Elements } from '@stripe/react-stripe-js';

import { Div } from 'basedesign-iswad';

import { stripePublishableApiKey } from './utils';
import CheckoutForm from './subs/CheckoutForm';
import styles from './StripeTokenizeCharge.module.scss';

const StripeTokenizeCharge = () => {
  return (
    <>
      <Elements stripe={stripePublishableApiKey}>
        <Div
          className={cx(
            'boxShadowType1 pl4 pr4 pt2 pb2 w-per-100 max-w-px-600 ml-auto mr-auto br-rad-px-10',
            styles.formContainer
          )}>
          <CheckoutForm />
        </Div>
      </Elements>
    </>
  );
};

export default StripeTokenizeCharge;
