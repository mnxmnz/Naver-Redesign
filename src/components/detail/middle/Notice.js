import React from 'react';
import styled from 'styled-components';

function Notice() {
  return (
    <NoticeWrap>
      <Title>공지</Title>
      <Content>ㆍ 스포츠 TV중계 편성 - 5/10(월)~5/17(월)</Content>
      <Content>ㆍ 티빙에서 유로2020을 생중계합니다.</Content>
    </NoticeWrap>
  );
}

const NoticeWrap = styled.div`
  width: 120rem;
  height: 6rem;
  margin-top: 6rem;
  display: flex;
  align-items: center;
  border: 1px solid #e0e3e7;
  background: ${({ theme }) => theme.background.sportsBannerBg};
`;

const Title = styled.div`
  margin-left: 2rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

const Content = styled.div`
  margin-left: 3rem;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8rem;
`;

export default Notice;
