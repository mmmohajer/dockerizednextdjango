import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Div, Form } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import useApiCalls from '@/hooks/useApiCalls';
import { STRIPE_ADD_ACTIVE_CARD_FOR_CUSTOMER } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';
import { isLoaded, isLoading } from '@/reducers/general/loading';

import Button from '@/baseComponents/Button';

import { options } from '../utils';
import styles from '../StripeTokenizeCharge.module.scss';

const CheckoutForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const [token, setToken] = useState('');

  const [sendTokenReq, setSendTokenReq] = useState(false);
  const bodyData = {
    token
  };
  const { data, error } = useApiCalls({
    sendReq: sendTokenReq,
    setSendReq: setSendTokenReq,
    method: 'POST',
    url: STRIPE_ADD_ACTIVE_CARD_FOR_CUSTOMER,
    bodyData
  });
  useEffect(() => {
    if (data) {
      addAlertItem(dispatch, 'Thanks, we successfully added your card.', 'success');
      router.push('/stripe-customer-active-sources');
    }
  }, [data]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    dispatch(isLoaded());
    const res = await stripe.createToken(card);
    dispatch(isLoading());

    if (res.error) {
      addAlertItem(dispatch, res.error.message, 'error');
      console.log(res.error.message);
    } else {
      if (res?.token?.id) {
        setToken(res.token.id);
      }
    }
  };

  useEffect(() => {
    if (token) {
      setSendTokenReq(true);
    }
  }, [token]);

  return (
    <>
      <Div>
        <Form onSubmit={handleSubmit}>
          <Div className={cx('br-all-solid-1 p2 br-color-grayBright br-rad-px-5 boxShadowType1')}>
            <CardElement id="card-element" options={options} />
          </Div>
          {stripe && elements ? (
            <Div className="mt2 w-per-100">
              <Button className={cx('w-per-100')}>Submit</Button>
            </Div>
          ) : (
            ''
          )}
        </Form>
      </Div>
    </>
  );
};

export default CheckoutForm;
