import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderWrap>
      <div>Detail - Header</div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  padding-left: ${({ theme }) => theme.pcPadding.detail};
  padding-right: ${({ theme }) => theme.pcPadding.detail};

  @media (max-width: 1200px) {
    padding-left: ${({ theme }) => theme.tabletPadding.detailHeader};
    padding-right: ${({ theme }) => theme.tabletPadding.detailHeader};
  }
`;

export default Header;
