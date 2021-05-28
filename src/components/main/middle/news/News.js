import React from 'react';
import styled from 'styled-components';
import NewsHeader from './NewsHeader';

function News() {
  return (
    <NewsWrap>
      <NewsHeader />
    </NewsWrap>
  );
}

const NewsWrap = styled.div`
  width: 120rem;
  height: 29.6rem;
  margin-top: 6rem;
  background-color: ${({ theme }) => theme.main.mainNaverLightgray};
`;

export default News;
