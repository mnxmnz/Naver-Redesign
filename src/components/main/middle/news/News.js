import React from 'react';
import styled from 'styled-components';
import NewsHeader from './NewsHeader';
import NewsCard from './NewsCard';
import { ReactComponent as Button } from '../../../../assets/icons/ButtonDown.svg';

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
      <StyledButton>
        <Button />
      </StyledButton>
    </NewsWrap>
  );
}

const NewsWrap = styled.div`
  width: 120rem;
  height: 29.6rem;
  margin-top: 6rem;
  position: relative;

  @media (max-width: 1200px) {
    width: 110.4rem;
    height: 39.7rem;
  }
`;

const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  margin-top: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, auto);
  }
`;

const StyledButton = styled.div`
  position: absolute;
  top: 23.75rem;
  left: 56.75rem;

  @media (max-width: 1200px) {
    top: 34rem;
    left: 51.9rem;
  }
`;

export default News;
