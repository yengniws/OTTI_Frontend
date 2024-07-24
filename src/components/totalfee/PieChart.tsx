// 깡코드
// import React, { useState, useEffect } from 'react';
// import { Pie } from 'react-chartjs-2';
// import * as S from './PieChart.Style';
// import axios from 'axios';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   ChartData,
//   ChartOptions,
//   TooltipItem,
// } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// interface SubscriptionData {
//   label: string;
//   value: number;
// }

// // 동적으로 색상을 생성
// const generateColors = (count: number): string[] => {
//   const baseColors = [
//     '#FF6384',
//     '#36A2EB',
//     '#FFCE56',
//     '#4BC0C0',
//     '#9966FF',
//     '#FF9F40',
//   ];
//   const colors: string[] = [];

//   for (let i = 0; i < count; i++) {
//     if (i < baseColors.length) {
//       colors.push(baseColors[i]);
//     } else {
//       // 기본 색상을 모두 사용한 경우, 랜덤 색상 생성
//       const r = Math.floor(Math.random() * 255);
//       const g = Math.floor(Math.random() * 255);
//       const b = Math.floor(Math.random() * 255);
//       colors.push(`rgb(${r}, ${g}, ${b})`);
//     }
//   }

//   return colors;
// };

// const PieChart = () => {
//   const [subscriptionData, setSubscriptionData] = useState<SubscriptionData[]>(
//     [],
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post('/api/subscription');
//         setSubscriptionData(response.data);
//       } catch (error) {
//         console.error('Error fetching subscription data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const data: ChartData<'pie', number[], string> = {
//     labels: subscriptionData.map((item) => item.label),
//     datasets: [
//       {
//         data: subscriptionData.map((item) => item.value),
//         backgroundColor: generateColors(subscriptionData.length),
//       },
//     ],
//   };

//   const options: ChartOptions<'pie'> = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'bottom',
//         align: 'start',
//         labels: {
//           boxWidth: 12,
//           padding: 20,
//           font: {
//             size: 12,
//           },
//           generateLabels: (chart) => {
//             const datasets = chart.data.datasets;
//             if (datasets.length === 0) {
//               return [];
//             }
//             const { data } = datasets[0];
//             const total = (data as number[]).reduce((sum, val) => sum + val, 0);

//             return (
//               chart.data.labels?.map((label, i) => {
//                 const value = data[i] as number;
//                 const percentage = ((value / total) * 100).toFixed(2);
//                 return {
//                   text: `${label}: ${value}원 (${percentage}%)`,
//                   fillStyle: Array.isArray(datasets[0].backgroundColor)
//                     ? datasets[0].backgroundColor[i]
//                     : undefined,
//                   hidden: false,
//                   index: i,
//                 };
//               }) || []
//             );
//           },
//         },
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context: TooltipItem<'pie'>) {
//             const label = context.label || '';
//             const value = context.raw as number;
//             return `${label}: ${value}원`;
//           },
//         },
//       },
//     },
//     layout: {
//       padding: {
//         top: 10,
//         bottom: 10,
//       },
//     },
//   };

//   return (
//     <S.ChartContainer>
//       <Pie data={data} options={options} />
//     </S.ChartContainer>
//   );
// };

// export default PieChart;

// api 활용 - 1
// import React, { useState, useEffect } from 'react';
// import { Pie } from 'react-chartjs-2';
// import * as S from './PieChart.Style';
// import { getUserSubscription } from '../../api/subscriptionApi';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   ChartData,
//   ChartOptions,
//   TooltipItem,
// } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// interface SubscriptionData {
//   label: string;
//   value: number;
// }

// // 동적으로 색상을 생성하는 함수
// const generateColors = (count: number): string[] => {
//   const baseColors = [
//     '#FF6384',
//     '#36A2EB',
//     '#FFCE56',
//     '#4BC0C0',
//     '#9966FF',
//     '#FF9F40',
//   ];
//   const colors: string[] = [];

//   for (let i = 0; i < count; i++) {
//     if (i < baseColors.length) {
//       colors.push(baseColors[i]);
//     } else {
//       const r = Math.floor(Math.random() * 255);
//       const g = Math.floor(Math.random() * 255);
//       const b = Math.floor(Math.random() * 255);
//       colors.push(`rgb(${r}, ${g}, ${b})`);
//     }
//   }

//   return colors;
// };

// const PieChart = () => {
//   const [subscriptionData, setSubscriptionData] = useState<SubscriptionData[]>(
//     [],
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // 깡 userid 설정
//         const userId = 1;
//         const data = await getUserSubscription(userId);
//         const formattedData = data.map((subscription: any) => ({
//           label: subscription.ott.name,
//           value: subscription.payment,
//         }));
//         setSubscriptionData(formattedData);
//       } catch (error) {
//         console.error('Error fetching subscription data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const data: ChartData<'pie', number[], string> = {
//     labels: subscriptionData.map((item) => item.label),
//     datasets: [
//       {
//         data: subscriptionData.map((item) => item.value),
//         backgroundColor: generateColors(subscriptionData.length),
//       },
//     ],
//   };

//   const options: ChartOptions<'pie'> = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'bottom',
//         align: 'start',
//         labels: {
//           boxWidth: 12,
//           padding: 20,
//           font: {
//             size: 12,
//           },
//           generateLabels: (chart) => {
//             const datasets = chart.data.datasets;
//             if (datasets.length === 0) {
//               return [];
//             }
//             const { data } = datasets[0];
//             const total = (data as number[]).reduce((sum, val) => sum + val, 0);

//             return (
//               chart.data.labels?.map((label, i) => {
//                 const value = data[i] as number;
//                 const percentage = ((value / total) * 100).toFixed(2);
//                 return {
//                   text: `${label}: ${value}원 (${percentage}%)`,
//                   fillStyle: Array.isArray(datasets[0].backgroundColor)
//                     ? datasets[0].backgroundColor[i]
//                     : undefined,
//                   hidden: false,
//                   index: i,
//                 };
//               }) || []
//             );
//           },
//         },
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context: TooltipItem<'pie'>) {
//             const label = context.label || '';
//             const value = context.raw as number;
//             return `${label}: ${value}원`;
//           },
//         },
//       },
//     },
//     layout: {
//       padding: {
//         top: 10,
//         bottom: 10,
//       },
//     },
//   };

//   return (
//     <S.ChartContainer>
//       <Pie data={data} options={options} />
//     </S.ChartContainer>
//   );
// };

// export default PieChart;

// api 활용 - 2: userid 로컬스토리지에서 가져옴
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import * as S from './PieChart.Style';
import { getUserSubscription } from '../../api/subscriptionApi';
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

interface SubscriptionData {
  label: string;
  value: number;
}

const generateColors = (count: number): string[] => {
  const baseColors = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
  ];
  const colors: string[] = [];

  for (let i = 0; i < count; i++) {
    if (i < baseColors.length) {
      colors.push(baseColors[i]);
    } else {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      colors.push(`rgb(${r}, ${g}, ${b})`);
    }
  }

  return colors;
};

const PieChart = () => {
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData[]>(
    [],
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Get user ID from local storage
        if (userId) {
          const data = await getUserSubscription(Number(userId));
          const formattedData = data.map((subscription: any) => ({
            label: subscription.ott.name,
            value: subscription.payment,
          }));
          setSubscriptionData(formattedData);
        }
      } catch (error) {
        console.error('Error fetching subscription data:', error);
      }
    };

    fetchData();
  }, []);

  const data: ChartData<'pie', number[], string> = {
    labels: subscriptionData.map((item) => item.label),
    datasets: [
      {
        data: subscriptionData.map((item) => item.value),
        backgroundColor: generateColors(subscriptionData.length),
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
            const datasets = chart.data.datasets;
            if (datasets.length === 0) {
              return [];
            }
            const { data } = datasets[0];
            const total = (data as number[]).reduce((sum, val) => sum + val, 0);

            return (
              chart.data.labels?.map((label, i) => {
                const value = data[i] as number;
                const percentage = ((value / total) * 100).toFixed(2);
                return {
                  text: `${label}: ${value}원 (${percentage}%)`,
                  fillStyle: Array.isArray(datasets[0].backgroundColor)
                    ? datasets[0].backgroundColor[i]
                    : undefined,
                  hidden: false,
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
            return `${label}: ${value}원`;
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
