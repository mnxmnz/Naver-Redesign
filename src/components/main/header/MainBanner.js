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

const MainBannerWrap = styled.div``;
