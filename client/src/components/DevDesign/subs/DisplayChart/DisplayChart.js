import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import SigleLabeledLineChart from './subs/SingleLabeledLineChart';
import SigleLineChart from './subs/SingleLineChart';
import MultiLineChart from './subs/MultiLineChart';
import BarChart from './subs/BarChart';
import StackedBarChart from './subs/StackedBarChart';
import PieChart from './subs/PieChart';
import styles from '../../DevDesign.module.scss';

const DisplayChart = () => {
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <SigleLabeledLineChart />
        <SigleLineChart />
        <MultiLineChart />
        <BarChart />
        <StackedBarChart />
        <PieChart />
      </Div>
    </>
  );
};

export default DisplayChart;
