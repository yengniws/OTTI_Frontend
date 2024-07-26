import axios from 'axios';

// 팟 신청 목록 조회
export const fetchApplications = async () => {
  const response = await axios.get('/pot/application');
  return response.data;
};

// 팟 신청 승인
export const approveApplication = async (id: number) => {
  await axios.post(`/pot/application/${id}/approve`);
};

// 팟 신청 거절
export const rejectApplication = async (id: number) => {
  await axios.post(`/pot/application/${id}/reject`);
};

// 새 알림 생성
export const createNotification = async (notificationData: any) => {
  await axios.post('/notification', notificationData);
};

// 모든 알림 조회
export const fetchAllNotifications = async () => {
  const response = await axios.get('/notification');
  return response.data;
};

// 특정 id 알림 조회
export const fetchNotificationById = async (id: number) => {
  const response = await axios.get(`/notification/${id}`);
  return response.data;
};

// ㅌㄱ정 id 알림 읽음 표시
export const markNotificationAsRead = async (id: number) => {
  await axios.post(`/notification/${id}/mark-as-read`);
};
