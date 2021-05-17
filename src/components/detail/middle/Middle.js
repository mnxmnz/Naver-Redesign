import React from 'react';
import styled from 'styled-components';

function Middle() {
  return (
    <MiddleWrap>
      <div>Detail - Middle</div>
    </MiddleWrap>
  );
}

export default Middle;

const MiddleWrap = styled.div`
  padding-left: ${({ theme }) => theme.pcPadding.detail};
  padding-right: ${({ theme }) => theme.pcPadding.detail};

  @media (max-width: 1200px) {
    padding-left: ${({ theme }) => theme.tabletPadding.detailMiddle};
    padding-right: ${({ theme }) => theme.tabletPadding.detailMiddle};
  }
`;
