//npm install react-toastify

import React, { useState } from 'react';
import axios from 'axios';
import * as S from './AddOttSubscription.Style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ottOptions = [
  //추후 이미지 경로 수정
  {
    name: '넷플릭스',
    img: '넷플릭스.png',
    plans: ['광고형', '스탠다드', '프리미엄'],
  },
  {
    name: '티빙',
    img: '티빙.png',
    plans: ['광고형', '베이직', '스탠다드', '프리미엄'],
  },
  {
    name: '웨이브',
    img: '웨이브.png',
    plans: ['베이직', '스탠다드', '프리미엄'],
  },
  {
    name: '디즈니+',
    img: '디즈니+.png',
    plans: ['스탠다드', '프리미엄'],
  },
  {
    name: '쿠팡플레이',
    img: '쿠팡플레이.png',
    plans: ['쿠팡와우회원(단일요금제)'],
  },
  {
    name: '왓챠',
    img: '왓챠.png',
    plans: ['베이직', '프리미엄'],
  },
];

const AddOttSubscription: React.FC = () => {
  const [ott, setOtt] = useState(ottOptions[0]);
  const [name, setName] = useState('');
  const [plan, setPlan] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('1');
  const [memo, setMemo] = useState('');
  const [message, setMessage] = useState('');

  const handleOttChange = (selectedOttName: string) => {
    const selectedOtt =
      ottOptions.find((option) => option.name === selectedOttName) ||
      ottOptions[0];
    setOtt(selectedOtt);
    setPlan('');
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/submissions', {
        //추후 백엔드 경로 수정 필요
        ott: ott.name,
        name,
        plan,
        amount,
        date,
        memo,
      });

      toast.success('등록되었어요!', {
        onClose: () => {
          window.location.href = '/main';
        },
        autoClose: 1000,
      });
    } catch (error) {
      console.error('정보 저장 중 에러 발생', error);
    }
  };

  const dateOptions = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <S.Container>
      <S.Form>
        <S.OTTSelector>
          <img src={ott.img} alt={ott.name} />
          <select
            value={ott.name}
            onChange={(e) => handleOttChange(e.target.value)}
          >
            {ottOptions.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </S.OTTSelector>
        <S.InputField>
          <label>이름</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </S.InputField>
        <S.InputField>
          <label>요금제 선택</label>
          <select value={plan} onChange={(e) => setPlan(e.target.value)}>
            {ott.plans.map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </S.InputField>
        <S.InputField>
          <label>구독료</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </S.InputField>
        <S.InputField>
          <label>결제일</label>
          <select value={date} onChange={(e) => setDate(e.target.value)}>
            {dateOptions.map((day) => (
              <option key={day} value={day.toString()}>
                {`매월 ${day}일`}
              </option>
            ))}
          </select>
        </S.InputField>
        <S.InputField>
          <label>메모</label>
          <textarea value={memo} onChange={(e) => setMemo(e.target.value)} />
        </S.InputField>
        <S.SubmitButton type="button" onClick={handleSubmit}>
          등록하기
        </S.SubmitButton>
        {message && <S.Message>{message}</S.Message>}
      </S.Form>
    </S.Container>
  );
};

export default AddOttSubscription;
