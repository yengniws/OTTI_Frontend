import React, { useState } from 'react';
import axiosInstance from '../../libs/AxiosInstance';
import * as S from './AddOttSubscription.Style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ottOptions = [
  {
    ott_name: '넷플릭스',
    ott_image: 'https://i.ibb.co/hdrL7nM/Netflix.png',
    rate_plans: ['광고형', '스탠다드', '프리미엄', '기타'],
  },
  {
    ott_name: '티빙',
    ott_image: 'https://i.ibb.co/xJYNbMZ/tving.png',
    rate_plans: ['광고형', '베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    ott_name: '웨이브',
    ott_image: 'https://i.ibb.co/5YnVYMd/Wavve.png',
    rate_plans: ['베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    ott_name: '디즈니+',
    ott_image: 'https://i.ibb.co/wKm4GMF/Disney-plus.png',
    rate_plans: ['스탠다드', '프리미엄', '기타'],
  },
  {
    ott_name: '쿠팡플레이',
    ott_image: 'https://i.ibb.co/Y3N6qcb/Coupang-play.png',
    rate_plans: ['쿠팡와우회원', '기타'],
  },
  {
    ott_name: '왓챠',
    ott_image: 'https://i.ibb.co/4MQ02LS/Watcha.png',
    rate_plans: ['베이직', '프리미엄', '기타'],
  },
];

const AddOttSubscription: React.FC = () => {
  const [ott, setOtt] = useState(ottOptions[0]);
  const [name, setName] = useState('');
  const [plan, setPlan] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('1');
  const [memo, setMemo] = useState('');

  const handleOttChange = (selectedOttName: string) => {
    const selectedOtt =
      ottOptions.find((option) => option.ott_name === selectedOttName) ||
      ottOptions[0];
    setOtt(selectedOtt);
    setPlan('');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = async () => {
    try {
      // const userId = localStorage.getItem('user_id'); // 유저 ID를 로컬 스토리지에서 가져옴

      await axiosInstance.post('/api/subscription', {
        name: name,
        payment: Number(amount),
        memo: memo,
        paymentDate: Number(date),
        //userId: Number(userId),
        ottName: ott.ott_name,
        ottRatePlan: plan,
      });

      toast.success('등록되었어요!', {
        onClose: () => {
          window.location.href = '/main';
        },
        autoClose: 1000,
      });
    } catch (error) {
      console.error('정보 저장 중 에러 발생', error);
      toast.error('등록에 실패했어요.');
    }
  };

  const dateOptions = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <S.Container>
      <S.Header>
        <S.Image src={ott.ott_image} alt={ott.ott_name} />
        <S.SelectOttName
          value={ott.ott_name}
          onChange={(e) => handleOttChange(e.target.value)}
        >
          {ottOptions.map((option) => (
            <option key={option.ott_name} value={option.ott_name}>
              {option.ott_name}
            </option>
          ))}
        </S.SelectOttName>
      </S.Header>
      <S.Section>
        <S.Label>이름</S.Label>
        <S.Input value={name} onChange={(e) => setName(e.target.value)} />
      </S.Section>
      <S.Divider />
      <S.Section>
        <S.Label>요금제 선택</S.Label>
        <S.Select value={plan} onChange={(e) => setPlan(e.target.value)}>
          {ott.rate_plans.map((plan) => (
            <option key={plan} value={plan}>
              {plan}
            </option>
          ))}
        </S.Select>
      </S.Section>
      <S.Divider />
      <S.Section>
        <S.Label>구독료</S.Label>
        <S.Input value={amount} onChange={handleAmountChange} />
      </S.Section>
      <S.Divider />
      <S.Section>
        <S.Label>정기결제일</S.Label>
        <S.Select value={date} onChange={(e) => setDate(e.target.value)}>
          {dateOptions.map((day) => (
            <option key={day} value={day.toString()}>
              {`${day}일`}
            </option>
          ))}
        </S.Select>
      </S.Section>
      <S.Divider />
      <S.LabelMemo>메모</S.LabelMemo>
      <S.MemoBox>
        <S.InputMemo value={memo} onChange={(e) => setMemo(e.target.value)} />
      </S.MemoBox>
      <S.ButtonContainer>
        <S.ButtonSave onClick={handleSubmit}>등록하기</S.ButtonSave>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default AddOttSubscription;
