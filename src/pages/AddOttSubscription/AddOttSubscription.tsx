import React, { useState } from 'react';
import axiosInstance from '../../libs/AxiosInstance';
import * as S from './AddOttSubscription.Style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewTopBar from '../../components/TopBar/NewTopBar';

// OTT 서비스 배열
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

// OTT 구독 추가 컴포넌트
const AddOttSubscription: React.FC = () => {
  const [ott, setOtt] = useState(ottOptions[0]); // 기본 값으로 첫 번째 OTT를 선택
  const [name, setName] = useState('');
  const [plan, setPlan] = useState(ottOptions[0].rate_plans[0]);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('1'); // 정기결제일 상태 (기본 값 1일)
  const [memo, setMemo] = useState('');

  // OTT 변경 핸들러
  const handleOttChange = (selectedOttName: string) => {
    // 선택한 OTT에 따라 상태 업데이트
    const selectedOtt =
      ottOptions.find((option) => option.ott_name === selectedOttName) ||
      ottOptions[0]; // 선택된 OTT가 없으면 기본 OTT로 설정
    setOtt(selectedOtt);
    setPlan(selectedOtt.rate_plans[0]); // 해당 OTT의 첫 번째 요금제를 기본 값으로 선택
  };

  // 구독료 입력 핸들러
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // 입력값이 숫자일 경우에만 상태 업데이트
      setAmount(value);
    }
  };

  // 제출 핸들러
  const handleSubmit = async () => {
    // 필수 입력값 확인
    if (!name || !amount) {
      toast.error('모든 값을 입력해주세요!');
      return; // 빈값일 경우 제출 중단
    }

    try {
      // API에 구독 정보 전송
      const response = await axiosInstance.post('/api/subscription', {
        name: name,
        payment: Number(amount), // 입력된 구독료를 숫자로 변환
        memo: memo,
        paymentDate: Number(date), // 정기결제일 숫자로 변환
        ottName: ott.ott_name,
        ottRatePlan: plan,
      });

      // 성공 메시지 표시 및 메인 페이지로 리다이렉션
      toast.success('등록되었어요!', {
        onClose: () => {
          window.location.href = '/main';
        },
        autoClose: 1500,
      });
    } catch (error) {
      console.error('정보 저장 중 에러 발생', error);
      toast.error('등록에 실패했어요.');
    }
  };

  // 정기결제일 선택을 위한 옵션 (1일부터 31일까지)
  const dateOptions = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <S.AddOttWrapper>
      <S.TitleWrapper>
        <NewTopBar title="OTT 추가" />
      </S.TitleWrapper>
      <S.Container>
        <S.Header>
          <S.Image src={ott.ott_image} alt={ott.ott_name} />
          <S.SelectOttName
            value={ott.ott_name}
            onChange={(e) => handleOttChange(e.target.value)} // OTT 변경 시 핸들러 호출
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
    </S.AddOttWrapper>
  );
};

export default AddOttSubscription;
