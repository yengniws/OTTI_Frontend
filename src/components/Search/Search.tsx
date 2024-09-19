import React, { useState } from 'react';
import axiosInstance from '../../libs/AxiosInstance';
import { IoIosSearch } from 'react-icons/io';
import * as S from './Search.Style';
import CommunityList, {
  Post,
} from '../../components/Community/CommunityList/CommunityList';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 검색어 입력 시 상태 업데이트
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // 검색 버튼 클릭 시 동작
  const handleSearch = async () => {
    if (searchQuery.trim() !== '') {
      setLoading(true);
      setError(null); // 오류 초기화

      try {
        const response = await axiosInstance.get('/api/post/search', {
          params: {
            title: searchQuery,
            page: 1,
            size: 11,
          },
        });

        // API 응답 데이터 확인
        console.log('API Response:', response.data);

        // Ensure that response.data.contents is an array of Post objects
        const allPosts = Array.isArray(response.data.contents)
          ? response.data.contents
          : [];

        // Filter posts to only include those that match the search query
        const filteredPosts = allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()),
        );

        // 검색 결과만 설정
        setPosts(filteredPosts);
      } catch (error) {
        console.error('Failed to fetch search results', error);
        if (error instanceof Error) {
          setError('검색 결과를 가져오는 데 실패했습니다.');
        }
      } finally {
        setLoading(false);
      }
    } else {
      alert('검색어를 입력해주세요.');
    }
  };

  return (
    <>
      <S.SearchCont>
        <S.SearchInp
          placeholder="원하시는 OTT를 입력해보세요."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <S.SearchBtn onClick={handleSearch}>
          <IoIosSearch size={25} color="#757575" />
        </S.SearchBtn>
      </S.SearchCont>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <S.SearchResults>
          <p>검색 결과</p>
          <CommunityList posts={posts} />
        </S.SearchResults>
      )}
    </>
  );
};

export default Search;
