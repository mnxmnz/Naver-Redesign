import React from 'react';
import styled from 'styled-components';
import NewsStand from './NewsStand';
import Account from './Account';
import MainBannerImg from '../../../assets/icons/MainBannerImg.svg';

function MainBanner() {
  return (
    <MainBannerWrap>
      <NewsStand />
      <img className="banner__img--main" src={MainBannerImg} alt="" />
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

  .banner__img--main {
    width: 71.5rem;
    height: 25.8rem;
    margin-top: 9.2rem;
  }
`;
