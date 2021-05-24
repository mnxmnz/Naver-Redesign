import React from 'react';
import styled from 'styled-components';
import PressHeader from './PressHeader';

function Press() {
  return (
    <PressWrap>
      <PressHeader />
    </PressWrap>
  );
}

const PressWrap = styled.div`
  width: 120rem;
  height: 29.6rem;
  margin-bottom: 6.5rem;
  background-color: ${({ theme }) => theme.main.mainNaverLightgray};
`;

export default Press;
