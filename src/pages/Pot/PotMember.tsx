import React, { useEffect, useState } from 'react';
import * as S from './PotMember.Style';
import NewTopBar from '../../components/Topbar/NewTopBar';
import { IoIosLogOut } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom'; // potId 가져오기
import axiosInstance from '../../libs/AxiosInstance';
import 'react-toastify/dist/ReactToastify.css';

const PotMember: React.FC = () => {
  const { potId } = useParams();
  const [members, setMembers] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null); // 방출할 유저의 ID 저장

  const handlePotOutClick = (userId: number) => {
    setSelectedUserId(userId); // 방출할 유저 ID 저장
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUserId(null); // 모달 닫을 때 선택된 유저 ID 초기화
  };

  const handleConfirmPotOut = async () => {
    if (selectedUserId !== null && potId !== undefined) {
      // potId 유효성도 함께 체크
      try {
        // delete 요청을 보낼 때, userId는 path parameter로, potId는 query parameter로 전달
        await axiosInstance.delete(`/api/pot/user/${selectedUserId}`, {
          params: { potId }, // axios의 params 옵션으로 query parameter 전달
        });
        toast.success('방출되었습니다.');

        // 성공적으로 방출된 유저를 멤버 목록에서 제거
        setMembers((prevMembers) =>
          prevMembers.filter((member) => member.user.id !== selectedUserId),
        );
      } catch (error) {
        // 에러 발생 시 toast로 에러 메시지 출력
        toast.error(
          `방출에 실패했습니다: ${error.response?.data?.message || error.message}`,
        );
        console.error('방출 에러:', error);
      }
      setIsModalOpen(false);
      setSelectedUserId(null); // 성공적으로 방출 후 선택된 ID 초기화
    } else {
      // userId 또는 potId가 유효하지 않은 경우
      toast.error('유효하지 않은 요청입니다.');
    }
  };

  // 중복 유저 제거 함수
  const removeDuplicateMembers = (members: any[]) => {
    const uniqueMembers = members.filter(
      (member, index, self) =>
        index === self.findIndex((m) => m.user.id === member.user.id),
    );
    return uniqueMembers;
  };

  // API 호출하여 멤버 리스트 가져오기
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/pot/application/pot/${potId}/users/approve`,
        );
        const uniqueMembers = removeDuplicateMembers(response.data);
        setMembers(uniqueMembers);
        console.log(uniqueMembers);
      } catch (error) {
        console.error('멤버 목록 불러오기 에러:', error);
      }
    };

    if (potId) {
      fetchMembers();
    }
  }, [potId]);

  return (
    <S.PotMemberContainer>
      <S.TitleWrapper>
        <NewTopBar title="멤버" />
      </S.TitleWrapper>

      <S.PotMemberWrapper>
        {members.map((member) => (
          <S.MemberItem key={member.id}>
            <S.MemberImg
              src={member.user.profilePhotoUrl}
              alt={member.user.username}
            />
            <S.MemberNickname>{member.user.username}</S.MemberNickname>
            {member.hasPermission ? (
              <S.LeaderBadge>방장</S.LeaderBadge>
            ) : (
              <IoIosLogOut
                size={30}
                onClick={() => handlePotOutClick(member.user.id)}
              /> // 방출 버튼 클릭 시 userId 전달
            )}
          </S.MemberItem>
        ))}
      </S.PotMemberWrapper>

      {isModalOpen && (
        <S.ModalOverlay>
          <S.Modal>
            <S.ModalText>방출하시겠습니까?</S.ModalText>
            <S.ModalButtonWrapper>
              <S.ModalButton onClick={handleCloseModal} color="#222222">
                아니오
              </S.ModalButton>
              <S.ModalButton onClick={handleConfirmPotOut} color="#EA4335">
                네
              </S.ModalButton>
            </S.ModalButtonWrapper>
          </S.Modal>
        </S.ModalOverlay>
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar
      />
    </S.PotMemberContainer>
  );
};

export default PotMember;
