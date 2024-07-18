import axios from 'axios';

interface Subscription {
  id: number;
  platformName: string;
  paymentDate: string;
}

export const getSubscriptionList = async (): Promise<Subscription[]> => {
  try {
    const response = await axios.get<Subscription[]>('/api/subscriptions');
    return response.data;
  } catch (error) {
    console.error('구독 목록을 가져오는데 실패했습니다:', error);
    return [];
  }
};
