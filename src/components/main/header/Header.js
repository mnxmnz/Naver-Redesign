import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import MainBanner from './MainBanner';
import Account from './Account';

function Header() {
  return (
    <HeaderWrap>
      <HeaderMenu />
      <MainBanner />
      <Account />
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
