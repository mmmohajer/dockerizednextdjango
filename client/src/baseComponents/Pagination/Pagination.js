import React from 'react';
import cx from 'classnames';
import { Div, Pagination as BasePagination } from 'basedesign-iswad';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <BasePagination
        numberOfShownPages={5}
        numberOfTotalPages={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        showFirstLastIcon={true}
        containerClassName={cx('')}
        itemClassName={cx('')}
        activeItemClassName={cx('')}
      />
    </>
  );
};

export default Pagination;
