import React, { useState, useEffect } from 'react';
import * as S from './TotalSubscriptionFee.Style';
import axiosInstance from '../../libs/AxiosInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TotalSubscriptionFee: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const response = await axiosInstance.get(
          '/api/subscription/total-payment',
        );
        setTotalAmount(response.data.totalPayment);
      } catch (error) {
        toast.error('총 구독료를 불러올 수 없습니다');
      }
    };

    fetchTotalAmount();
  }, []);

  return (
    <S.TotalFeeContainer>
      <S.TotalFeeTitle>이번 달 총 구독료</S.TotalFeeTitle>
      <S.TotalFeeAmount>{totalAmount}원</S.TotalFeeAmount>
    </S.TotalFeeContainer>
  );
};

export default TotalSubscriptionFee;
