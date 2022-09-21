import React from 'react';
import cx from 'classnames';
import { Div, Pagination as BasePagination } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, setCurrentPage, numberOfTotalPages, ...props }) => {
  const firstPageComp = () => <Icon type="angleDoubleLeft" />;
  const lastPageComp = () => <Icon type="angleDoubleRight" />;
  const prevComp = () => <Icon type="angleLeft" scale={0.57} />;
  const nextComp = () => <Icon type="angleRight" scale={0.57} />;
  return (
    <>
      {numberOfTotalPages > 1 && (
        <BasePagination
          numberOfShownPages={5}
          numberOfTotalPages={numberOfTotalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          showDefaultFirstLastIcon={false}
          showDefaultPrevNextIcon={false}
          firstPageComp={firstPageComp}
          lastPageCome={lastPageComp}
          prevComp={prevComp}
          nextComp={nextComp}
          containerClassName={cx('')}
          itemClassName={cx('')}
          activeItemClassName={cx('')}
          {...props}
        />
      )}
    </>
  );
};

export default Pagination;
