import axios from 'axios';

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

export const getUserSubscriptions = async (userId: number) => {
  try {
    const response = await axios.get(
      `/http://localhost:3000/subscription/user/${userId}`,
    );
    return response.data;
  } catch (error) {
    console.error('N/A:', error);
    throw error;
  }
};
