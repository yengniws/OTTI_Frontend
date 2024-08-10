import React, { useState, useEffect } from 'react';
import * as S from './SubscriptionDetail.Style';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ottOptions, dateOptions } from '../../constants/constants';
import axiosInstance from '../../libs/AxiosInstance';

interface SubscriptionData {
  ott_name: string;
  customName: string;
  rate_plan: string;
  price: number;
  payment_date: number;
  memo: string;
  ott_image: string;
}

const SubscriptionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState<SubscriptionData | null>(
    null,
  );
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState<SubscriptionData>({
    ott_name: '',
    customName: '',
    rate_plan: '',
    price: 0,
    payment_date: 1,
    memo: '',
    ott_image: '',
  });

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/subscription/{subscriptionid}`,
        );
        setSubscription(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('데이터 가져오는 중 에러:', error);
      }
    };
    fetchSubscription();
  }, [id]);

  const handleDelete = () => {
    axiosInstance
      .delete(`/api/subscription/{subscriptionid}`)
      .then(() => {
        toast.success('삭제 되었어요!');
        setTimeout(() => {
          navigate('/main');
        }, 2000);
      })
      .catch((error) => console.error('데이터 삭제 중 에러:', error));
  };

  const handleSave = () => {
    axiosInstance
      .put(`/api/subscription/{subscriptionid}`, {
        ...formData,
        payment_date: formData.payment_date,
      })
      .then((response) => {
        setSubscription(response.data);
        setEditing(false);
        toast.success('저장 되었어요!');
      })
      .catch((error) => console.error('데이터 업데이트 중 에러:', error));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        name === 'price' || name === 'payment_date' ? parseInt(value) : value,
    }));

    if (name === 'ott_name') {
      handleOttNameChange(value);
    }
  };

  const handleOttNameChange = (ott_name: string) => {
    const ott = ottOptions.find((option) => option.name === ott_name);
    if (ott) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ott_image: ott.imgURL,
      }));
    }
  };

  return (
    <S.Container>
      {subscription && (
        <>
          <S.Header>
            <S.Image src={formData.ott_image} alt={formData.ott_name} />
            {editing ? (
              <S.SelectOttName
                name="ott_name"
                value={formData.ott_name}
                onChange={handleChange}
              >
                {ottOptions.map((option) => (
                  <option key={option.name} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </S.SelectOttName>
            ) : (
              <S.OttName>{subscription.ott_name}</S.OttName>
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
                name="rate_plan"
                value={formData.rate_plan}
                onChange={handleChange}
              >
                {ottOptions
                  .find((option) => option.name === formData.ott_name)
                  ?.plans.map((plan) => (
                    <option key={plan} value={plan}>
                      {plan}
                    </option>
                  ))}
              </S.Select>
            ) : (
              <S.Text>{subscription.rate_plan}</S.Text>
            )}
          </S.Section>
          <S.Divider />

          <S.Section>
            <S.Label>결제 금액</S.Label>
            {editing ? (
              <S.Input
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            ) : (
              <S.Text>{subscription.price}원</S.Text>
            )}
          </S.Section>
          <S.Divider />

          <S.Section>
            <S.Label>정기결제일</S.Label>
            {editing ? (
              <S.Select
                name="payment_date"
                value={formData.payment_date.toString()}
                onChange={handleChange}
              >
                {dateOptions.map((date) => (
                  <option key={date} value={date}>
                    {`${date}일`}
                  </option>
                ))}
              </S.Select>
            ) : (
              <S.Text>{`매월 ${subscription.payment_date}일`}</S.Text>
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
