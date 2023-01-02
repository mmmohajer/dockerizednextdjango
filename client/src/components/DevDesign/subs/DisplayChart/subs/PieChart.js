import React, { useMemo } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Chart from '@/baseComponents/Chart';

import { PIE_CHART_DATA } from '../utils';
import styles from '../../../DevDesign.module.scss';

const DATA_LABEL_FORMATER = (value, ctx) => {
  const curLabel = ctx.chart.data.labels[ctx.dataIndex];
  let sum = 0;
  let dataArr = ctx.chart.data.datasets[0].data;
  dataArr.map((data) => {
    sum += data;
  });
  let percentage = ((value * 100) / sum).toFixed(2) + '%';
  return `${curLabel}: ${percentage}`;
};

const PieChart = () => {
  const data = useMemo(() => {
    if (PIE_CHART_DATA) {
      const labels = [];
      const percentages = [];
      PIE_CHART_DATA.forEach((d) => {
        labels.push(d['Zone']);
        percentages.push(d['PopulationPercentage']);
      });
      const localData = {
        labels: labels,
        datasets: [
          {
            label: '% of population',
            data: percentages,
            borderColor: ['red', 'green', 'blue', 'yellow', 'purple'],
            backgroundColor: ['red', 'green', 'blue', 'yellow', 'purple'],
            borderWidth: 1
          }
        ]
      };
      return localData;
    }
  }, [PIE_CHART_DATA]);
  return (
    <>
      <Chart
        type="pie"
        data={data}
        showLegend={true}
        titleText="Pie Chart"
        showDataLabel={true}
        dataLabelFormatter={DATA_LABEL_FORMATER}
      />
    </>
  );
};

export default PieChart;
