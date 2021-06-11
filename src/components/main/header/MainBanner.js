import React from 'react';
import styled from 'styled-components';
import NewsStand from './NewsStand';
import MainBannerImg from '../../../assets/icons/MainBannerImg.svg';

function MainBanner() {
  return (
    <MainBannerWrap>
      <NewsStand />
      <img className="banner__img--main" src={MainBannerImg} alt="" />
    </MainBannerWrap>
  );
}

export default MainBanner;

const MainBannerWrap = styled.div`
  background-color: ${({ theme }) => theme.searchBanner.searchBg};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner__img--main {
    width: 71.5rem;
    height: 25.8rem;
    margin-top: 9.2rem;
    margin-bottom: 16.2rem;
    @media (max-width: 1200px) {
      height: 28.4rem;
      margin-top: 15rem;
      margin-bottom: 21.8rem;
    }
  }
`;
