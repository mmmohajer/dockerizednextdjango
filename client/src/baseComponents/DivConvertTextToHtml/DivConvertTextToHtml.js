import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import * as DOMPurify from 'dompurify';
import { Div } from 'basedesign-iswad';

import styles from './DivConvertTextToHtml.module.scss';

const DivConvertTextToHtml = ({ text, ...props }) => {
  const [sanitizedHtml, setSanitizedHtml] = useState('');
  useEffect(() => {
    if (text) {
      setSanitizedHtml(DOMPurify.sanitize(text));
    }
  }, [text]);

  return (
    <>
      <Div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} {...props} />
    </>
  );
};

export default DivConvertTextToHtml;
