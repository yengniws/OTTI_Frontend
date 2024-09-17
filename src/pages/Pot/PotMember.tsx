import React, { useState } from 'react';
import * as S from './PotMember.Style';
import NewTopBar from '../../components/topbar/NewTopBar';
import { IoIosLogOut } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const members = [
  { nickname: '닉네임1', isLeader: true },
  { nickname: '닉네임2', isLeader: false },
  { nickname: '닉네임3', isLeader: false },
];

const PotMember: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePotOutClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmPotOut = () => {
    toast.success('방출되었습니다.');
    setIsModalOpen(false);
  };

  return (
    <S.PotMemberContainer>
      <S.TitleWrapper>
        <NewTopBar title="멤버" />
      </S.TitleWrapper>
      <S.PotMemberWrapper>
        {members.map((member, index) => (
          <S.MemberItem key={index}>
            <S.MemberImg />
            <S.MemberNickname>{member.nickname}</S.MemberNickname>
            {member.isLeader ? (
              <S.LeaderBadge>방장</S.LeaderBadge>
            ) : (
              <IoIosLogOut size={30} onClick={handlePotOutClick} />
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
