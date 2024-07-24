import axios from 'axios';

// 총 구독료
export const getTotalAmount = async () => {
  try {
    const response = await axios.get(
      '/http://localhost:3000/subscription/total',
    );
    return response.data.totalAmount;
  } catch (error) {
    console.error('N/A:', error);
    throw error;
  }
};

// 한 사람의 전체 구독 정보 조회
// /api/subscription/user/{userid}
export const getUserSubscription = async (userId: number) => {
  try {
    const response = await axios.get(`/api/subscription/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching subscription data:', error);
    throw error;
  }
};

// ott 추가
// /api/subscription
export const getSubscriptionData = async () => {
  try {
    const response = await axios.post('/api/subscription');
    return response.data;
  } catch (error) {
    console.error('Error fetching subscription data:', error);
    throw error;
  }
};

// 특정 ott 정보 조회
// /api/subscription/{subscriptionid}
export const getSubscriptionId = async () => {
  try {
    const response = await axios.post('/api/subscription/{subscriptionid}');
    return response.data;
  } catch (error) {
    console.error('Error fetching subscription data:', error);
    throw error;
  }
};
