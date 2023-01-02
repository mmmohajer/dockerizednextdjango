import React from 'react';
import cx from 'classnames';
import { Line } from 'react-chartjs-2';
import { Div } from 'basedesign-iswad';

import styles from '../Chart.module.scss';

const LineChart = ({
  data,
  showLegend = true,
  showTitle = true,
  titleText = '',
  yAxisOptions = {},
  xAxisOptions = {},
  y2AxisOptions = { display: false },
  showDataLabels = true,
  lineBorderWidth = 2,
  pointBorderWidth = 1,
  pointRadius = 4
}) => {
  const options = {
    responsive: true,
    // For more information on how to style elements, visit this url:
    // https://www.chartjs.org/docs/latest/configuration/elements.html
    elements: {
      line: {
        borderWidth: lineBorderWidth
      },
      point: {
        borderWidth: pointBorderWidth,
        radius: pointRadius
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
        align: 'end',
        padding: {
          right: 2
        }
      }
    }
  };

  return (
    <>
      <Div>{data?.labels && <Line options={options} data={data} />}</Div>
    </>
  );
};

export default LineChart;
