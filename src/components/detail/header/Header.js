import React from 'react';
import styled from 'styled-components';
import NaverSportsLogo from '../../../assets/icons/NaverSportsLogo.svg';
import ButtonArrowDown from '../../../assets/icons/ButtonArrowDown.svg';
import IconUser from '../../../assets/icons/IconUser.svg';
import SearchToggle from '../../../assets/icons/SearchToggle.svg';
import IconAlarm from '../../../assets/icons/IconAlarm.svg';
import IconMail from '../../../assets/icons/IconMail.svg';
import IconGrid from '../../../assets/icons/IconGrid.svg';
import ImgMainBanner from '../../../assets/icons/ImgMainBanner.svg';
import ButtonLeft from '../../../assets/icons/ButtonLeft.svg';
import ButtonRight from '../../../assets/icons/ButtonRight.svg';
import IconComment from '../../../assets/icons/IconComment.svg';
import IconLike from '../../../assets/icons/IconLike.svg';
import IconShared from '../../../assets/icons/IconShared.svg';
import IconLookup from '../../../assets/icons/IconLookup.svg';

function Header() {
  return (
    <HeaderWrap>
      <div className="header__bar">
        <img className="header__bar--logo" src={NaverSportsLogo} alt="" />
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
          </span>
        </div>
      </div>
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
      <div className="main">
        <img className="main__button" src={ButtonLeft} alt="" />
        <div className="main__banner">
          <img className="main__banner--img" src={ImgMainBanner} alt="sample img" />
          <div className="main__banner--description">
            <h2>핫뉴스</h2>
            <h1>
              SON보다 더한 '양발잡이'가 나타
              <br />
              30골 중 '왼발 15골-오른발 15골'
            </h1>
            <h3>
              [스포탈코리아]김희웅 인턴기자=우스만뎀벨라뭐시기 어쩌구 저쩌구 요즈음 자꾸 밤마다 배가
              아픈데 이건 절대 응가가 아니구 진짜 그 위에 배 아픈거 뭔지 알지.. 알아죠... 교수님
              과제 멈춰..!!
            </h3>
            <div id="icons">
              <span id="comment">
                <img src={IconComment} alt="" />
                10
              </span>
              <span id="like">
                <img src={IconLike} alt="" />
                10
              </span>
              <span id="shared">
                <img src={IconShared} alt="" />
                10
              </span>
              <span id="lookup">
                <img src={IconLookup} alt="" />
                1990
              </span>
            </div>
          </div>
        </div>
        <img className="main__button" src={ButtonRight} alt="" />
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  .header {
    &__bar {
      padding-left: ${({ theme }) => theme.pcPadding.detail};
      padding-right: ${({ theme }) => theme.pcPadding.detail};
      background-color: ${({ theme }) => theme.main.mainNewsBlue};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 8rem;
      font-size: 1.6rem;
      letter-spacing: -0.08rem;
      color: ${({ theme }) => theme.main.mainNaverLightgray};

      &--logo {
        width: 25.8rem;
        height: 7.4rem;
      }

      &--menu {
        display: flex;
        align-items: center;

        span {
          display: flex;
          align-items: center;
          margin-left: 1.8rem;
          letter-spacing: -0.09rem;
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
        }
      }
    }
  }

  .top {
    &__menu {
      padding-left: ${({ theme }) => theme.pcPadding.detail};
      padding-right: ${({ theme }) => theme.pcPadding.detail};
      background-color: white;
      font-size: 1.6rem;
      letter-spacing: -0.08rem;
      font-weight: bold;
      height: 4.4rem;
      display: flex;
      align-items: center;
      box-shadow: 0 0 0.4rem 0;

      &--front {
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

  .main {
    padding-left: ${({ theme }) => theme.pcPadding.detail};
    padding-right: ${({ theme }) => theme.pcPadding.detail};
    background-color: ${({ theme }) => theme.background.sportsBannerBg};
    height: 40.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    &__button {
      width: 5.8rem;
      height: 5.8rem;
    }

    &__banner {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-right: 2.6rem;
      margin-left: 2.6rem;

      &--img {
        width: 54.6rem;
        height: 33rem;
        margin-right: 1.5rem;
      }

      &--description {
        width: 45.6rem;
        margin-left: 1.5rem;

        h2 {
          font-size: 2.4rem;
          font-weight: bold;
          color: ${({ theme }) => theme.main.mainNewsBlue};
          margin-bottom: 1.4rem;
          letter-spacing: -0.12rem;
        }

        h1 {
          font-size: 2.8rem;
          font-weight: bold;
          letter-spacing: -0.14rem;
          margin-bottom: 1.7rem;
          line-height: 2.8rem;
        }

        h3 {
          font-size: 1.6rem;
          letter-spacing: -0.08rem;
          line-height: 2.2rem;
          margin-bottom: 0.9rem;
        }

        #icons {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        #icons > span {
          margin-right: 2rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 1.4rem;
          letter-spacing: -0.028rem;

          img {
            margin-right: 0.4rem;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding-left: ${({ theme }) => theme.tabletPadding.detailHeader};
    padding-right: ${({ theme }) => theme.tabletPadding.detailHeader};
  }
`;

export default Header;
