import React from 'react';
import styled from 'styled-components';

function NewsCard({ index }) {
  return (
    <CardWrap>
      {/* {index.map(() => {
        return <img src={require(`../../../../assets/icons/NewsImg_${index}`)} alt=""></img>;
      })} */}
    </CardWrap>
  );
}

const CardWrap = styled.div`
  width: 20rem;
  height: 10.5rem;
  border: 1px solid ${({ theme }) => theme.main.mainNaverLightgray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NewsCard;
