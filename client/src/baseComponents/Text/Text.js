import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Text as BaseText } from 'basedesign-iswad';

import styles from './Text.module.scss';

const Text = ({ textMessage, className, summerized_max_length = 100, ...props }) => {
  const [curText, setCurText] = useState('');
  const [showAbstractText, setshowAbstractText] = useState(true);
  const [displayShowMore, setDisplayShowMore] = useState(false);
  const [displayShowLess, setDisplayShowLess] = useState(false);
  const [noNeedToAbstract, setNoNeedToAbstract] = useState(false);

  useEffect(() => {
    setCurText('');
    setshowAbstractText(true);
    setDisplayShowMore(false);
    setDisplayShowLess(false);
    setNoNeedToAbstract(false);
  }, [textMessage]);

  useEffect(() => {
    if (textMessage?.length <= summerized_max_length) {
      setNoNeedToAbstract(true);
    } else {
      if (textMessage?.length > summerized_max_length) {
        setDisplayShowMore(true);
      }

      if (textMessage?.length > summerized_max_length && showAbstractText) {
        setCurText(textMessage.slice(0, summerized_max_length));
      }

      if (!showAbstractText) {
        setCurText(textMessage.slice(0));
      }
    }
  }, [textMessage, showAbstractText]);

  return (
    <>
      {displayShowMore && showAbstractText ? (
        <Div className={cx(styles.text, className)} {...props}>
          {curText}
          <BaseText
            className="mouse-hand fs-px-12"
            onClick={() => {
              setshowAbstractText(false);
              setDisplayShowLess(true);
              setDisplayShowMore(false);
            }}>
            {'(+)'}
          </BaseText>
        </Div>
      ) : (
        ''
      )}
      {displayShowLess && !showAbstractText ? (
        <Div className={cx(styles.text, className)} {...props}>
          {curText}
          <BaseText
            className="mouse-hand fs-px-12"
            onClick={() => {
              setshowAbstractText(true);
              setDisplayShowLess(false);
              setDisplayShowMore(true);
            }}>
            {'(-)'}
          </BaseText>
        </Div>
      ) : (
        ''
      )}
      {noNeedToAbstract && <BaseText>{textMessage}</BaseText>}
    </>
  );
};

export default Text;
