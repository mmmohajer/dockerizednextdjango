import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Elements } from '@stripe/react-stripe-js';
import { Div } from 'basedesign-iswad';

import { STRIPE_CREATE_PAYMENT_INTENT_API_ROUTE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import CheckoutForm from './subs/CheckoutForm';
import { stripePublishableApiKey, appearance } from './utils';
import styles from './StripeCheckout.module.scss';

const StripeCheckout = () => {
  const [clientSecret, setClientSecret] = useState('');

  const options = {
    clientSecret,
    appearance
  };

  const [sendCreateIntentReq, setSendCreateIntentReq] = useState(false);
  const bodyData = {
    amount: 10.0
  };
  const { data, error } = useApiCalls({
    sendReq: sendCreateIntentReq,
    setSendReq: setSendCreateIntentReq,
    method: 'POST',
    url: STRIPE_CREATE_PAYMENT_INTENT_API_ROUTE,
    bodyData,
    showLoading: true
  });
  useEffect(() => {
    if (data?.client_secret) {
      setClientSecret(data.client_secret);
    }
  }, [data]);

  useEffect(() => {
    setSendCreateIntentReq(true);
  }, []);

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePublishableApiKey}>
          <Div
            hAlign="center"
            vAlign="center"
            className={cx(
              'boxShadowType1 px4 w-per-100 w-per-100 max-w-px-600 ml-auto mr-auto br-rad-px-10',
              styles.formContainer
            )}>
            <CheckoutForm />
          </Div>
        </Elements>
      )}
    </>
  );
};

export default StripeCheckout;
