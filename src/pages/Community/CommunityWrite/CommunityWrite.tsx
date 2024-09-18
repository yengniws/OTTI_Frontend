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
//         const response = await axios.get(
//           '/api/pot/application/user/pots/approve/permission',
//         );
//         console.log('API Response:', response.data); // Debug log

//         if (Array.isArray(response.data)) {
//           const options = response.data.map((pot: PotMembership) => pot.name);
//           setOttOptions(options);
//         } else {
//           setOttOptions([]);
//         }
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
// import axiosInstance from '../../../libs/AxiosInstance';
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
//   const [selectedPot, setSelectedPot] = useState<string>('');
//   const [ottOptions, setOttOptions] = useState<string[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const writePostRef = useRef<WritePostHandle>(null);

//   // Fetch OTT options from API
//   useEffect(() => {
//     const fetchOttOptions = async () => {
//       try {
//         const response = await axiosInstance.get(
//           'api/pot/application/user/pots/permission',
//         );
//         console.log('API Response:', response.data);

//         if (Array.isArray(response.data)) {
//           const options = response.data.map((pot: PotMembership) => pot.name);
//           setOttOptions(options);
//         } else {
//           setOttOptions([]);
//         }
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

//     const { title, content, images } = writePostRef.current;
//     const potId = ottOptions.indexOf(selectedPot);

//     if (!title || !content || potId === -1) {
//       alert('모든 필드를 입력해 주세요.');
//       return;
//     }

//     const formData = new FormData();
//     images.forEach((image: File) => {
//       formData.append('files', image);
//     });

//     try {
//       const imageResponse = await axiosInstance.post(
//         '/api/post/image',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         },
//       );

//       const imageUrls = imageResponse.data; // Assuming API returns image URLs

//       const postData = {
//         title,
//         content,
//         images: imageUrls,
//         potId,
//       };

//       await axiosInstance.post('/api/post', postData, {
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
// import axiosInstance from '../../../libs/AxiosInstance';
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
//   const [selectedPot, setSelectedPot] = useState<string>('');
//   const [ottOptions, setOttOptions] = useState<PotMembership[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const writePostRef = useRef<WritePostHandle>(null);

//   // Fetch OTT options from API
//   useEffect(() => {
//     //   const fetchOttOptions = async () => {
//     //     try {
//     //       const response = await axiosInstance.get(
//     //         '/api/pot/application/user/pots/permission',
//     //       );
//     //       if (Array.isArray(response.data)) {
//     //         setOttOptions(response.data);
//     //         console.log('API Response:', response.data);
//     //       } else {
//     //         setOttOptions([]);
//     //       }
//     //     } catch (error) {
//     //       setError('OTT options을 가져오는 데 실패했습니다.');
//     //     } finally {
//     //       setLoading(false);
//     //     }
//     //   };

//     //   fetchOttOptions();
//     // }, []);
//     const fetchOttOptions = async () => {
//       try {
//         const response = await axiosInstance.get(
//           '/api/pot/application/user/pots/permission',
//         );

//         // Check the API response format
//         if (Array.isArray(response.data)) {
//           const options = response.data.map((pot: PotMembership) => ({
//             id: pot.id,
//             name: pot.name, // Ensure the name field contains the potName
//           }));
//           setOttOptions(options);
//           console.log(response.data);
//         } else {
//           setOttOptions([]); // Set to empty array if the response is not an array
//         }
//       } catch (error) {
//         setError('OTT options을 가져오는 데 실패했습니다.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOttOptions();
//   }, []);

//   const handleRegister = async () => {
//     if (!writePostRef.current) return;

//     const { title, content, images } = writePostRef.current;
//     const selectedPotObj = ottOptions.find((pot) => pot.name === selectedPot);
//     const potId = selectedPotObj ? selectedPotObj.id : null;

//     if (!title || !content || potId === null) {
//       alert('모든 필드를 입력해 주세요.');
//       return;
//     }

//     const formData = new FormData();
//     images.forEach((image: File) => {
//       formData.append('files', image);
//     });

//     try {
//       const imageResponse = await axiosInstance.post(
//         '/api/post/image',
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         },
//       );

//       const imageUrls = imageResponse.data;

//       const postData = {
//         title,
//         content,
//         images: imageUrls,
//         potId, // Send potId here
//       };

//       await axiosInstance.post('/api/post', postData);

//       alert('게시글이 성공적으로 저장되었습니다.');
//       window.location.href = '/community';
//     } catch (error) {
//       console.error('게시글 저장에 실패했습니다.', error);
//       alert('게시글 저장에 실패했습니다.');
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

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
// import axiosInstance from '../../../libs/AxiosInstance';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import PotSelect from '../../../components/Community/PotSelect/PotSelect';
// import WritePost, {
//   WritePostHandle,
// } from '../../../components/Community/WritePost/WritePost';
// import * as S from './CommunityWrite.Style';
// import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';

// interface PotMembership {
//   id: number;
//   potName: string;
// }

// const CommunityWrite: React.FC = () => {
//   const [selectedPot, setSelectedPot] = useState<string>('');
//   const [ottOptions, setOttOptions] = useState<PotMembership[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const writePostRef = useRef<WritePostHandle>(null);

//   // Fetch OTT options from API
//   useEffect(() => {
//     const fetchOttOptions = async () => {
//       try {
//         const response = await axiosInstance.get(
//           '/api/pot/application/user/pots/permission',
//         );

//         if (Array.isArray(response.data)) {
//           const options = response.data.map((pot: PotMembership) => ({
//             id: pot.id,
//             potName: pot.potName, // Ensure the potName field contains the potName
//           }));
//           setOttOptions(options);
//         } else {
//           setOttOptions([]);
//         }
//       } catch (error) {
//         setError('OTT options을 가져오는 데 실패했습니다.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOttOptions();
//   }, []);

//   const handleRegister = async () => {
//     if (!writePostRef.current) return;

//     const { title, content, images } = writePostRef.current;
//     const selectedPotObj = ottOptions.find(
//       (pot) => pot.potName === selectedPot,
//     );
//     const potId = selectedPotObj ? selectedPotObj.id : null;

//     if (!title || !content || potId === null) {
//       alert('모든 필드를 입력해 주세요.');
//       return;
//     }

//     const formData = new FormData();
//     images.forEach((image: File) => {
//       formData.append('files', image);
//     });

//     try {
//       const imageResponse = await axiosInstance.post(
//         '/api/post/image',
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         },
//       );

//       const imageUrls = imageResponse.data;

//       const postData = {
//         title,
//         content,
//         images: imageUrls,
//         potId,
//       };

//       await axiosInstance.post('/api/post', postData);

//       alert('게시글이 성공적으로 저장되었습니다.');
//       window.location.href = '/community';
//     } catch (error) {
//       console.error('게시글 저장에 실패했습니다.', error);
//       alert('게시글 저장에 실패했습니다.');
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

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
// import axiosInstance from '../../../libs/AxiosInstance';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import PotSelect from '../../../components/Community/PotSelect/PotSelect';
// import WritePost, {
//   WritePostHandle,
// } from '../../../components/Community/WritePost/WritePost';
// import * as S from './CommunityWrite.Style';
// import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';

// interface PotMembership {
//   id: number;
//   potName: string;
// }

// const CommunityWrite: React.FC = () => {
//   const [selectedPot, setSelectedPot] = useState<string>('');
//   const [ottOptions, setOttOptions] = useState<PotMembership[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const writePostRef = useRef<WritePostHandle>(null);

//   // Fetch OTT options from API
//   useEffect(() => {
//     const fetchOttOptions = async () => {
//       try {
//         const response = await axiosInstance.get(
//           '/api/pot/application/user/pots/permission',
//         );

//         if (Array.isArray(response.data)) {
//           const options = response.data.map((pot: PotMembership) => ({
//             id: pot.id,
//             potName: pot.potName, // Ensure the potName field contains the potName
//           }));
//           setOttOptions(options);
//         } else {
//           setOttOptions([]);
//         }
//       } catch (error) {
//         setError('OTT options을 가져오는 데 실패했습니다.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOttOptions();
//   }, []);

//   const getPostData = () => {
//     if (!writePostRef.current) return null;

//     const { title, content, images } = writePostRef.current;
//     const selectedPotObj = ottOptions.find(
//       (pot) => pot.potName === selectedPot,
//     );
//     const potId = selectedPotObj ? selectedPotObj.id : null;

//     if (!title || !content || potId === null) {
//       alert('모든 필드를 입력해 주세요.');
//       return null;
//     }

//     const formData = new FormData();
//     images.forEach((image: File) => {
//       formData.append('files', image);
//     });

//     return { title, content, images: formData, potId };
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <S.CommunityWrite>
//       <S.TopBar>
//         <NewTopBar title="글쓰기" />
//         <RegisterBtn getPostData={getPostData} />
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
// import axiosInstance from '../../../libs/AxiosInstance';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import PotSelect from '../../../components/Community/PotSelect/PotSelect';
// import WritePost, {
//   WritePostHandle,
// } from '../../../components/Community/WritePost/WritePost';
// import * as S from './CommunityWrite.Style';
// import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';

// interface PotMembership {
//   id: number;
//   potName: string;
// }

// const CommunityWrite: React.FC = () => {
//   const [selectedPot, setSelectedPot] = useState<string>('');
//   const [ottOptions, setOttOptions] = useState<PotMembership[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const writePostRef = useRef<WritePostHandle>(null);

//   // Fetch OTT options from API
//   useEffect(() => {
//     const fetchOttOptions = async () => {
//       try {
//         const response = await axiosInstance.get(
//           '/api/pot/application/user/pots/permission',
//         );

//         if (Array.isArray(response.data)) {
//           const options = response.data.map((pot: PotMembership) => ({
//             id: pot.id,
//             potName: pot.potName, // Ensure the potName field contains the potName
//           }));
//           setOttOptions(options);
//         } else {
//           setOttOptions([]);
//         }
//       } catch (error) {
//         setError('OTT options을 가져오는 데 실패했습니다.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOttOptions();
//   }, []);

//   const getPostData = () => {
//     if (!writePostRef.current) return null;

//     const { title, content, images } = writePostRef.current;
//     const selectedPotObj = ottOptions.find(
//       (pot) => pot.potName === selectedPot,
//     );
//     const potId = selectedPotObj ? selectedPotObj.id : null;

//     if (!title || !content || potId === null) {
//       alert('모든 필드를 입력해 주세요.');
//       return null;
//     }

//     const formData = new FormData();
//     if (images && images.length > 0) {
//       images.forEach((image: File) => {
//         formData.append('files', image);
//       });
//     }

//     return { title, content, images: formData, potId };
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <S.CommunityWrite>
//       <S.TopBar>
//         <NewTopBar title="글쓰기" />
//         <RegisterBtn getPostData={getPostData} />
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
// import axiosInstance from '../../../libs/AxiosInstance';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import PotSelect from '../../../components/Community/PotSelect/PotSelect';
// import WritePost, {
//   WritePostHandle,
// } from '../../../components/Community/WritePost/WritePost';
// import * as S from './CommunityWrite.Style';
// import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';

// interface PotMembership {
//   id: number;
//   potName: string;
// }

// const CommunityWrite: React.FC = () => {
//   const [selectedPot, setSelectedPot] = useState<string>('');
//   const [ottOptions, setOttOptions] = useState<PotMembership[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const writePostRef = useRef<WritePostHandle>(null);

//   // OTT 옵션을 API에서 가져오기
//   useEffect(() => {
//     const fetchOttOptions = async () => {
//       try {
//         const response = await axiosInstance.get(
//           '/api/pot/application/user/pots/permission',
//         );

//         if (Array.isArray(response.data)) {
//           const options = response.data.map((pot: PotMembership) => ({
//             id: pot.id,
//             potName: pot.potName,
//           }));
//           setOttOptions(options);
//         } else {
//           setOttOptions([]);
//         }
//       } catch (error) {
//         setError('OTT options을 가져오는 데 실패했습니다.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOttOptions();
//   }, []);

//   const getPostData = () => {
//     if (!writePostRef.current) return null;

//     const { title, content, imageIds = [] } = writePostRef.current; // imageIds 기본값을 빈 배열로 설정
//     const selectedPotObj = ottOptions.find(
//       (pot) => pot.potName === selectedPot,
//     );
//     const potId = selectedPotObj ? selectedPotObj.id : null;

//     if (!title || !content || potId === null) {
//       alert('모든 필드를 입력해 주세요.');
//       return null;
//     }

//     return { title, content, images: imageIds, potId };
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <S.CommunityWrite>
//       <S.TopBar>
//         <NewTopBar title="글쓰기" />
//         <RegisterBtn getPostData={getPostData} />
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
// import axiosInstance from '../../../libs/AxiosInstance';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import PotSelect from '../../../components/Community/PotSelect/PotSelect';
// import WritePost, {
//   WritePostHandle,
// } from '../../../components/Community/WritePost/WritePost';
// import * as S from './CommunityWrite.Style';
// import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';

// interface PotMembership {
//   id: number;
//   potName: string;
// }

// const CommunityWrite: React.FC = () => {
//   const [selectedPot, setSelectedPot] = useState<string>('');
//   const [ottOptions, setOttOptions] = useState<PotMembership[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const writePostRef = useRef<WritePostHandle>(null);

//   // Fetch OTT options from API
//   useEffect(() => {
//     const fetchOttOptions = async () => {
//       try {
//         const response = await axiosInstance.get(
//           '/api/pot/application/user/pots/permission',
//         );

//         if (Array.isArray(response.data)) {
//           const options = response.data.map((pot: PotMembership) => ({
//             id: pot.id,
//             potName: pot.potName,
//           }));
//           setOttOptions(options);
//         } else {
//           setOttOptions([]);
//         }
//       } catch (error) {
//         setError('OTT options을 가져오는 데 실패했습니다.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOttOptions();
//   }, []);

//   const getPostData = () => {
//     if (!writePostRef.current) return null;

//     const { title, content, images } = writePostRef.current;
//     const selectedPotObj = ottOptions.find(
//       (pot) => pot.potName === selectedPot,
//     );
//     const potId = selectedPotObj ? selectedPotObj.id : null;

//     if (!title || potId === null) {
//       alert('제목과 POT을 선택해 주세요.');
//       return null;
//     }

//     return {
//       title,
//       content: content || '', // 빈 문자열로 대체
//       images: images || [], // 이미지가 없을 경우 빈 배열로 전송
//       potId,
//     };
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <S.CommunityWrite>
//       <S.TopBar>
//         <NewTopBar title="글쓰기" />
//         <RegisterBtn getPostData={getPostData} />
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
import axiosInstance from '../../../libs/AxiosInstance';
import NewTopBar from '../../../components/TopBar/NewTopBar';
import PotSelect from '../../../components/Community/PotSelect/PotSelect';
import WritePost, {
  WritePostHandle,
} from '../../../components/Community/WritePost/WritePost';
import * as S from './CommunityWrite.Style';
import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';

interface PotMembership {
  id: number;
  potName: string;
}

const CommunityWrite: React.FC = () => {
  const [selectedPot, setSelectedPot] = useState<string>('');
  const [ottOptions, setOttOptions] = useState<PotMembership[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const writePostRef = useRef<WritePostHandle>(null);

  useEffect(() => {
    const fetchOttOptions = async () => {
      try {
        const response = await axiosInstance.get(
          '/api/pot/application/user/pots/permission',
        );

        if (Array.isArray(response.data)) {
          const options = response.data.map((pot: PotMembership) => ({
            id: pot.id,
            potName: pot.potName,
          }));
          setOttOptions(options);
        } else {
          setOttOptions([]);
        }
      } catch (error) {
        setError('OTT options을 가져오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchOttOptions();
  }, []);

  const getPostData = () => {
    if (!writePostRef.current) return null;

    const { title, content, images } = writePostRef.current;
    const selectedPotObj = ottOptions.find(
      (pot) => pot.potName === selectedPot,
    );
    const potId = selectedPotObj ? selectedPotObj.id : null;

    if (!title || potId === null) {
      alert('제목과 POT을 선택해 주세요.');
      return null;
    }

    const postData = {
      title,
      content: content || '', // 빈 문자열로 대체
      images: images || [], // 이미지가 없을 경우 빈 배열로 전송
      potId,
    };

    console.log('Post Data from getPostData:', postData); // 로그 추가

    return postData;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <S.CommunityWrite>
      <S.TopBar>
        <NewTopBar title="글쓰기" />
        <RegisterBtn getPostData={getPostData} />
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
