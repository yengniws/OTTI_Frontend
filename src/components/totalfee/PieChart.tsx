import React from 'react';
import { Pie } from 'react-chartjs-2';
import * as S from './PieChart.Style';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  TooltipItem,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const data: ChartData<'pie', number[], string> = {
    labels: ['Netflix', 'Disney+', 'Wavve'],
    datasets: [
      {
        data: [9500, 7900, 10900],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start',
        labels: {
          boxWidth: 12,
          padding: 20,
          font: {
            size: 12,
          },
          generateLabels: (chart) => {
            const datasets = chart.data.datasets[0];
            if (!datasets) {
              return [];
            }
            const total = datasets.data.reduce((sum, val) => {
              return sum + (typeof val === 'number' ? val : 0);
            }, 0);
            return (
              chart.data.labels?.map((label, i) => {
                const value = datasets.data[i];
                if (typeof value === 'number') {
                  const percentage = ((value / total) * 100).toFixed(2);
                  return {
                    text: `${label}: ${value}원 (${percentage}%)`,
                    fillStyle: Array.isArray(datasets.backgroundColor)
                      ? datasets.backgroundColor[i]
                      : '',
                    hidden: false,
                    index: i,
                  };
                }
                return {
                  text: `${label}: $0 (0%)`,
                  fillStyle: '',
                  hidden: true,
                  index: i,
                };
              }) || []
            );
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'pie'>) {
            const label = context.label || '';
            const value = context.raw as number;
            return `${label}: $${value}`;
          },
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <S.ChartContainer>
      <Pie data={data} options={options} />
    </S.ChartContainer>
  );
};

export default PieChart;
