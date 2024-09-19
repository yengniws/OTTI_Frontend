// src/pages/SearchResultsPage.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance';
import * as S from './SearchResultsPage.Style';
import CommunityList, {
  Post,
} from '../../components/Community/CommunityList/CommunityList';

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query') || '';

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() !== '') {
        setLoading(true);
        setError(null);

        try {
          const response = await axiosInstance.get('/api/post/search', {
            params: {
              title: searchQuery,
              page: 1,
              size: 11,
            },
          });

          const allPosts = Array.isArray(response.data.contents)
            ? response.data.contents
            : [];

          const filteredPosts = allPosts.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()),
          );

          setPosts(filteredPosts);
        } catch (error) {
          console.error('Failed to fetch search results', error);
          if (error instanceof Error) {
            setError('검색 결과를 가져오는 데 실패했습니다.');
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <S.Container>
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
    </S.Container>
  );
};

export default SearchResultsPage;
