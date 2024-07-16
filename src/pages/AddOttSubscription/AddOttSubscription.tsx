import React, { useState } from 'react';
import axios from 'axios';
import * as S from './AddOttSubscription.Style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ottOptions = [
  {
    name: '넷플릭스',
    imgURL: 'https://i.ibb.co/hdrL7nM/Netflix.png',
    plans: ['광고형', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '티빙',
    imgURL: 'https://i.ibb.co/xJYNbMZ/tving.png',
    plans: ['광고형', '베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '웨이브',
    imgURL: 'https://i.ibb.co/5YnVYMd/Wavve.png',
    plans: ['베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '디즈니+',
    imgURL: 'https://i.ibb.co/wKm4GMF/Disney-plus.png',
    plans: ['스탠다드', '프리미엄', '기타'],
  },
  {
    name: '쿠팡플레이',
    imgURL: 'https://i.ibb.co/Y3N6qcb/Coupang-play.png',
    plans: ['쿠팡와우회원', '기타'],
  },
  {
    name: '왓챠',
    imgURL: 'https://i.ibb.co/4MQ02LS/Watcha.png',
    plans: ['베이직', '프리미엄', '기타'],
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
      <S.Header>
        <S.Image src={ott.imgURL} alt={ott.name} />
        <S.SelectOttName
          value={ott.name}
          onChange={(e) => handleOttChange(e.target.value)}
        >
          {ottOptions.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
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
          {ott.plans.map((plan) => (
            <option key={plan} value={plan}>
              {plan}
            </option>
          ))}
        </S.Select>
      </S.Section>
      <S.Divider />
      <S.Section>
        <S.Label>구독료</S.Label>
        <S.Input value={amount} onChange={(e) => setAmount(e.target.value)} />
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
