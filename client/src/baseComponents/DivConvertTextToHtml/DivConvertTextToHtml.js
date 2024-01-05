import React from 'react';
import cx from 'classnames';
import DOMPurify from 'dompurify';
import { Div } from 'basedesign-iswad';

import styles from './DivConvertTextToHtml.module.scss';

const DivConvertTextToHtml = ({ text, ...props }) => {
  const sanitizedHTML = DOMPurify.sanitize(text);

  return (
    <>
      <Div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} {...props} />
    </>
  );
};

export default DivConvertTextToHtml;
