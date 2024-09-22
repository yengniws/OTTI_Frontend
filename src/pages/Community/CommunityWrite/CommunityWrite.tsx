// import React, { useState } from 'react';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import PotSelect from '../../../components/Community/PotSelect/PotSelect';
// import WritePost from '../../../components/Community/WritePost/WritePost';
// import * as S from './CommunityWrite.Style';
// import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';

// const CommunityWrite: React.FC = () => {
//   const [selectedPot, setSelectedPot] = useState('');
//   const ottOptions = [
//     '넷플릭스',
//     '티빙',
//     '웨이브',
//     '디즈니+',
//     '쿠팡플레이',
//     '왓챠',
//   ];

//   const handleRegister = () => {
//     // 등록 버튼을 눌렀을 때 CommunityList로 이동하는 로직
//     // 여기에 게시글 데이터를 서버에 전송하는 로직 추가 필요
//     window.location.href = '/community';
//   };

//   return (
//     <S.CommunityWrite>
//       <S.TopBar>
//         <NewTopBar title="글쓰기" />
//         <RegisterBtn onClick={handleRegister} />
//       </S.TopBar>
//       <S.Container>
//         <PotSelect
//           options={ottOptions}
//           selected={selectedPot}
//           onSelect={setSelectedPot}
//         />
//         <WritePost />
//       </S.Container>
//     </S.CommunityWrite>
//   );
// };

// export default CommunityWrite;

// import React, { useState, useRef } from 'react';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import PotSelect from '../../../components/Community/PotSelect/PotSelect';
// import WritePost from '../../../components/Community/WritePost/WritePost';
// import * as S from './CommunityWrite.Style';
// import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';
// import axios from 'axios';

// const CommunityWrite: React.FC = () => {
//   const [selectedPot, setSelectedPot] = useState('');
//   const writePostRef = useRef<{ title: string; content: string } | null>(null); // WritePost에서 데이터를 참조하기 위한 ref
//   const ottOptions = [
//     '넷플릭스',
//     '티빙',
//     '웨이브',
//     '디즈니+',
//     '쿠팡플레이',
//     '왓챠',
//   ];

//   // 게시글 등록 핸들러
//   const handleRegister = async (access_token: string) => {
//     if (!writePostRef.current) return;

//     const { title, content } = writePostRef.current;

//     if (!title || !content || !selectedPot) {
//       alert('모든 필드를 입력해 주세요.');
//       return;
//     }

//     const postData = {
//       title,
//       content,
//       images: [], // 이미지 데이터가 있으면 추가
//       potId: ottOptions.indexOf(selectedPot), // 선택된 OTT 인덱스 값으로 설정
//     };

//     try {
//       await axios.post('/api/post', postData, {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//         },
//       });
//       alert('게시글이 성공적으로 저장되었습니다.');
//       window.location.href = '/community'; // 성공 시 페이지 이동
//     } catch (error) {
//       console.error('게시글 저장에 실패했습니다.', error);
//       alert('게시글 저장에 실패했습니다.');
//     }
//   };

//   return (
//     <S.CommunityWrite>
//       <S.TopBar>
//         <NewTopBar title="글쓰기" />
//         <RegisterBtn onRegister={handleRegister} />{' '}
//         {/* handleRegister 함수 전달 */}
//       </S.TopBar>
//       <S.Container>
//         <PotSelect
//           options={ottOptions}
//           selected={selectedPot}
//           onSelect={setSelectedPot}
//         />
//         <WritePost ref={writePostRef} />{' '}
//         {/* WritePost의 데이터를 가져오기 위해 ref 설정 */}
//       </S.Container>
//     </S.CommunityWrite>
//   );
// };

// export default CommunityWrite;

// import React, { useState, useRef } from 'react';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import PotSelect from '../../../components/Community/PotSelect/PotSelect';
// import WritePost, {
//   WritePostHandle,
// } from '../../../components/Community/WritePost/WritePost';
// import * as S from './CommunityWrite.Style';
// import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';
// import axios from 'axios';

// const CommunityWrite: React.FC = () => {
//   const [selectedPot, setSelectedPot] = useState('');
//   const writePostRef = useRef<WritePostHandle>(null);
//   const ottOptions = [
//     '넷플릭스',
//     '티빙',
//     '웨이브',
//     '디즈니+',
//     '쿠팡플레이',
//     '왓챠',
//   ];

//   const handleRegister = async (access_token: string) => {
//     if (!writePostRef.current) return;

//     const { title, content, potId } = writePostRef.current;

//     if (!title || !content || potId === null || !selectedPot) {
//       alert('모든 필드를 입력해 주세요.');
//       return;
//     }

//     const postData = {
//       title,
//       content,
//       images: [], // 이미지 데이터가 있으면 추가
//       potId: ottOptions.indexOf(selectedPot), // 선택된 OTT 인덱스 값으로 설정
//     };

//     try {
//       await axios.post('/api/post', postData, {
//         headers: {
//           Authorization: `Bearer ${access_token}`, // access_token을 헤더에 추가
//         },
//       });
//       alert('게시글이 성공적으로 저장되었습니다.');
//       window.location.href = '/community'; // 성공 시 페이지 이동
//     } catch (error) {
//       console.error('게시글 저장에 실패했습니다.', error);
//       alert('게시글 저장에 실패했습니다.');
//     }
//   };

//   return (
//     <S.CommunityWrite>
//       <S.TopBar>
//         <NewTopBar title="글쓰기" />
//         <RegisterBtn onRegister={handleRegister} />
//       </S.TopBar>
//       <S.Container>
//         <PotSelect
//           options={ottOptions}
//           selected={selectedPot}
//           onSelect={setSelectedPot}
//         />
//         <WritePost ref={writePostRef} />
//       </S.Container>
//     </S.CommunityWrite>
//   );
// };

// export default CommunityWrite;

// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import PotSelect from '../../../components/Community/PotSelect/PotSelect';
// import WritePost, {
//   WritePostHandle,
// } from '../../../components/Community/WritePost/WritePost';
// import * as S from './CommunityWrite.Style';
// import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';

// // Define a type for the data structure returned from the API
// interface PotMembershipDTO {
//   id: number;
//   name: string; // Adjust based on actual API response
// }

// const CommunityWrite: React.FC = () => {
//   const [selectedPot, setSelectedPot] = useState('');
//   const [ottOptions, setOttOptions] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const writePostRef = useRef<WritePostHandle>(null);

//   // Fetch OTT options from API
//   useEffect(() => {
//     const fetchOttOptions = async () => {
//       try {
//         const principal = 'YOUR_PRINCIPAL_HERE'; // Replace with actual principal value
//         const response = await axios.get<PotMembershipDTO[]>(
//           '/api/pot/application/user/pots/permission',
//           {
//             params: { principal },
//           },
//         );

//         // Assuming the response data is an array of PotMembershipDTO
//         const options = response.data.map((pot) => pot.name); // Adjust according to the API response
//         setOttOptions(options);
//       } catch (error) {
//         setError('OTT options을 가져오는 데 실패했습니다.');
//         console.error('OTT options 가져오기 실패:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOttOptions();
//   }, []);

//   const handleRegister = async (access_token: string) => {
//     if (!writePostRef.current) return;

//     const { title, content, potId } = writePostRef.current;

//     if (!title || !content || potId === null || !selectedPot) {
//       alert('모든 필드를 입력해 주세요.');
//       return;
//     }

//     const postData = {
//       title,
//       content,
//       images: [], // 이미지 데이터가 있으면 추가
//       potId: ottOptions.indexOf(selectedPot), // 선택된 OTT 인덱스 값으로 설정
//     };

//     try {
//       await axios.post('/api/post', postData, {
//         headers: {
//           Authorization: `Bearer ${access_token}`, // access_token을 헤더에 추가
//         },
//       });
//       alert('게시글이 성공적으로 저장되었습니다.');
//       window.location.href = '/community'; // 성공 시 페이지 이동
//     } catch (error) {
//       console.error('게시글 저장에 실패했습니다.', error);
//       alert('게시글 저장에 실패했습니다.');
//     }
//   };

//   if (loading) return <p>Loading...</p>; // Loading state
//   if (error) return <p>{error}</p>; // Error state

//   return (
//     <S.CommunityWrite>
//       <S.TopBar>
//         <NewTopBar title="글쓰기" />
//         <RegisterBtn onRegister={handleRegister} />
//       </S.TopBar>
//       <S.Container>
//         <PotSelect
//           options={ottOptions}
//           selected={selectedPot}
//           onSelect={setSelectedPot}
//         />
//         <WritePost ref={writePostRef} />
//       </S.Container>
//     </S.CommunityWrite>
//   );
// };

// export default CommunityWrite;

// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import PotSelect from '../../../components/Community/PotSelect/PotSelect';
// import WritePost, {
//   WritePostHandle,
// } from '../../../components/Community/WritePost/WritePost';
// import * as S from './CommunityWrite.Style';
// import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';

// interface PotMembership {
//   id: number;
//   name: string;
// }

// const CommunityWrite: React.FC = () => {
//   const [selectedPot, setSelectedPot] = useState('');
//   const [ottOptions, setOttOptions] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const writePostRef = useRef<WritePostHandle>(null);

//   // Fetch OTT options from API
//   useEffect(() => {
//     const fetchOttOptions = async () => {
//       try {
//         const principal = 'YOUR_PRINCIPAL_HERE'; // Replace with actual principal value
//         const response = await axios.get(
//           '/api/pot/application/user/pots/permission',
//           {
//             params: { principal },
//           },
//         );

//         console.log('API Response:', response.data); // Log the response to inspect its structure

//         // Adjust according to the actual structure of response.data
//         const options = Array.isArray(response.data)
//           ? response.data.map((pot: PotMembership) => pot.name) // Example adjustment
//           : [];

//         setOttOptions(options);
//       } catch (error) {
//         setError('OTT options을 가져오는 데 실패했습니다.');
//         console.error('OTT options 가져오기 실패:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOttOptions();
//   }, []);

//   const handleRegister = async (access_token: string) => {
//     if (!writePostRef.current) return;

//     const { title, content, potId } = writePostRef.current;

//     if (!title || !content || potId === null || !selectedPot) {
//       alert('모든 필드를 입력해 주세요.');
//       return;
//     }

//     const postData = {
//       title,
//       content,
//       images: [], // 이미지 데이터가 있으면 추가
//       potId: ottOptions.indexOf(selectedPot), // 선택된 OTT 인덱스 값으로 설정
//     };

//     try {
//       await axios.post('/api/post', postData, {
//         headers: {
//           Authorization: `Bearer ${access_token}`, // access_token을 헤더에 추가
//         },
//       });
//       alert('게시글이 성공적으로 저장되었습니다.');
//       window.location.href = '/community'; // 성공 시 페이지 이동
//     } catch (error) {
//       console.error('게시글 저장에 실패했습니다.', error);
//       alert('게시글 저장에 실패했습니다.');
//     }
//   };

//   if (loading) return <p>Loading...</p>; // Loading state
//   if (error) return <p>{error}</p>; // Error state

//   return (
//     <S.CommunityWrite>
//       <S.TopBar>
//         <NewTopBar title="글쓰기" />
//         <RegisterBtn onRegister={handleRegister} />
//       </S.TopBar>
//       <S.Container>
//         <PotSelect
//           options={ottOptions}
//           selected={selectedPot}
//           onSelect={setSelectedPot}
//         />
//         <WritePost ref={writePostRef} />
//       </S.Container>
//     </S.CommunityWrite>
//   );
// };

// export default CommunityWrite;

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import NewTopBar from '../../../components/Topbar/NewTopBar';
import PotSelect from '../../../components/Community/PotSelect/PotSelect';
import WritePost, {
  WritePostHandle,
} from '../../../components/Community/WritePost/WritePost';
import * as S from './CommunityWrite.Style';
import RegisterBtn from '../../../components/Topbar/RegisterBtn/RegisterBtn';

interface PotMembership {
  id: number;
  name: string;
}

const CommunityWrite: React.FC = () => {
  const [selectedPot, setSelectedPot] = useState('');
  const [ottOptions, setOttOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const writePostRef = useRef<WritePostHandle>(null);

  // Fetch OTT options from API
  useEffect(() => {
    const fetchOttOptions = async () => {
      try {
        const response = await axios.get(
          '/api/pot/application/user/pots/approve/permission',
        );
        console.log('API Response:', response.data); // Debug log

        if (Array.isArray(response.data)) {
          const options = response.data.map((pot: PotMembership) => pot.name);
          setOttOptions(options);
        } else {
          setOttOptions([]);
        }
      } catch (error) {
        setError('OTT options을 가져오는 데 실패했습니다.');
        console.error('OTT options 가져오기 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOttOptions();
  }, []);

  const handleRegister = async (access_token: string) => {
    if (!writePostRef.current) return;

    const { title, content, potId } = writePostRef.current;

    if (!title || !content || potId === null || !selectedPot) {
      alert('모든 필드를 입력해 주세요.');
      return;
    }

    const postData = {
      title,
      content,
      images: [], // 이미지 데이터가 있으면 추가
      potId: ottOptions.indexOf(selectedPot), // 선택된 OTT 인덱스 값으로 설정
    };

    try {
      await axios.post('/api/post', postData, {
        headers: {
          Authorization: `Bearer ${access_token}`, // access_token을 헤더에 추가
        },
      });
      alert('게시글이 성공적으로 저장되었습니다.');
      window.location.href = '/community'; // 성공 시 페이지 이동
    } catch (error) {
      console.error('게시글 저장에 실패했습니다.', error);
      alert('게시글 저장에 실패했습니다.');
    }
  };

  if (loading) return <p>Loading...</p>; // Loading state
  if (error) return <p>{error}</p>; // Error state

  return (
    <S.CommunityWrite>
      <S.TopBar>
        <NewTopBar title="글쓰기" />
        <RegisterBtn onRegister={handleRegister} />
      </S.TopBar>
      <S.Container>
        <PotSelect
          options={ottOptions}
          selected={selectedPot}
          onSelect={setSelectedPot}
        />
        <WritePost ref={writePostRef} />
      </S.Container>
    </S.CommunityWrite>
  );
};

export default CommunityWrite;
