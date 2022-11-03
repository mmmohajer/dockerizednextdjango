import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';
import Router, { useRouter } from 'next/router';

import { isLoading, isLoaded } from '@/reducers/general/loading';
import {
  STRIPE_RETRIEVE_PAYMENT_INTENT_API_ROUTE,
  STRIPE_RETRIEVE_SETUP_INTENT_API_ROUTE
} from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import styles from './PaymentCompleted.module.scss';

const PaymentCompleted = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [useForFuturePayment, setUseForFuturePayment] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(true);
  const [isConfirmingOrder, setIsConfirmingOrder] = useState(false);
  const [paymentIntentId, setPaymentIntentId] = useState('');
  const [retrieveIntentUrl, setRetrieveIntentUrl] = useState('');

  useEffect(() => {
    if (useForFuturePayment) {
      setRetrieveIntentUrl(STRIPE_RETRIEVE_SETUP_INTENT_API_ROUTE);
    } else {
      setRetrieveIntentUrl(STRIPE_RETRIEVE_PAYMENT_INTENT_API_ROUTE);
    }
  }, [useForFuturePayment]);

  const [sendRetrievePaymentReq, setSendRetrievePaymentReq] = useState(false);
  const bodyData = {
    id: paymentIntentId
  };
  const { data, error } = useApiCalls({
    sendReq: sendRetrievePaymentReq,
    setSendReq: setSendRetrievePaymentReq,
    method: 'POST',
    url: retrieveIntentUrl,
    bodyData,
    showLoading: false
  });
  useEffect(() => {
    if (data) {
      if (data?.payload) {
        console.log(data.payload);
        if (data.payload?.status === 'succeeded') {
          setIsProcessingPayment(false);
          if (data.payload?.metadata?.order_is_confirmed === 'False') {
            dispatch(isLoading());
            setIsConfirmingOrder(true);
            setTimeout(() => {
              setSendRetrievePaymentReq(true);
            }, 1000);
          } else {
            dispatch(isLoaded());
            setIsConfirmingOrder(false);
            Router.push('/');
          }
        } else if (data.payload?.status === 'processing') {
          setTimeout(() => {
            setSendRetrievePaymentReq(true);
          }, 500);
        }
      }
    }
  }, [data]);

  useEffect(() => {
    if (router?.query) {
      if (router.query?.payment_intent) {
        setUseForFuturePayment(false);
        setPaymentIntentId(router.query.payment_intent);
      } else if (router.query?.setup_intent) {
        setUseForFuturePayment(true);
        setPaymentIntentId(router.query.setup_intent);
      }
    }
  }, [router]);

  useEffect(() => {
    if (paymentIntentId) {
      dispatch(isLoading());
      setSendRetrievePaymentReq(true);
    }
  }, [paymentIntentId]);

  return (
    <>
      <Div type="flex" hAlign="center" vAlign="center" className="flex--gr--1">
        {isProcessingPayment && (
          <Div className="p2 br-rad-px-10 boxShadowType1">Processing Payment ...</Div>
        )}
        {isConfirmingOrder && (
          <Div className="p2 br-rad-px-10 boxShadowType1">Confirming Order ...</Div>
        )}
      </Div>
    </>
  );
};

export default PaymentCompleted;
