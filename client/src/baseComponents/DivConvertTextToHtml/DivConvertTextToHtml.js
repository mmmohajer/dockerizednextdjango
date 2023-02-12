import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './DivConvertTextToHtml.module.scss';

const DivConvertTextToHtml = ({ text, ...props }) => {
  return (
    <>
      <Div dangerouslySetInnerHTML={{ __html: text }} {...props} />
    </>
  );
};

export default DivConvertTextToHtml;
