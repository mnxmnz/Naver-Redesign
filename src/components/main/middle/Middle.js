import React from 'react';
import styled from 'styled-components';
import Advertisement from './Advertisement';
import News from './news/News';

function Middle() {
  return (
    <MiddleWrap>
      <div>
        <News />
        <Advertisement />
      </div>
    </MiddleWrap>
  );
}

const MiddleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Middle;
