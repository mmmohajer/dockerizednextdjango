import React from 'react';
import cx from 'classnames';
import { Bar } from 'react-chartjs-2';
import { Div } from 'basedesign-iswad';

import styles from '../Chart.module.scss';

const BarChart = ({
  data,
  showLegend = true,
  showTitle = true,
  titleText = '',
  yAxisOptions = {},
  y2AxisOptions = { display: false },
  xAxisOptions = {},
  showDataLabels = true,
  barBorderWidth = 1,
  indexAxis = 'x',
  lineBorderWidth = 2,
  pointBorderWidth = 1,
  pointRadius = 4
}) => {
  const options = {
    responsive: true,
    indexAxis,
    elements: {
      line: {
        borderWidth: lineBorderWidth
      },
      point: {
        borderWidth: pointBorderWidth,
        radius: pointRadius
      },
      bar: {
        borderWidth: barBorderWidth
      }
    },
    scales: {
      y: yAxisOptions,
      x: xAxisOptions,
      y2: y2AxisOptions
    },
    plugins: {
      legend: {
        display: showLegend,
        position: 'top',
        labels: {
          font: {
            size: 12
          }
        }
      },
      title: {
        display: showTitle,
        text: titleText,
        font: {
          size: 14
        }
      },
      datalabels: {
        display: showDataLabels,
        align: 'center',
        padding: {
          right: 0
        }
      }
    }
  };

  return (
    <>
      <Div>{data?.labels && <Bar options={options} data={data} />}</Div>
    </>
  );
};

export default BarChart;
