import React, { useState, useEffect } from 'react';
import * as S from './SubscriptionDetail.Style';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ottOptions, dateOptions } from '../../constants/constants';
import axiosInstance from '../../libs/AxiosInstance';
import LoadingPage from '../Loading/LoadingPage';
import NewTopBar from '../../components/Topbar/NewTopBar';

interface Ott {
  id: number;
  name: string;
  ratePlan: string;
  price: number;
  image: string;
  createdDate: string;
  modifiedDate: string;
}

interface Subscription {
  id: number;
  name: string;
  payment: number;
  memo: string;
  paymentDate: number;
  userId: number;
  ott: Ott;
  createdDate: string;
  modifiedDate: string;
}

const SubscriptionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    payment: 0,
    memo: '',
    paymentDate: 1,
    ott: {
      id: 0,
      name: '',
      ratePlan: '',
      price: 0,
      image: '',
      createdDate: '',
      modifiedDate: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axiosInstance.get(`/api/subscription/${id}`);
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
      .delete(`/api/subscription/${id}`)
      .then(() => {
        toast.success('삭제되었습니다!');
        setTimeout(() => {
          navigate('/main');
        }, 1000);
      })
      .catch((error) => console.error('데이터 삭제 중 오류:', error));
  };

  const handleSave = () => {
    const payload = {
      name: formData.name,
      payment: formData.payment,
      memo: formData.memo,
      paymentDate: formData.paymentDate,
      ottName: formData.ott.name,
      ottRatePlan: formData.ott.ratePlan,
    };

    axiosInstance
      .put(`/api/subscription/${id}`, payload)
      .then((response) => {
        setSubscription(response.data);
        toast.success('수정되었습니다!');
        setEditing(false);
        setIsLoading(true);
        // 페이지 새로고침
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => console.error('데이터 업데이트 중 에러:', error));
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name.startsWith('ott.')) {
      const [_, key] = name.split('.');
      setFormData((prevFormData) => ({
        ...prevFormData,
        ott: {
          ...prevFormData.ott,
          [key]: value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]:
          name === 'payment' || name === 'paymentDate'
            ? value === ''
              ? 0
              : parseInt(value)
            : value,
      }));
    }
  };

  return (
    <S.OttDetailWrapper>
      <S.TitleWrapper>
        <NewTopBar title="구독 정보" />
      </S.TitleWrapper>
      <S.Container>
        {subscription && (
          <>
            <S.Header>
              <S.Image
                src={formData.ott?.image || ''}
                alt={formData.ott?.name || 'OTT 이미지'}
              />
              {editing ? (
                <S.SelectOttName
                  name="ott.name"
                  value={formData.ott?.name || ''}
                  onChange={handleChange}
                >
                  {ottOptions.map((option) => (
                    <option key={option.name} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </S.SelectOttName>
              ) : (
                <S.OttName>{subscription.ott?.name}</S.OttName>
              )}
            </S.Header>

            <S.Section>
              <S.Label>이름</S.Label>
              {editing ? (
                <S.Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              ) : (
                <S.Text>{subscription.name}</S.Text>
              )}
            </S.Section>
            <S.Divider />

            <S.Section>
              <S.Label>요금제</S.Label>
              {editing ? (
                <S.Select
                  name="ott.ratePlan"
                  value={formData.ott?.ratePlan || ''}
                  onChange={handleChange}
                >
                  {ottOptions
                    .find((option) => option.name === formData.ott?.name)
                    ?.plans.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                </S.Select>
              ) : (
                <S.Text>{subscription.ott?.ratePlan}</S.Text>
              )}
            </S.Section>
            <S.Divider />

            <S.Section>
              <S.Label>결제 금액</S.Label>
              {editing ? (
                <S.Input
                  name="payment"
                  value={formData.payment}
                  onChange={handleChange}
                />
              ) : (
                <S.Text>{subscription.payment}원</S.Text>
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
    </S.OttDetailWrapper>
  );
};

export default SubscriptionDetail;
