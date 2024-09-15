// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import * as S from './PieChart.Style';
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

// const PieChart: React.FC = () => {
//   const data: ChartData<'pie', number[], string> = {
//     labels: ['Netflix', 'Disney+', 'Wavve'],
//     datasets: [
//       {
//         data: [9500, 7900, 10900],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
//             const datasets = chart.data.datasets[0];
//             if (!datasets) {
//               return [];
//             }
//             const total = datasets.data.reduce((sum, val) => {
//               return sum + (typeof val === 'number' ? val : 0);
//             }, 0);
//             return (
//               chart.data.labels?.map((label, i) => {
//                 const value = datasets.data[i];
//                 if (typeof value === 'number') {
//                   const percentage = ((value / total) * 100).toFixed(2);
//                   return {
//                     text: `${label}: ${value}원 (${percentage}%)`,
//                     fillStyle: Array.isArray(datasets.backgroundColor)
//                       ? datasets.backgroundColor[i]
//                       : '',
//                     hidden: false,
//                     index: i,
//                   };
//                 }
//                 return {
//                   text: `${label}: $0 (0%)`,
//                   fillStyle: '',
//                   hidden: true,
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
//             return `${label}: $${value}`;
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
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
//             const datasets = chart.data.datasets[0];
//             if (!datasets) {
//               return [];
//             }
//             const total = datasets.data.reduce((sum, val) => {
//               return sum + (typeof val === 'number' ? val : 0);
//             }, 0);
//             return (
//               chart.data.labels?.map((label, i) => {
//                 const value = datasets.data[i];
//                 if (typeof value === 'number') {
//                   const percentage = ((value / total) * 100).toFixed(2);
//                   return {
//                     text: `${label}: ${value}원 (${percentage}%)`,
//                     fillStyle: Array.isArray(datasets.backgroundColor)
//                       ? datasets.backgroundColor[i]
//                       : '',
//                     hidden: false,
//                     index: i,
//                   };
//                 }
//                 return {
//                   text: `${label}: 0원 (0%)`,
//                   fillStyle: '',
//                   hidden: true,
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

// interface Subscription {
//   id: number;
//   name: string;
//   payment: number;
//   memo: string;
//   paymentDate: number;
//   userId: number;
//   ott?: {
//     id: number;
//     name: string;
//     ratePlan: string;
//     price: number;
//     image: string;
//     createdDate: string;
//     modifiedDate: string;
//   };
//   createdDate: string;
//   modifiedDate: string;
// }

// const generateColors = (count: number): string[] => {
//   // ... (같은 코드 유지)
// };

// const PieChart = () => {
//   const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
//   const [totalPayment, setTotalPayment] = useState<number>(0);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         // Assuming we have multiple subscription IDs to fetch
//         const subscriptionIds = [1, 2, 3]; // Replace with actual IDs
//         const subscriptionPromises = subscriptionIds.map((id) =>
//           axios.get<Subscription>(`/api/subscription/${id}`),
//         );

//         const responses = await Promise.all(subscriptionPromises);
//         const fetchedSubscriptions = responses.map((response) => response.data);

//         setSubscriptions(fetchedSubscriptions);
//         setTotalPayment(
//           fetchedSubscriptions.reduce((sum, sub) => sum + sub.payment, 0),
//         );
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (subscriptions.length === 0) {
//     return <div>No subscription data available.</div>;
//   }

//   const data: ChartData<'pie', number[], string> = {
//     labels: subscriptions.map((sub) => sub.ott?.name || sub.name),
//     datasets: [
//       {
//         data: subscriptions.map((sub) => sub.payment),
//         backgroundColor: generateColors(subscriptions.length),
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
//             return subscriptions.map((sub, i) => {
//               const percentage = ((sub.payment / totalPayment) * 100).toFixed(
//                 2,
//               );
//               return {
//                 text: `${sub.ott?.name || sub.name}: ${sub.payment}원 (${percentage}%)`,
//                 fillStyle: Array.isArray(chart.data.datasets[0].backgroundColor)
//                   ? chart.data.datasets[0].backgroundColor[i]
//                   : undefined,
//                 hidden: false,
//                 index: i,
//               };
//             });
//           },
//         },
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context: TooltipItem<'pie'>) {
//             const label = context.label || '';
//             const value = context.raw as number;
//             const percentage = ((value / totalPayment) * 100).toFixed(2);
//             return `${label}: ${value}원 (${percentage}%)`;
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

import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import * as S from './PieChart.Style';
import axiosInstance from '../../libs/AxiosInstance'; // AxiosInstance로 통일
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

interface Subscription {
  id: number;
  name: string;
  payment: number;
  memo: string;
  paymentDate: number;
  userId: number;
  ott?: {
    id: number;
    name: string;
    ratePlan: string;
    price: number;
    image: string;
    createdDate: string;
    modifiedDate: string;
  };
  createdDate: string;
  modifiedDate: string;
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
      // 기본 색상을 모두 사용한 경우, 랜덤 색상 생성
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      colors.push(`rgb(${r}, ${g}, ${b})`);
    }
  }

  return colors;
};

const PieChart = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [totalPayment, setTotalPayment] = useState<number>(0); // totalPayment -> totalAmount로 변수명 통일
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        setIsLoading(true);

        // /api/subscription/user로부터 구독 데이터 가져오기
        const response = await axiosInstance.get('/api/subscription/user');
        const fetchedSubscriptions: Subscription[] = response.data;
        setSubscriptions(fetchedSubscriptions);
      } catch (error) {
        console.error('구독 데이터를 불러오는 중 오류 발생:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchTotalPayment = async () => {
      try {
        // /api/subscription/total-payment로부터 총 구독료 가져오기
        const response = await axiosInstance.get(
          '/api/subscription/total-payment',
        );
        setTotalPayment(response.data.totalPayment); // totalPayment -> totalAmount로 변수명 통일
      } catch (error) {
        console.error('총 구독료를 불러오는 중 오류 발생:', error);
      }
    };

    fetchSubscriptions();
    fetchTotalPayment();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (subscriptions.length === 0) {
    return <div>No subscription data available.</div>;
  }

  const data: ChartData<'pie', number[], string> = {
    labels: subscriptions.map((sub) => sub.ott?.name || sub.name),
    datasets: [
      {
        data: subscriptions.map((sub) => sub.payment),
        backgroundColor: generateColors(subscriptions.length),
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
            return subscriptions.map((sub, i) => {
              const percentage = ((sub.payment / totalPayment) * 100).toFixed(
                2,
              );
              return {
                text: `${sub.ott?.name || sub.name}: ${sub.payment}원 (${percentage}%)`,
                fillStyle: Array.isArray(chart.data.datasets[0].backgroundColor)
                  ? chart.data.datasets[0].backgroundColor[i]
                  : undefined,
                hidden: false,
                index: i,
              };
            });
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'pie'>) {
            const label = context.label || '';
            const value = context.raw as number;
            const percentage = ((value / totalPayment) * 100).toFixed(2);
            return `${label}: ${value}원 (${percentage}%)`;
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
