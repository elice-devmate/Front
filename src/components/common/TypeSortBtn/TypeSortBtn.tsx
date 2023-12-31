import React from 'react';
import { Wrapper } from './TypeSortBtn.styled';
import projectIcon from 'assets/img/type-icon-project.svg';
import studyIcon from 'assets/img/type-icon-study.svg';

interface TypeSortBtnProps {
  type: 'STUDY' | 'PROJECT';
  isActive?: boolean;
  onClick: () => void;
}

const TypeSortBtn = ({ type, isActive = false, onClick }: TypeSortBtnProps) => (
  <Wrapper $isActive={isActive} onClick={onClick}>
    <div className="bg">
      <img src={type === 'STUDY' ? studyIcon : projectIcon} alt={`${type} 탭 보기`} />
    </div>
    <p>{type === 'STUDY' ? '스터디' : '프로젝트'}</p>
  </Wrapper>
);

export default TypeSortBtn;
