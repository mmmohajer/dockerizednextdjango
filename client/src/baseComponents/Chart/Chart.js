import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import LineChart from './subs/LineChart';
import BarChart from './subs/BarChart';
import styles from './Chart.module.scss';

const Chart = ({ type = 'line', ...props }) => {
  return (
    <>
      <Div className="w-per-100">
        {type === 'line' && <LineChart {...props} />}
        {type === 'bar' && <BarChart {...props} />}
      </Div>
    </>
  );
};

export default Chart;
