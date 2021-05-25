import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    <HeaderWrap>
      <HeaderMenu />
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
