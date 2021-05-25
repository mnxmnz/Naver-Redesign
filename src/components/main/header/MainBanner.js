import React from 'react';
import styled from 'styled-components';
import NewsStand from './NewsStand';
import Account from './Account';

function MainBanner() {
  return (
    <MainBannerWrap>
      <NewsStand />
      <Account />
    </MainBannerWrap>
  );
}

export default MainBanner;

const MainBannerWrap = styled.div`
  background-color: ${({ theme }) => theme.searchBanner.searchBg};
  height: 58rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
