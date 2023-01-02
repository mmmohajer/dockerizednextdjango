import React, { useMemo } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Chart from '@/baseComponents/Chart';

import { BUBBLE_CHART_DATA } from '../utils';
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
    drawOnChartArea: false,
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
    drawOnChartArea: false,
    color: 'black'
  }
};

const BubbleChart = () => {
  const data = useMemo(() => {
    if (BUBBLE_CHART_DATA) {
      const localData = {
        datasets: [
          {
            label: '',
            data: BUBBLE_CHART_DATA,
            borderColor: 'red',
            backgroundColor: 'yellow'
          }
        ]
      };
      return localData;
    }
  }, [BUBBLE_CHART_DATA]);
  return (
    <>
      <Chart
        type="bubble"
        data={data}
        showLegend={false}
        titleText="Bubble Chart"
        yAxisOptions={Y_AXIS_OPTIONS}
        xAxisOptions={X_AXIS_OPTIONS}
        pointBorderWidth={2}
      />
    </>
  );
};

export default BubbleChart;
