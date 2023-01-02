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
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Div } from 'basedesign-iswad';

import styles from '../Chart.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const LineChart = ({
  data,
  showLegend = true,
  showTitle = true,
  titleText = '',
  yAxisOptions = {},
  xAxisOptions = {},
  showDataLabels = true
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
