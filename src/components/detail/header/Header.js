import React, { useState } from 'react';
import styled from 'styled-components';
import BannerNews from '../../common/BannerNews';
import NaverSportsLogo from '../../../assets/icons/NaverSportsLogo.svg';
import ButtonArrowDown from '../../../assets/icons/ButtonArrowDown.svg';
import IconUser from '../../../assets/icons/IconUser.svg';
import SearchToggle from '../../../assets/icons/SearchToggle.svg';
import IconAlarm from '../../../assets/icons/IconAlarm.svg';
import IconMail from '../../../assets/icons/IconMail.svg';
import IconGrid from '../../../assets/icons/IconGrid.svg';
import HamburgerWhite from '../../../assets/icons/HamburgerWhite.svg';
import ButtonLeft from '../../../assets/icons/ButtonLeft.svg';
import ButtonRight from '../../../assets/icons/ButtonRight.svg';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { sportsDataAtom } from '../../../states/atom';

function Header() {
  const history = useHistory();
  const detailData = useRecoilValue(sportsDataAtom);
  const [newsNum, setNewsNum] = useState(0);

  const loadNextNews = () => {
    setNewsNum((newsNum + 1) % 5);
  };

  const loadPrevNews = () => {
    if (newsNum === 0) {
      setNewsNum(4);
    }

    if (newsNum > 0) {
      setNewsNum(newsNum - 1);
    }
  };

  const clickHandler = () => {
    history.push('/');
  };

  return (
    <HeaderWrap>
      <div className="header__wrap">
        <div className="header__bar">
          <img className="header__bar--logo" src={NaverSportsLogo} alt="" onClick={clickHandler} />
          <div className="header__bar--menu">
            <span id="bold">카페</span>
            <span id="bold">블로그</span>
            <span id="bold">지식iN</span>
            <span id="bold">쇼핑</span>
            <span>
              더보기
              <img id="etc--button" src={ButtonArrowDown} alt="" />
            </span>
            <span>
              <img id="user--icon" src={IconUser} alt="" />
              령이
              <img id="user--toggle" src={SearchToggle} alt="" />
            </span>
            <span>
              <img id="icons" src={IconAlarm} alt="" />
              <img id="icons" src={IconMail} alt="" />
              <img id="icons" src={IconGrid} alt="" />
              <img id="tablet" src={HamburgerWhite} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="top__wrap">
        <div className="top__menu">
          <div className="top__menu--front">
            <span id="clicked">스포츠홈</span>
            <span id="un_clicked">야구</span>
            <span id="un_clicked">해외야구</span>
            <span id="un_clicked">축구</span>
            <span id="un_clicked">해외축구</span>
            <span id="un_clicked">농구</span>
            <span id="un_clicked">배구</span>
            <span id="un_clicked">골프</span>
            <span id="un_clicked">일반</span>
            <span id="un_clicked">e스포츠&게임</span>
          </div>
          <span id="center-bar">|</span>
          <div className="top__menu--back">
            <span>오늘의 경기</span>
            <span>연재</span>
            <span>랭킹</span>
          </div>
        </div>
      </div>
      <div className="main">
        <img className="main__button" id="left" src={ButtonLeft} alt="" onClick={loadPrevNews} />
        {detailData && detailData.news && (
          <BannerNews className="main__image" data={detailData.news[newsNum]} />
        )}
        <img className="main__button" id="right" src={ButtonRight} alt="" onClick={loadNextNews} />
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  .header {
    /* header부분 flex제어 */
    &__wrap {
      background-color: ${({ theme }) => theme.main.mainNewsBlue};
      display: flex;
      justify-content: center;
      width: 100%;
    }
    &__bar {
      width: 118.9rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 8rem;
      font-size: 1.6rem;
      letter-spacing: -0.08rem;
      color: ${({ theme }) => theme.main.mainNaverLightgray};
      @media (max-width: 1200px) {
        margin-right: 3.6rem;
      }

      &--logo {
        width: 25.8rem;
        height: 7.4rem;
        cursor: pointer;
        @media (max-width: 1200px) {
          margin-left: 4.1rem;
        }
      }

      &--menu {
        display: flex;
        align-items: center;

        span {
          display: flex;
          align-items: center;
          margin-left: 1.8rem;
          letter-spacing: -0.09rem;
          @media (max-width: 1200px) {
            margin-left: 1.254rem;
          }
        }

        #etc--button {
          width: 2.1rem;
          height: 2.2rem;
          margin-left: 0.2rem;
        }

        #bold {
          font-weight: bold;
          font-size: 1.9rem;
          letter-spacing: -0.095rem;
        }

        #user--icon {
          width: 3.4rem;
          height: 3.4rem;
          margin-right: 0.5rem;
        }

        #icons {
          width: 3.8rem;
          height: 3.8rem;
          @media (max-width: 1200px) {
            display: none;
          }
        }

        #tablet {
          display: none;
          @media (max-width: 1200px) {
            display: initial;
            width: 3.8rem;
            height: 3.9rem;
          }
        }
      }
    }
  }
  /*top__menu부분 flex 제어  */
  .top__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .top {
    &__menu {
      width: 118.9rem;
      background-color: white;
      font-size: 1.6rem;
      letter-spacing: -0.08rem;
      font-weight: bold;
      height: 4.4rem;
      display: flex;
      align-items: center;

      &--front {
        @media (max-width: 1200px) {
          margin-left: 6.1rem;
        }
        span {
          margin-left: 2rem;
          padding-bottom: 0.9rem;
        }

        #clicked {
          color: ${({ theme }) => theme.main.mainNewsBlue};
          border-bottom: 0.3rem solid;
        }
      }

      #center-bar {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        padding-bottom: 0.45rem;
        color: #e4e4e4;
      }

      &--back {
        span {
          margin-right: 2rem;
          color: #737373;
        }
      }
    }
  }
  /* main부분 flex제어 */
  .main {
    background-color: ${({ theme }) => theme.background.sportsBannerBg};
    display: flex;
    justify-content: center;
    /* width: 120rem; */
    height: 40.8rem;
    align-items: center;
    @media (max-width: 1200px) {
      height: 42.9rem;
    }

    &__button {
      width: 5.8rem;
      height: 5.8rem;
      cursor: pointer;
      #left {
        margin-left: 10rem;
      }
      @media (max-width: 1200px) {
        #left {
          margin-left: 2.05rem;
        }
        #right {
          margin-right: 2.05rem;
        }
      }
    }
  }
`;

export default Header;
