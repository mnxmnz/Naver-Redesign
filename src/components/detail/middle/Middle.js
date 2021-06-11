import React from 'react';
import styled from 'styled-components';
import SubArticle from './SubArticle';
import Notice from './Notice';

function Middle() {
  const index = [0, 1, 2, 3, 4, 5];

  return (
    <MiddleWrap>
      {index.map((i, idx) => {
        return <SubArticle key={idx} index={i} />;
      })}
      <Notice />
    </MiddleWrap>
  );
}

const MiddleWrap = styled.div`
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Middle;
