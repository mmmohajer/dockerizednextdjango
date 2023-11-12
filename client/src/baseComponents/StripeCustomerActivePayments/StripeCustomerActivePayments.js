import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import RadioButton from '@/baseComponents/RadioButton';
import Icon from '@/baseComponents/Icon';

import { STRIPE_CUSTOMER_SOURCE_HANDLER } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import { addAlertItem } from '@/utils/notifications';

import styles from './StripeCustomerActivePayments.module.scss';

const StripeCustomerActivePayments = ({
  setNumberOfPaymentMethods,
  isCenteralized = false,
  showTitle = true
}) => {
  const dispatch = useDispatch();

  const [activeSources, setActiveSources] = useState([]);
  const [defaultSource, setDefaultSource] = useState();
  const [changeDefault, setChangeDefault] = useState(false);
  const [deletedSourceId, setDeletedSourceId] = useState('');

  const [sendGetActiveSourcesReq, setSendGetActiveSourcesReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: sendGetActiveSourcesReq,
    setSendReq: setSendGetActiveSourcesReq,
    method: 'GET',
    url: STRIPE_CUSTOMER_SOURCE_HANDLER,
    showErrorMessage: false
  });
  useEffect(() => {
    if (data) {
      if (data?.active_sources?.data) {
        setActiveSources(data.active_sources.data);
        if (setNumberOfPaymentMethods) {
          if (data.active_sources.data?.length) {
            setNumberOfPaymentMethods(data.active_sources.data.length);
          } else {
            setNumberOfPaymentMethods(0);
          }
        }
      }
      if (data?.default_source) {
        setDefaultSource(data.default_source);
      }
    }
  }, [data]);

  const [sendPostActiveSourcesReq, setSendPostActiveSourcesReq] = useState(false);
  const { data: postData, error: postError } = useApiCalls({
    sendReq: sendPostActiveSourcesReq,
    setSendReq: setSendPostActiveSourcesReq,
    method: 'POST',
    url: STRIPE_CUSTOMER_SOURCE_HANDLER,
    bodyData: { default_source_id: defaultSource }
  });
  useEffect(() => {
    if (postData) {
      addAlertItem(dispatch, 'Your default payment option successfully updated.', 'success');
    }
  }, [postData]);

  useEffect(() => {
    setSendGetActiveSourcesReq(true);
  }, []);

  useEffect(() => {
    if (defaultSource && changeDefault) {
      setSendPostActiveSourcesReq(true);
    }
  }, [defaultSource, changeDefault]);

  // ----------------------
  const [sendDeleteActiveSourcesReq, setSendDeleteActiveSourcesReq] = useState(false);
  const { data: deleteData, error: deleteError } = useApiCalls({
    sendReq: sendDeleteActiveSourcesReq,
    setSendReq: setSendDeleteActiveSourcesReq,
    method: 'DELETE',
    url: `${STRIPE_CUSTOMER_SOURCE_HANDLER}?source_id=${deletedSourceId}`
  });
  useEffect(() => {
    if (deleteData?.success) {
      setSendGetActiveSourcesReq(true);
      addAlertItem(dispatch, 'Your payment method successfully deleted.', 'success');
    }
  }, [deleteData]);

  useEffect(() => {
    if (deletedSourceId) {
      setSendDeleteActiveSourcesReq(true);
    }
  }, [deletedSourceId]);
  // ----------------------

  return (
    <>
      <Div type="flex" direction="vertical" hAlign="center" vAlign="center" className="w-per-100">
        {showTitle && (
          <Div className={cx('w-per-100 mb2', isCenteralized && 'text-center')}>
            Active Payments
          </Div>
        )}
        {activeSources?.map((item, idx) => (
          <Div
            key={idx}
            type="flex"
            vAlign="center"
            hAlign={isCenteralized ? 'center' : 'start'}
            className={cx('w-per-100 br-rad-px-5 mb2 mouse-hand')}>
            <Div type="flex" vAlign="center" className="mr1">
              <RadioButton
                selected={defaultSource === item.id}
                className={''}
                labelText={''}
                hasDefaultClass={false}
                onRadioButtonClick={() => {
                  if (defaultSource !== item.id) {
                    setDefaultSource(item.id);
                    setChangeDefault(true);
                  }
                }}
              />
            </Div>
            <Div
              type="flex"
              distributedBetween
              className={cx('w-px-200 bgRed p1 bgWhite boxShadowType1')}>
              <Div>{item.brand}</Div>
              <Div>
                {item.exp_month}-{item.exp_year}
              </Div>
              <Div>{item.last4}</Div>
            </Div>

            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className="w-px-30 height-px-30 ml1 mouse-hand"
              onClick={() => setDeletedSourceId(item.id)}>
              <Icon type="trash" color={'red'} scale={1.2} />
            </Div>
          </Div>
        ))}
      </Div>
    </>
  );
};

export default StripeCustomerActivePayments;
