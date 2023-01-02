import React from 'react';
import cx from 'classnames';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Div } from 'basedesign-iswad';

import styles from '../Chart.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({
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
      <Div>{data?.labels && <Bar options={options} data={data} />}</Div>
    </>
  );
};

export default BarChart;
