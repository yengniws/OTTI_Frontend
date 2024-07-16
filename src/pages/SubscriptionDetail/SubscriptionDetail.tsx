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
          `http://localhost:3000/subscriptions/${id}`,
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
      .delete(`http://localhost:3000/subscriptions/${id}`)
      .then(() => {
        toast.success('삭제되었어요!');
        setTimeout(() => {
          navigate('/main');
        }, 2000);
      })
      .catch((error) =>
        console.error('구독 정보를 삭제하는 중 오류 발생:', error),
      );
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:3000/subscriptions/${id}`, {
        ...formData,
        paymentDate: formData.paymentDate,
      })
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
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === 'paymentDate' ? parseInt(value) : value,
    }));

    if (name === 'ottName') {
      handleOttNameChange(value);
    }
  };

  const handleOttNameChange = (ottName: string) => {
    const ott = ottOptions.find((option) => option.name === ottName);
    if (ott) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        imgURL: ott.imgURL,
      }));
    }
  };

  return (
    <S.Container>
      {subscription && (
        <>
          <S.Header>
            <S.Image src={formData.imgURL} alt={formData.ottName} />
            {editing ? (
              <S.SelectOttName
                name="ottName"
                value={formData.ottName}
                onChange={handleChange}
              >
                {ottOptions.map((option) => (
                  <option key={option.name} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </S.SelectOttName>
            ) : (
              <S.OttName>{subscription.ottName}</S.OttName>
            )}
          </S.Header>

          <S.Section>
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
          </S.Section>
          <S.Divider />

          <S.Section>
            <S.Label>요금제</S.Label>
            {editing ? (
              <S.Select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
              >
                {ottOptions
                  .find((option) => option.name === formData.ottName)
                  ?.plans.map((plan) => (
                    <option key={plan} value={plan}>
                      {plan}
                    </option>
                  ))}
              </S.Select>
            ) : (
              <S.Text>{subscription.plan}</S.Text>
            )}
          </S.Section>
          <S.Divider />

          <S.Section>
            <S.Label>결제 금액</S.Label>
            {editing ? (
              <S.Input
                name="paymentAmount"
                value={formData.paymentAmount}
                onChange={handleChange}
              />
            ) : (
              <S.Text>{subscription.paymentAmount}원</S.Text>
            )}
          </S.Section>
          <S.Divider />

          <S.Section>
            <S.Label>정기결제일</S.Label>
            {editing ? (
              <S.Select
                name="paymentDate"
                value={formData.paymentDate.toString()}
                onChange={handleChange}
              >
                {dateOptions.map((date) => (
                  <option key={date} value={date}>
                    {`${date}일`}
                  </option>
                ))}
              </S.Select>
            ) : (
              <S.Text>{`매월 ${subscription.paymentDate}일`}</S.Text>
            )}
          </S.Section>
          <S.Divider />

          <S.LabelMemo>메모</S.LabelMemo>
          {editing ? (
            <S.MemoBox>
              <S.InputMemo
                name="memo"
                value={formData.memo}
                onChange={handleChange}
              />
            </S.MemoBox>
          ) : (
            <S.MemoBox>
              <S.TextMemo>{subscription.memo}</S.TextMemo>
            </S.MemoBox>
          )}

          <S.ButtonContainer>
            {editing ? (
              <S.ButtonSave onClick={handleSave}>저장하기</S.ButtonSave>
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
