import React, { useState } from 'react';
import axiosInstance from '../../libs/AxiosInstance';
import * as S from './MakePot.style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewTopBar from '../../components/topbar/NewTopBar';
import ActionButton from '../../components/common/ActionButton';

const ottOptions = [
  {
    ott_name: '넷플릭스',
    ott_image:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/netflix.png',
    rate_plans: ['광고형', '스탠다드', '프리미엄', '기타'],
  },
  {
    ott_name: '티빙',
    ott_image:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/tving.png',
    rate_plans: ['광고형', '베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    ott_name: '웨이브',
    ott_image:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/wavve.png',
    rate_plans: ['베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    ott_name: '디즈니+',
    ott_image:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/disney-plus.png',
    rate_plans: ['스탠다드', '프리미엄', '기타'],
  },
  {
    ott_name: '쿠팡플레이',
    ott_image:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/coupang-play.png',
    rate_plans: ['쿠팡와우회원', '기타'],
  },
  {
    ott_name: '왓챠',
    ott_image:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/watcha.png',
    rate_plans: ['베이직', '프리미엄', '기타'],
  },
];

const MakePot: React.FC = () => {
  const [ott, setOtt] = useState(ottOptions[0]);
  const [name, setName] = useState('');
  const [plan, setPlan] = useState(ottOptions[0].rate_plans[0]);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('1');
  const [account, setAccount] = useState('');

  const handleOttChange = (selectedOttName: string) => {
    const selectedOtt =
      ottOptions.find((option) => option.ott_name === selectedOttName) ||
      ottOptions[0];
    setOtt(selectedOtt);
    setPlan(selectedOtt.rate_plans[0]);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = async () => {
    if (!name || !amount || !account) {
      toast.error('모든 값을 입력해주세요!');
      return;
    }

    try {
      await axiosInstance.post('/api/pot/create', {
        name: name,
        ottName: ott.ott_name,
        ottRatePlan: plan,
        depositAccount: account,
        ratePlan: plan,
      });

      toast.success('POT이 등록되었어요!', {
        onClose: () => {
          window.location.href = '/MyPotList';
        },
        autoClose: 1500,
      });
    } catch (error) {
      console.error('정보 저장 중 에러 발생', error);
      toast.error('등록에 실패했어요.');
    }
  };

  const dateOptions = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <S.AddOttWrapper>
      <S.TitleWrapper>
        <NewTopBar title="POT 만들기" />
      </S.TitleWrapper>
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
          <S.Label>팟 이름</S.Label>
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
        <S.Section>
          <S.Label>입금 계좌</S.Label>
          <S.Input
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
        </S.Section>
      </S.Container>
      <S.ButtonWrapper>
        <S.DoneButton onClick={handleSubmit}>완료</S.DoneButton>
      </S.ButtonWrapper>
    </S.AddOttWrapper>
  );
};

export default MakePot;
