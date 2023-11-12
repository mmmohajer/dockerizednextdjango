import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';
import StripeTokenizeCharge from '@/baseComponents/StripeTokenizeCharge';
import StripeCustomerActivePayments from '@/baseComponents/StripeCustomerActivePayments';

import styles from './PaymentMethod.module.scss';

const PaymentMethod = ({
  btnTitle,
  onBtnClick,
  isDisabled,
  isCenteralized = false,
  showActivePaymentTitle = true,
  showTopBorder = true,
  showBottomBorder = true,
  showCta = true
}) => {
  const [showNewPaymentForm, setShowNewPaymentForm] = useState(false);
  const [numberOfPaymentMethods, setNumberOfPaymentMethods] = useState(0);

  return (
    <>
      {showTopBorder && <Div className="w-per-100 bgGrayDark height-px-5 mb2" />}
      {!showNewPaymentForm ? (
        <Div>
          <Div className="w-per-100">
            <StripeCustomerActivePayments
              setNumberOfPaymentMethods={setNumberOfPaymentMethods}
              isCenteralized={isCenteralized}
              showTitle={showActivePaymentTitle}
            />
          </Div>
          <Div
            type="flex"
            hAlign={isCenteralized ? 'center' : 'start'}
            className="fs-px-12 textThemeOne text-underline mb2">
            <Div className="mouse-hand" onClick={() => setShowNewPaymentForm(true)}>
              Add a new payment method
            </Div>
          </Div>
          {showBottomBorder && <Div className="w-per-100 bgGrayDark height-px-5 mb2" />}
          {showCta && (
            <Div type="flex" hAlign={isCenteralized ? 'center' : 'start'} className="">
              <Button
                className="w-px-200"
                btnType={2}
                onClick={onBtnClick}
                isDisabled={isDisabled || numberOfPaymentMethods <= 0}>
                {btnTitle}
              </Button>
            </Div>
          )}
        </Div>
      ) : (
        <Div className="w-per-100">
          <StripeTokenizeCharge
            cardAddedFunc={() => setShowNewPaymentForm(false)}
            onCancelClick={() => setShowNewPaymentForm(false)}
            isCenteralized={isCenteralized}
          />
        </Div>
      )}
    </>
  );
};

export default PaymentMethod;
