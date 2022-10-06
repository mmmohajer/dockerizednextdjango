import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Div, Form } from 'basedesign-iswad';

import { isLoading, isLoaded } from '@/reducers/general/loading';
import { FRONT_END_URL } from 'config';

import Button from '@/baseComponents/Button';

import styles from '../StripeCheckout.module.scss';

const CheckoutForm = ({ use_for_future_payment }) => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(isLoading());
    if (!use_for_future_payment) {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${FRONT_END_URL}/payment-completed`
        }
      });
    } else {
      const { error } = await stripe.confirmSetup({
        elements,
        confirmParams: {
          return_url: `${FRONT_END_URL}/payment-completed`
        }
      });
    }
    dispatch(isLoaded());
    console.log(error);
  };

  return (
    <>
      <Form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        {stripe && elements ? (
          <Div className={cx('my4')}>
            <Button className={cx('w-px-200')}>Submit</Button>
          </Div>
        ) : (
          ''
        )}
      </Form>
    </>
  );
};

export default CheckoutForm;
