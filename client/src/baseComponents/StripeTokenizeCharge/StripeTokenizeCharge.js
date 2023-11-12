import React from 'react';
import cx from 'classnames';
import { Elements } from '@stripe/react-stripe-js';

import { Div } from 'basedesign-iswad';

import { stripePublishableApiKey } from './utils';
import CheckoutForm from './subs/CheckoutForm';
import styles from './StripeTokenizeCharge.module.scss';

const StripeTokenizeCharge = ({ cardAddedFunc, onCancelClick, isCenteralized = false }) => {
  return (
    <>
      <Elements stripe={stripePublishableApiKey}>
        <Div className={cx('w-per-100', styles.formContainer)}>
          <CheckoutForm
            cardAddedFunc={cardAddedFunc}
            onCancelClick={onCancelClick}
            isCenteralized={isCenteralized}
          />
        </Div>
      </Elements>
    </>
  );
};

export default StripeTokenizeCharge;
