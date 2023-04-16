import React from 'react';
import MOCK_DATA from './MOCK_DATA.json';

export const headLines = (Div, Search, setTableData, data, setCurrentPage) => [
  {
    value: 'first_name',
    display: 'First Name',
    width: 300,
    hasSearch: true,
    isSortable: true
  },
  {
    value: 'last_name',
    display: 'Last Name',
    width: 300,
    hasSearch: true,
    isSortable: true
  },
  {
    value: 'email',
    display: (
      <Div type="flex" vAlign="center">
        <Div>Email</Div>
        <Div>
          <Search
            onChange={(e) => {
              setCurrentPage(1);
              if (e.target.value) {
                setTableData(
                  data?.filter((d) =>
                    d?.email?.toLowerCase()?.includes(e.target.value.toLowerCase())
                  )
                );
              } else {
                setTableData(data);
              }
            }}
          />
        </Div>
      </Div>
    ),
    width: 300,
    hasSearch: false,
    isSortable: true
  },
  {
    value: 'gender',
    display: 'Gender',
    width: 300,
    hasSearch: true,
    isSortable: true
  },
  { value: 'ip_address', display: 'IP Address', width: 400, hasSearch: true }
];

export const data = MOCK_DATA;
