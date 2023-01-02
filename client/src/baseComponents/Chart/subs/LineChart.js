import React from 'react';
import cx from 'classnames';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Div } from 'basedesign-iswad';

import styles from '../Chart.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({
  data,
  showLegend = true,
  showTitle = true,
  titleText = '',
  yAxisOptions = {},
  xAxisOptions = {}
}) => {
  const options = {
    responsive: true,
    scales: {
      y: yAxisOptions,
      x: xAxisOptions
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
