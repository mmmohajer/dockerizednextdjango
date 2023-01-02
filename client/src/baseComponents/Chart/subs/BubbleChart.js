import React from 'react';
import cx from 'classnames';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Div } from 'basedesign-iswad';

import styles from '../Chart.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, ChartDataLabels);

const BubbleChart = ({
  data,
  showLegend = true,
  showTitle = true,
  titleText = '',
  yAxisOptions = {},
  xAxisOptions = {},
  y2AxisOptions = { display: false },
  showDataLabels = true,
  pointBorderWidth = 1
}) => {
  const options = {
    responsive: true,
    elements: {
      point: {
        borderWidth: pointBorderWidth
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
          right: 2,
          bottom: 20
        }
      }
    }
  };

  return (
    <>
      <Div>{data?.datasets?.length > 0 && <Bubble options={options} data={data} />}</Div>
    </>
  );
};

export default BubbleChart;
