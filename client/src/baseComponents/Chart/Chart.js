import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import LineChart from './subs/LineChart';
import BarChart from './subs/BarChart';
import PieChart from './subs/PieChart';
import BubbleChart from './subs/BubbleChart';
import styles from './Chart.module.scss';

const Chart = ({ type = 'line', ...props }) => {
  return (
    <>
      <Div className="w-per-100">
        {type === 'line' && <LineChart {...props} />}
        {type === 'bar' && <BarChart {...props} />}
        {type === 'pie' && <PieChart {...props} />}
        {type === 'bubble' && <BubbleChart {...props} />}
      </Div>
    </>
  );
};

export default Chart;
