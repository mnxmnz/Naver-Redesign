import React from 'react';
import styled from 'styled-components';
import Advertisement from './Advertisement';
import Press from './press/Press';

function Middle() {
  return (
    <MiddleWrap>
      <div>
        <Press />
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
