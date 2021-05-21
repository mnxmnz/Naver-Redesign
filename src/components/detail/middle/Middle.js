import React from 'react';
import styled from 'styled-components';
import SubArticle from './SubArticle';
import Notice from './Notice';

function Middle() {
  const index = [0, 1, 2, 3, 4, 5];

  return (
    <MiddleWrap>
      {index.map(() => {
        return <SubArticle key={index} />;
      })}
      <Notice />
    </MiddleWrap>
  );
}

export default Middle;

const MiddleWrap = styled.div`
  margin-top: 1.8rem;
  padding-left: ${({ theme }) => theme.pcPadding.detail};
  padding-right: ${({ theme }) => theme.pcPadding.detail};

  @media (max-width: 1200px) {
    padding-left: ${({ theme }) => theme.tabletPadding.detailMiddle};
    padding-right: ${({ theme }) => theme.tabletPadding.detailMiddle};
  }
`;
