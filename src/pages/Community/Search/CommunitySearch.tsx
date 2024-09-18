import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../libs/AxiosInstance';
import { useLocation } from 'react-router-dom';
import CommunityList, {
  Post,
} from '../../../components/Community/CommunityList/CommunityList';
import * as S from './CommunitySearch.Style';

const CommunitySearch: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  // 쿼리 파라미터에서 검색어 가져오기
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query') || '';

  useEffect(() => {
    const fetchPosts = async () => {
      if (searchQuery) {
        setLoading(true);
        try {
          const response = await axiosInstance.get('/api/post/search', {
            params: {
              title: searchQuery,
              page: 1,
              size: 11,
            },
          });

          const fetchedPosts = response.data.contents || [];
          setPosts(fetchedPosts);
        } catch (error) {
          console.error('Failed to fetch search results', error);
          setError('검색 결과를 가져오는 데 실패했습니다.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPosts();
  }, [searchQuery]);

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
    <S.SearchContainer>
      <h1>검색 결과</h1>
      <CommunityList posts={posts} />
    </S.SearchContainer>
  );
};

export default CommunitySearch;
