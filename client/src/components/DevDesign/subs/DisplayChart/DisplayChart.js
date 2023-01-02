import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import SigleLabeledLineChart from './subs/SingleLabeledLineChart';
import SigleLineChart from './subs/SingleLineChart';
import AreaChart from './subs/AreaChart';
import MultiLineChart from './subs/MultiLineChart';
import DoubleYAxisChart from './subs/DoubleYAxisChart';
import BarChart from './subs/BarChart';
import StackedBarChart from './subs/StackedBarChart';
import PieChart from './subs/PieChart';
import LineAndBarChart from './subs/LineAndBarChart';
import BubbleChart from './subs/BubbleChart';
import styles from '../../DevDesign.module.scss';

const DisplayChart = () => {
  const [chartType, setChartType] = useState('');
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <Div type="flex" hAlign="center" vAlign="center" direction="vertical">
          <Button onClick={() => setChartType('singleLabeledLineChart')} className="w-px-300 mb1">
            Show Labeled Line Chart
          </Button>
          <Button className="w-px-300 mb1" onClick={() => setChartType('singleLineChart')}>
            Show Line Chart
          </Button>
          <Button className="w-px-300 mb1" onClick={() => setChartType('areaChart')}>
            Show Area Chart
          </Button>
          <Button className="w-px-300 mb1" onClick={() => setChartType('multiLineChart')}>
            Show Multi Dataset Chart
          </Button>
          <Button className="w-px-300 mb1" onClick={() => setChartType('doubleYAxisChart')}>
            Show DoubleYAxis Chart
          </Button>
          <Button className="w-px-300 mb1" onClick={() => setChartType('barChart')}>
            Show Bar Chart
          </Button>
          <Button className="w-px-300 mb1" onClick={() => setChartType('stackedBarChart')}>
            Show Stacked Bar Chart
          </Button>
          <Button className="w-px-300 mb1" onClick={() => setChartType('pieChart')}>
            Show Pie Chart
          </Button>
          <Button className="w-px-300 mb1" onClick={() => setChartType('lineAndBarChart')}>
            Show Combination of Line and Bar Chart
          </Button>
          <Button className="w-px-300 mb1" onClick={() => setChartType('bubbleChart')}>
            Show Bubble Chart
          </Button>
        </Div>

        {chartType === 'singleLabeledLineChart' && <SigleLabeledLineChart />}
        {chartType === 'singleLineChart' && <SigleLineChart />}
        {chartType === 'areaChart' && <AreaChart />}
        {chartType === 'multiLineChart' && <MultiLineChart />}
        {chartType === 'doubleYAxisChart' && <DoubleYAxisChart />}
        {chartType === 'barChart' && <BarChart />}
        {chartType === 'stackedBarChart' && <StackedBarChart />}
        {chartType === 'pieChart' && <PieChart />}
        {chartType === 'lineAndBarChart' && <LineAndBarChart />}
        {chartType === 'bubbleChart' && <BubbleChart />}
      </Div>
    </>
  );
};

export default DisplayChart;
