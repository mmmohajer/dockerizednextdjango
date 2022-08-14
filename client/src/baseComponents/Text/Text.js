import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Text as BaseText } from 'basedesign-iswad';

import styles from './Text.module.scss';

const Text = ({ children, className, summerized_max_length = 100, ...props }) => {
  const [cutText, setCurText] = useState('');
  const [showAbstractText, setshowAbstractText] = useState(true);
  const [displayShowMore, setDisplayShowMore] = useState(false);
  const [displayShowLess, setDisplayShowLess] = useState(false);
  const [noNeedToAbstract, setNoNeedToAbstract] = useState(false);

  useEffect(() => {
    if (children?.length <= summerized_max_length) {
      setNoNeedToAbstract(true);
    } else {
      if (children?.length > summerized_max_length) {
        setDisplayShowMore(true);
      }

      if (children?.length > summerized_max_length && showAbstractText) {
        setCurText(children.slice(0, summerized_max_length));
      }

      if (!showAbstractText) {
        setCurText(children.slice(0));
      }
    }
  }, [children, showAbstractText]);

  return (
    <>
      {displayShowMore && showAbstractText ? (
        <Div>
          {cutText}
          <BaseText
            className="mouse-hand"
            onClick={() => {
              setshowAbstractText(false);
              setDisplayShowLess(true);
              setDisplayShowMore(false);
            }}>
            (...)
          </BaseText>
        </Div>
      ) : (
        ''
      )}
      {displayShowLess && !showAbstractText ? (
        <Div>
          {cutText}
          <BaseText
            className="mouse-hand"
            onClick={() => {
              setshowAbstractText(true);
              setDisplayShowLess(false);
              setDisplayShowMore(true);
            }}>
            (-)
          </BaseText>
        </Div>
      ) : (
        ''
      )}
      {noNeedToAbstract && children}
    </>
  );
};

export default Text;
