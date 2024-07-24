import axios from 'axios';

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
