import React from 'react';
import styled from 'styled-components';
import NewsHeader from './NewsHeader';
import NewsCard from './NewsCard';

function News() {
  const index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <NewsWrap>
      <NewsHeader />
      <NewsList>
        {index.map((i, idx) => {
          return <NewsCard index={i} key={idx} />;
        })}
      </NewsList>
    </NewsWrap>
  );
}

const NewsWrap = styled.div`
  width: 120rem;
  height: 29.6rem;
  margin-top: 6rem;
`;

const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  margin-top: 1.5rem;
`;

export default News;
