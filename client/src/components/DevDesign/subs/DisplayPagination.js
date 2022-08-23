import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Pagination from '@/baseComponents/Pagination';

import styles from '../DevDesign.module.scss';

function DisplayPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <Div>Content of page {currentPage}</Div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberOfTotalPages={15}
        />
      </Div>
    </>
  );
}

export default DisplayPagination;
