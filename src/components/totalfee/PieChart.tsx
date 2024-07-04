import React from 'react';
import { Pie } from 'react-chartjs-2';
import * as S from './PieChart.Style';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const data = {
    labels: ['Netflix', 'Disney+', 'Wavve'],
    datasets: [
      {
        data: [9500, 7900, 10900],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 12,
          font: {
            size: 12,
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
