import React from 'react';
import styled from 'styled-components';
import NaverIconAccount from '../../../assets/icons/NaverIconAccount.svg';
import IconAccount from '../../../assets/icons/IconAccount.svg';
import IconJoin from '../../../assets/icons/IconJoin.svg';
import IconWeather from '../../../assets/icons/IconWeather.svg';

function Account() {
  return (
    <AccountWrap>
      <div className="container__login">
        <img className="container__login--logo" src={NaverIconAccount} alt="" />
        <span>로그인</span>
      </div>
      <div className="container__account">
        <div className="container__account--look">
          <img id="icon" src={IconAccount} alt="" />
          <span>아이디 · 비밀번호찾기</span>
        </div>
        <div className="container__account--join">
          <img id="icon" src={IconJoin} alt="" />
          <span>회원가입</span>
        </div>
      </div>
      <div className="container__weather">
        <div className="container__weather--summary">
          <img id="icon" src={IconWeather} alt="" />
          <span id="number">16.4°</span>
          <span id="string">흐림</span>
        </div>
        <div className="container__weather--temp">
          <span id="min">13.0°</span>
          <span>/</span>
          <span id="max">28.0°</span>
        </div>
        <div className="container__weather--location">가리봉</div>
      </div>
    </AccountWrap>
  );
}

export default Account;

const AccountWrap = styled.div`
  width: 120rem;
  height: 8rem;
  margin-top: -4rem;
  background-color: ${({ theme }) => theme.background.boxBg};
  display: flex;
  flex: row;
  border-radius: 0.4rem;
  @media (max-width: 1200px) {
    width: 110.4rem;
  }

  .container {
    &__login {
      background-color: ${({ theme }) => theme.main.mainNaver};
      width: 33.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.4rem 0rem 0rem 0.4rem;

      img {
        width: 8.6rem;
        height: 1.754rem;
      }

      span {
        color: white;
        font-size: 1.9rem;
        letter-spacing: -0.095rem;
        font-weight: bold;
        margin-left: 1rem;
      }
    }

    &__account {
      display: flex;
      flex-direction: row;
      align-items: center;

      &--look {
        border-right: 0.1rem solid;
        border-color: ${({ theme }) => theme.main.mainNaverLightgray};
      }

      &--look,
      &--join {
        height: 6.2rem;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        letter-spacing: -0.03rem;
        margin-top: 0.8rem;
        margin-bottom: 1rem;

        #icon {
          width: 3.9rem;
          height: 3.9rem;
          margin-left: 2.7rem;
          @media (max-width: 1200px) {
            margin-left: 1.9rem;
          }
        }

        span {
          word-spacing: 0.9rem;
          margin-right: 4rem;
          @media (max-width: 1200px) {
            margin-right: 3.2rem;
          }
        }
      }
    }

    &__weather {
      margin-left: 17rem;
      margin-right: 3.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.6rem;
      letter-spacing: -0.08rem;
      @media (max-width: 1200px) {
        margin-left: 9.8rem;
      }

      &--summary {
        display: flex;
        align-items: center;

        #icon {
          width: 3rem;
          height: 2.4rem;
          padding-bottom: 0.6rem;
          padding-right: 0.8rem;
        }

        span {
          margin-right: 1rem;
          font-weight: bold;
        }
      }

      &--temp {
        span {
          margin-right: 0.6rem;
          margin-left: 0.6rem;
        }

        #min {
          color: ${({ theme }) => theme.main.mainNaverBlue};
        }

        #max {
          color: ${({ theme }) => theme.main.mainNaverRed};
        }
      }

      &--location {
        color: #828282;
      }
    }
  }
`;
