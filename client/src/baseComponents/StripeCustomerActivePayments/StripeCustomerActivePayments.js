import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { STRIPE_CUSTOMER_SOURCE_HANDLER } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import { addAlertItem } from '@/utils/notifications';

import styles from './StripeCustomerActivePayments.module.scss';

const StripeCustomerActivePayments = () => {
  const dispatch = useDispatch();

  const [activeSources, setActiveSources] = useState([]);
  const [defaultSource, setDefaultSource] = useState();
  const [changeDefault, setChangeDefault] = useState(false);

  const [sendGetActiveSourcesReq, setSendGetActiveSourcesReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: sendGetActiveSourcesReq,
    setSendReq: setSendGetActiveSourcesReq,
    method: 'GET',
    url: STRIPE_CUSTOMER_SOURCE_HANDLER
  });
  useEffect(() => {
    if (data) {
      if (data?.active_sources?.data) {
        setActiveSources(data.active_sources.data);
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

  return (
    <>
      <Div>
        {activeSources?.map((item, idx) => (
          <Div
            key={idx}
            type="flex"
            distributedBetween
            className={cx(
              'p2 w-per-100 max-w-px-500 br-rad-px-5 my2 textWhite mouse-hand',
              defaultSource === item.id ? 'bgSuccess' : 'bgPrimary'
            )}
            onClick={() => {
              setDefaultSource(item.id);
              setChangeDefault(true);
            }}>
            <Div>{item.brand}</Div>
            <Div>
              {item.exp_month}-{item.exp_year}
            </Div>
            <Div>{item.last4}</Div>
          </Div>
        ))}
      </Div>
    </>
  );
};

export default StripeCustomerActivePayments;
