import React from 'react';
import cx from 'classnames';
import { Div, Table as BaseTable } from 'basedesign-iswad';

import Pagination from '@/baseComponents/Pagination';
import SortIcon from './subs/SortIcon';
import Search from './subs/Search';
import SelectableComp from './subs/SelectableComp';

import styles from './Table.module.scss';

const Table = ({ ...props }) => {
  const paginationComponent = (props) => <Pagination {...props} />;
  const sortIcon = (props) => <SortIcon {...props} />;
  const search = (props) => <Search {...props} />;
  const selectableComp = (props) => <SelectableComp {...props} />;
  return (
    <>
      <BaseTable
        showDefaultPagination={false}
        paginationComponent={paginationComponent}
        showDefaultSortIcon={false}
        sortIcon={sortIcon}
        search={search}
        showDefaultSelectable={false}
        selectableComp={selectableComp}
        selectableColWidth={40}
        selectableHeaderClassName={cx(styles.selectable)}
        selectableRowClassName={cx(styles.selectable)}
        {...props}
      />
    </>
  );
};

export default Table;
