// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axiosInstance from '../../../libs/AxiosInstance';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import OttInfo from '../../../components/Community/Join/OttInfo';
// import JoinDetails from '../../../components/Community/Join/JoinDetails';
// import SendBtn from '../../../components/common/JoinBtn/SendBtn';
// import * as S from './JoinPot.Style';

// const JoinPot: React.FC = () => {
//   const { potId } = useParams<{ potId: string }>(); // URL에서 potId 받기
//   const [joinContent, setJoinContent] = useState('');
//   const [ottInfo, setOttInfo] = useState<any>(null); // ottInfo 상태로 데이터를 관리
//   const [loading, setLoading] = useState(true); // 로딩 상태 추가
//   const [username, setUsername] = useState<string>(''); // 사용자명 상태 추가

//   useEffect(() => {
//     const fetchPotDetails = async () => {
//       try {
//         // URL에서 potId가 제대로 넘어오는지 확인
//         console.log('Fetched potId:', potId);

//         // API 호출로 potId에 맞는 데이터 가져오기
//         const response = await axiosInstance.get(`/api/pot/create/${potId}`);
//         console.log('API response:', response.data); // API 응답 로그

//         setOttInfo(response.data); // 받아온 데이터 설정
//         setLoading(false); // 로딩 완료
//       } catch (error) {
//         console.error('Failed to fetch pot details', error);
//         setLoading(false); // 로딩 실패
//       }
//     };

//     const fetchUsername = async () => {
//       try {
//         // 사용자명 가져오기
//         const response = await axiosInstance.get('/api/users/profile/user');
//         setUsername(response.data.username); // 사용자명 설정
//       } catch (error) {
//         console.error('Failed to fetch username', error);
//       }
//     };

//     if (potId) {
//       fetchPotDetails();
//       fetchUsername(); // 사용자명도 함께 가져오기
//     } else {
//       console.error('No potId found in URL');
//       setLoading(false);
//     }
//   }, [potId]);

//   const handleJoinContentChange = (newContent: string) => {
//     setJoinContent(newContent);
//   };

//   const handleSendClick = async () => {
//     try {
//       // Join request를 보냄
//       await axiosInstance.post('/api/pot/application/joinrequest', {
//         joinrequestDescription: joinContent,
//       });
//       console.log('Join request sent');
//     } catch (error) {
//       console.error('Failed to send join request', error);
//     }
//   };

//   // 데이터가 로딩 중일 때 로딩 메시지 표시
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // ottInfo가 없는 경우 에러 메시지 표시
//   if (!ottInfo) {
//     return <div>No data available for the selected pot.</div>;
//   }

//   return (
//     <S.JoinPotWrap>
//       <S.TitleWrapper>
//         <NewTopBar title="가입하기" />
//       </S.TitleWrapper>
//       <S.PageContainer>
//         <S.OttWrapper>
//           <OttInfo
//             image={ottInfo.ott.image}
//             name={ottInfo.ott.name}
//             ratePlan={ottInfo.ott.ratePlan}
//             price={ottInfo.ott.price}
//             paymentDate={ottInfo.ratePlan}
//             memberCount={ottInfo.memberCount}
//           />
//         </S.OttWrapper>
//         <S.JoinWrapper>
//           <S.Title>신청 내용</S.Title>
//           <JoinDetails
//             username={username} // 가져온 사용자명 사용
//             joinContent={joinContent}
//             onJoinContentChange={handleJoinContentChange}
//           />
//         </S.JoinWrapper>
//         <SendBtn text="신청하기" onClick={handleSendClick} />
//       </S.PageContainer>
//     </S.JoinPotWrap>
//   );
// };

// export default JoinPot;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../libs/AxiosInstance';
import NewTopBar from '../../../components/TopBar/NewTopBar';
import OttInfo from '../../../components/Community/Join/OttInfo';
import JoinDetails from '../../../components/Community/Join/JoinDetails';
import SendBtn from '../../../components/common/JoinBtn/SendBtn';
import * as S from './JoinPot.Style';
import { toast } from 'react-toastify';

const JoinPot: React.FC = () => {
  const { potId } = useParams<{ potId: string }>(); // URL에서 potId 받기
  const [joinContent, setJoinContent] = useState('');
  const [ottInfo, setOttInfo] = useState<any>(null); // ottInfo 상태로 데이터를 관리
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [username, setUsername] = useState<string>(''); // 사용자명 상태 추가

  useEffect(() => {
    const fetchPotDetails = async () => {
      try {
        console.log('Fetched potId:', potId);
        const response = await axiosInstance.get(`/api/pot/create/${potId}`);
        console.log('API response:', response.data); // API 응답 로그
        setOttInfo(response.data); // 받아온 데이터 설정
        setLoading(false); // 로딩 완료
      } catch (error) {
        console.error('Failed to fetch pot details', error);
        setLoading(false); // 로딩 실패
      }
    };

    const fetchUsername = async () => {
      try {
        const response = await axiosInstance.get('/api/users/profile/user');
        setUsername(response.data.username); // 사용자명 설정
      } catch (error) {
        console.error('Failed to fetch username', error);
      }
    };

    if (potId) {
      fetchPotDetails();
      fetchUsername(); // 사용자명도 함께 가져오기
    } else {
      console.error('No potId found in URL');
      setLoading(false);
    }
  }, [potId]);

  const handleJoinContentChange = (newContent: string) => {
    setJoinContent(newContent);
  };

  const handleSendClick = async () => {
    try {
      await axiosInstance.post('/api/pot/application/joinrequest', {
        joinrequestDescription: joinContent,
        potId: potId, // potId를 요청 본문에 추가
      });
      console.log('Join request sent');
      toast.success('Join request sent successfully!'); // 성공 메시지
    } catch (error) {
      console.error('Failed to send join request', error);
      toast.error('Failed to send join request'); // 에러 메시지 표시
    }
  };

  // 데이터가 로딩 중일 때 로딩 메시지 표시
  if (loading) {
    return <div>Loading...</div>;
  }

  // ottInfo가 없는 경우 에러 메시지 표시
  if (!ottInfo) {
    return <div>No data available for the selected pot.</div>;
  }

  return (
    <S.JoinPotWrap>
      <S.TitleWrapper>
        <NewTopBar title="가입하기" />
      </S.TitleWrapper>
      <S.PageContainer>
        <S.OttWrapper>
          <OttInfo
            image={ottInfo.ott.image}
            name={ottInfo.ott.name}
            ratePlan={ottInfo.ott.ratePlan}
            price={ottInfo.ott.price}
            paymentDate={ottInfo.ratePlan}
            memberCount={ottInfo.memberCount}
          />
        </S.OttWrapper>
        <S.JoinWrapper>
          <S.Title>신청 내용</S.Title>
          <JoinDetails
            username={username} // 가져온 사용자명 사용
            joinContent={joinContent}
            onJoinContentChange={handleJoinContentChange}
          />
        </S.JoinWrapper>
        <SendBtn text="신청하기" onClick={handleSendClick} />
      </S.PageContainer>
    </S.JoinPotWrap>
  );
};

export default JoinPot;
