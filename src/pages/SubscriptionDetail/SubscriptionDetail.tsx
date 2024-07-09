import React, { useState, useEffect } from 'react';
import * as S from './SubscriptionDetail.Style';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ottOptions, dateOptions } from '../../constants/constants';

interface SubscriptionData {
  ottName: string;
  customName: string;
  plan: string;
  paymentAmount: number;
  paymentDate: number;
  memo: string;
  imgURL: string;
}

const SubscriptionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState<SubscriptionData | null>(
    null,
  );
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState<SubscriptionData>({
    ottName: '',
    customName: '',
    plan: '',
    paymentAmount: 0,
    paymentDate: 1,
    memo: '',
    imgURL: '',
  });

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/subscriptions/${id}`, //백엔드 경로 수정 필요
        );
        setSubscription(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('구독 정보를 불러오는 중 오류 발생:', error);
      }
    };
    fetchSubscription();
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/subscriptions/${id}`) //백엔드 경로 수정 필요
      .then(() => {
        toast.success('삭제되었어요!');
        setTimeout(() => {
          navigate('/main');
        }, 2000); // 2초 후에 메인 화면으로 이동
      })
      .catch((error) =>
        console.error('구독 정보를 삭제하는 중 오류 발생:', error),
      );
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:3000/subscriptions/${id}`, formData) //백엔드 경로 수정 필요
      .then((response) => {
        setSubscription(response.data);
        setEditing(false);
        toast.success('저장되었어요!');
      })
      .catch((error) =>
        console.error('구독 정보를 업데이트하는 중 오류 발생:', error),
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOttNameChange = (ottName: string) => {
    const ott = ottOptions.find((option) => option.name === ottName);
    if (ott) {
      const imgURL = ott.imgURL;
      setFormData({
        ...formData,
        ottName: ottName,
        imgURL: imgURL,
      });
    }
  };

  useEffect(() => {
    if (formData.ottName) {
      handleOttNameChange(formData.ottName);
    }
  }, [formData.ottName]);

  return (
    <S.Container>
      {subscription && (
        <>
          <S.Image src={subscription.imgURL} alt={subscription.ottName} />

          <S.Text>{subscription.ottName}</S.Text>

          <S.Label>이름</S.Label>
          {editing ? (
            <S.Input
              name="customName"
              value={formData.customName}
              onChange={handleChange}
            />
          ) : (
            <S.Text>{subscription.customName}</S.Text>
          )}

          <S.Label>요금제</S.Label>
          {editing ? (
            <S.Select
              name="ottName"
              value={formData.ottName}
              onChange={handleChange}
            >
              {ottOptions.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>
              ))}
            </S.Select>
          ) : (
            <S.Text>{subscription.plan}</S.Text>
          )}

          <S.Label>결제 금액</S.Label>
          {editing ? (
            <S.Input
              type="number"
              name="paymentAmount"
              value={formData.paymentAmount}
              onChange={handleChange}
            />
          ) : (
            <S.Text>{subscription.paymentAmount}원</S.Text>
          )}

          <S.Label>결제일</S.Label>
          {editing ? (
            <S.Select
              name="paymentDate"
              value={formData.paymentDate}
              onChange={handleChange}
            >
              {dateOptions.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </S.Select>
          ) : (
            <S.Text>{subscription.paymentDate}</S.Text>
          )}

          <S.Label>메모</S.Label>
          {editing ? (
            <S.Input
              name="memo"
              value={formData.memo}
              onChange={handleChange}
            />
          ) : (
            <S.Text>{subscription.memo}</S.Text>
          )}

          <S.ButtonContainer>
            {editing ? (
              <S.Button onClick={handleSave}>저장하기</S.Button>
            ) : (
              <S.Button onClick={() => setEditing(true)}>수정하기</S.Button>
            )}
            {!editing && <S.Button onClick={handleDelete}>삭제하기</S.Button>}
          </S.ButtonContainer>
        </>
      )}
    </S.Container>
  );
};

export default SubscriptionDetail;
