import React from 'react';
import MainCard from '../../common/Card';
import SettingIcon from '../../../assets/icons/Setting.svg';
import LeftButton from '../../../assets/icons/LeftButton.svg';
import RightButton from '../../../assets/icons/RightButton.svg';
import styled from 'styled-components';
import FooterMenu from './FooterMenu';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { mainDataAtom } from '../../../states/atom';
import { useMediaQuery } from 'react-responsive';

function Footer() {
  const history = useHistory();
  const mainData = useRecoilValue(mainDataAtom);
  if (mainData.todayVideoRes) {
    console.log(mainData.todayVideoRes);
  }

  const isPc = useMediaQuery({
    query: '(min-width:1200px)',
  });

  const cardView = isPc ? 'mainDesktop' : 'mainTablet';

  const clickHandler = () => {
    history.push('/detail');
  };
  return (
    <FooterWrap>
      <div className="intro">
        <span className="intro__first">오늘 읽을만한 글</span>
        <span className="intro__second">주제별로 분류된 다양한 글 모음</span>
        <span className="intro__count-num">1,801</span>
        <span className="intro__count-text">개의 글</span>
        <span className="intro__setting">관심주제 설정</span>
        <img src={SettingIcon} className="intro__setting-icon" alt="" />
      </div>

      <div className="menu-container">
        <img src={LeftButton} className="menu__left-button" alt="" />
        <div className="menu">
          <div className="menu__elem">엔터</div>
          <div className="menu__elem menu__elem__sport">스포츠</div>
          <div className="menu__elem">자동차</div>
          <div className="menu__elem">웹툰</div>
          <div className="menu__elem">경제M</div>
          <div className="menu__elem">레시피</div>
          <div id="hidden" className="menu__elem">
            게임
          </div>
          <div id="hidden" className="menu__elem">
            영화
          </div>
        </div>
        <img src={RightButton} className="menu__right-button" alt="" />
      </div>
      <DetailCards>
        {mainData.todayVideoRes &&
          mainData.todayVideoRes.map(data => {
            return <MainCard data={data} cardView={cardView} />;
          })}
      </DetailCards>
      <div className="more">
        <img src={RightButton} className="more--button" alt="" onClick={clickHandler} />
        <div className="more--text">모든 스포츠 더보기</div>
      </div>
      <FooterMenu />
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 9.2rem;
  #hidden {
    @media (max-width: 1200px) {
      display: none;
    }
  }
  .intro {
    width: 120rem;
    height: 4rem;
    display: flex;
    align-items: center;
    @media (max-width: 1200px) {
      width: 110.4rem;
      height: 2.5rem;
    }
    &__first {
      font-weight: bold;
      width: 13.9rem;
      font-size: 1.9rem;
      @media (max-width: 1200px) {
        width: 20rem;
        margin-right: 1.8rem;
      }
      /* line-height: 2.3rem; */
      letter-spacing: -0.05em;
      margin-right: 1.8rem;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &__second {
      @media (max-width: 1200px) {
        width: 40rem;
        margin-right: 47rem;
      }
      width: 20rem;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
      margin-right: 63rem;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &__count-num {
      width: 3.3rem;
      font-weight: bold;
      font-size: 1.6rem;
      text-align: right;
      letter-spacing: -0.05em;
      margin-right: 0.4rem;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &__count-text {
      @media (max-width: 1200px) {
        width: 9rem;
      }
      width: 7.2rem;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
      padding-right: 1.6rem;
      border-right: 1px solid ${({ theme }) => theme.main.mainNaverLightgray};
      color: ${({ theme }) => theme.text.textSub};
    }
    &__setting {
      @media (max-width: 1200px) {
        width: 14rem;
      }
      width: 9.3rem;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
      margin-left: 1.6rem;
      color: ${({ theme }) => theme.text.textSub};
    }
    &__setting-icon {
      margin-left: 0.4rem;
      width: 4rem;
      height: 4rem;
      cursor: pointer;
    }
  }
  .menu-container {
    width: 120rem;
    height: 8rem;
    @media (max-width: 1200px) {
      width: 110.4rem;
      height: 8rem;
    }
    position: relative;
    margin-top: 2.2rem;
  }
  .menu {
    width: 114.2rem;
    height: 8rem;
    @media (max-width: 1200px) {
      width: 104.6rem;
    }
    display: flex;
    border: 0.1rem solid ${({ theme }) => theme.main.mainNaverLightgray};
    margin-left: 2.9rem;
    &__elem {
      width: 15.7rem;
      height: 7.9rem;
      @media (max-width: 1200px) {
        width: 17.4rem;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.6rem;
      letter-spacing: -0.05em;
      color: ${({ theme }) => theme.text.textBlack};
      border-right: 0.1rem solid ${({ theme }) => theme.main.mainNaverLightgray};
      &__sport {
        background-color: ${({ theme }) => theme.main.mainNewsBlue};
        color: ${({ theme }) => theme.text.textWhite};
      }
    }
    &__left-button {
      position: absolute;
      bottom: 0.6rem;
      cursor: pointer;
    }
    &__right-button {
      position: absolute;
      right: 0rem;
      bottom: 0.6rem;
      cursor: pointer;
    }
  }
  .more {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-top: 25.2rem;
    @media (max-width: 1200px) {
      margin-top: 19rem;
    }
    &--button {
      width: 5.8rem;
      height: 5.8rem;
      cursor: pointer;
    }
    &--text {
      margin-top: 0.642rem;
      font-size: 1.5rem;
      text-align: center;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.text.textBlack};
    }
  }
`;

const DetailCards = styled.div`
  position: relative;
  display: grid;
  width: 120rem;
  height: 48.8rem;
  @media (max-width: 1200px) {
    width: 110.4rem;
    height: 44rem;
    grid-template-columns: repeat(2, auto);
    overflow: hidden;
    column-gap: 2.2rem;
  }
  grid-template-columns: repeat(3, auto);
  column-gap: 3.3rem;
  padding-bottom: 4.2rem;
  margin-top: 2.4rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.main.mainNaverLightgray};
`;
