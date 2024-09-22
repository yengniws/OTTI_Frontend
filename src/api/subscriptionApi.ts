import axios from 'axios';

interface Subscription {
  id: number;
  platformName: string;
  paymentDate: string;
}

export const getUserSubscription = async (userId: number) => {
  try {
    const response = await axios.get(`/api/subscription/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching subscription data:', error);
    throw error;
  }
};
