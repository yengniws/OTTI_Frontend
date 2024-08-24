import axios from 'axios';

// 한 사람의 전체 구독 정보 조회
// /api/subscription/user/{userid}

interface Subscription {
  id: number;
  platformName: string;
  paymentDate: string;
}

// export const getSubscriptionList = async (): Promise<Subscription[]> => {
//   try {
//     const response = await axios.get<Subscription[]>('/api/subscriptions');
//     return response.data;
//   } catch (error) {
//     console.error('구독 목록을 가져오는데 실패했습니다:', error);
//     return [];
//   }
// };

export const getUserSubscription = async (userId: number) => {
  try {
    const response = await axios.get(`/api/subscription/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching subscription data:', error);
    throw error;
  }
};

// export const fetchSubscriptions = async () => {
//   try {
//     const response = await axiosInstance.get('/api/subscription/user');
//     setSubscriptions(response.data);
//   } catch (error) {
//     console.error('구독 정보 불러오기 오류:', error);
//   }
// };
