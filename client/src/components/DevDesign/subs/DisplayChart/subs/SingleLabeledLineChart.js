import React, { useMemo } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Chart from '@/baseComponents/Chart';

import { SINGLE_LABELED_LINE_CHART_DATA } from '../utils';
import styles from '../../../DevDesign.module.scss';

const Y_AXIS_OPTIONS = {
  ticks: {
    callback: function (value, index, ticks) {
      return parseFloat(value).toFixed(2);
    },
    beginAtZero: true,
    color: 'purple'
  },
  title: {
    display: true,
    text: 'Average Fee',
    font: {
      size: 14
    }
  },
  grid: {
    display: true,
    drawTicks: true,
    drawOnChartArea: true,
    color: (context) => {
      if (context.tick.value >= 3) {
        return 'green';
      } else if (context.tick.value < 3) {
        return 'blue';
      }
      return 'black';
    }
  }
};

const X_AXIS_OPTIONS = {
  ticks: {
    beginAtZero: true,
    color: 'red'
  },
  title: {
    display: true,
    text: 'Date',
    font: {
      size: 14
    }
  },
  grid: {
    display: true,
    drawTicks: true,
    drawOnChartArea: true,
    color: 'black'
  }
};

const SigleLabeledLineChart = () => {
  const data = useMemo(() => {
    if (SINGLE_LABELED_LINE_CHART_DATA) {
      const x = [];
      const y = [];
      SINGLE_LABELED_LINE_CHART_DATA.forEach((d) => {
        x.push(d['x']);
        y.push(d['y']);
      });
      const localData = {
        labels: x,
        datasets: [
          {
            label: '',
            data: y,
            borderColor: 'red',
            backgroundColor: 'yellow'
          }
        ]
      };
      return localData;
    }
  }, [SINGLE_LABELED_LINE_CHART_DATA]);
  return (
    <>
      <Chart
        type="line"
        data={data}
        showLegend={false}
        titleText="Labeled Line Chart"
        yAxisOptions={Y_AXIS_OPTIONS}
        xAxisOptions={X_AXIS_OPTIONS}
        showDataLabels={false}
        lineBorderWidth={2}
        pointBorderWidth={1}
        pointRadius={4}
      />
    </>
  );
};

export default SigleLabeledLineChart;
