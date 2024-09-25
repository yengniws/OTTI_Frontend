import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import CommunityList from '../../components/Community/CommunityList/CommunityList';
import DropDown from '../../components/TopBar/DropDown';
import ActionButton from '../../components/common/ActionButton';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import * as S from './Community.Style';
import axiosInstance from '../../libs/AxiosInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Post : 게시글
interface Post {
  id: number;
  title: string;
  content: string;
  commentCount: number;
  userName: string;
  ottImage: string;
  createdDate: string;
}

// PaginatedPosts : 페이지네이션된 게시글 목록
interface PaginatedPosts {
  contents: Post[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
}

const Community = () => {
  const navigate = useNavigate();
  const [selectedOtt, setSelectedOtt] = useState<string>(''); // 선택된 OTT
  const [posts, setPosts] = useState<Post[]>([]); // 게시글 목록
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 번호
  const [totalPages, setTotalPages] = useState<number>(0); // 전체 페이지 수
  const [size, setSize] = useState<number>(10); // 페이지당 게시글 수

  const handleCreatePost = () => {
    navigate('/community-write');
  };

  // 게시글 페이지네이션 적용
  const fetchPosts = async (ottName: string) => {
    try {
      // 선택된 OTT 필터링, 없으면 전체
      const url = ottName
        ? `/api/post/filtering/${encodeURIComponent(ottName)}`
        : `/api/post`;

      const params = {
        currentPage: currentPage.toString(), // 현재 페이지 번호
        size: size.toString(), // 페이지당 게시글 수
      };

      const response = await axiosInstance.get<PaginatedPosts>(url, { params });

      const { contents, totalPages } = response.data; // 응답에서 데이터 추출
      setPosts(contents); // 게시글 목록 상태 업데이트
      setTotalPages(totalPages); // 전체 페이지 수 상태 업데이트
    } catch (error) {
      toast.error('게시글을 가져오는 데 실패했습니다.');
    }
  };

  // OTT 선택 시 선택된 OTT 업데이트 및 게시글 가져오기
  useEffect(() => {
    fetchPosts(selectedOtt); // OTT가 변경될 때마다 데이터를 가져옴
  }, [selectedOtt, currentPage, size]); // selectedOtt, currentPage, size가 변경될 때마다 실행

  // 페이지네이션을 위한 이전 페이지 핸들러
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // 현재 페이지가 1보다 크면 이전 페이지로 이동
    }
  };

  // 페이지네이션을 위한 다음 페이지 핸들러
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // 현재 페이지가 총 페이지 수보다 작으면 다음 페이지로 이동
    }
  };

  // 페이지네이션 렌더링 함수
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      // 전체 페이지 수만큼 반복
      pages.push(
        <S.PageNumber
          key={i}
          onClick={() => setCurrentPage(i)} // 페이지 클릭 시 현재 페이지 변경
          isCurrent={i === currentPage} // 현재 페이지 여부 전달
        >
          {i} {/* 페이지 번호 표시 */}
        </S.PageNumber>,
      );
    }
    return (
      <S.PaginationWrapper>
        <S.PaginationButton
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          {'<'}
        </S.PaginationButton>
        {pages}
        <S.PaginationButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </S.PaginationButton>
      </S.PaginationWrapper>
    );
  };

  return (
    <div>
      <S.Wrapper>
        <S.TitleWrapper>
          <DropDown onOttChange={setSelectedOtt} />
        </S.TitleWrapper>
        <S.CommuniyContainer>
          <Search />
          <CommunityList posts={posts} />
          {renderPagination()} {/* 페이지네이션 렌더링 */}
          <ActionButton text="글 작성" onClick={handleCreatePost} />
          <S.BottomNavBarWrapper>
            <BottomNavBar />
          </S.BottomNavBarWrapper>
        </S.CommuniyContainer>
      </S.Wrapper>
    </div>
  );
};

export default Community;
