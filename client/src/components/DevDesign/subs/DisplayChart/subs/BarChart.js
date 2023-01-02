import React, { useMemo } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Chart from '@/baseComponents/Chart';

import { BAR_CHART_DATA } from '../utils';
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
  },
  stacked: false
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
  },
  stacked: false
};

const BarChart = () => {
  const data = useMemo(() => {
    if (BAR_CHART_DATA) {
      const x = [];
      const y1 = [];
      const y2 = [];
      BAR_CHART_DATA.forEach((d) => {
        x.push(d['x']);
        y1.push(d['y1']);
        y2.push(d['y2']);
      });
      const localData = {
        labels: x,
        datasets: [
          {
            label: 'Quadratic Curve',
            data: y1,
            borderColor: 'red',
            backgroundColor: 'yellow'
          },
          {
            label: 'Linear Curve',
            data: y2,
            borderColor: 'blue',
            backgroundColor: 'green'
          }
        ]
      };
      return localData;
    }
  }, [BAR_CHART_DATA]);
  return (
    <>
      <Chart
        type="bar"
        data={data}
        showLegend={true}
        titleText="Bar Chart"
        yAxisOptions={Y_AXIS_OPTIONS}
        xAxisOptions={X_AXIS_OPTIONS}
        showDataLabels={false}
        barBorderWidth={2}
        indexAxis="x"
      />
    </>
  );
};

export default BarChart;
