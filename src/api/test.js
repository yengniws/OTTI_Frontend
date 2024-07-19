import axios from 'axios';

// 구독정보: get /api/subscription/{subscriptionid}
export const getSubscriptionById = async (subscriptionId) => {
  const response = await axios.get(`/api/subscription/${subscriptionId}`);
  return response.data;
};

// 구독 추가: post /api/subscription
export const addSubscription = async (data) => {
  const response = await axios.post('/api/subscription', data);
  return response.data;
};

// 구독 수정: put /api/subscription/subscription{id}
export const updateSubscription = async (id, data) => {
  const response = await axios.put(`/api/subscription/subscription${id}`, data);
  return response.data;
};

// 전체 구독 정보 조회: get /api/subscription/user/{userid}
export const getAllSubscriptions = async (userId) => {
  const response = await axios.get(`/api/subscription/user/${userId}`);
  return response.data;
};

// 총 구독료: ?
// export const getTotalSubscription = async () => {
//   const response = await axios.get('/api/totalSubscription');
//   return response.data;
// };
