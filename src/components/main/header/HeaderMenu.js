import React from 'react';
import styled from 'styled-components';
import NaverIcon from '../../../assets/icons/NaverIcon.svg';
import ButtonArrowDown from '../../../assets/icons/ButtonArrowDownBlack.svg';
import IconAlarm from '../../../assets/icons/IconAlarmBlack.svg';
import IconMail from '../../../assets/icons/IconMailBlack.svg';
import IconGrid from '../../../assets/icons/IconGridBlack.svg';
import IconUser from '../../../assets/icons/IconUser.svg';
import SearchToggle from '../../../assets/icons/SearchToggleBlack.svg';
import Hamburger from '../../../assets/icons/Hamburger.svg';

function HeaderMenu() {
  return (
    <HeaderMenuWrap>
      <img className="header__menu--logo" src={NaverIcon} alt="" />
      <div className="header__menu--list">
        <span id="main_menu">카페</span>
        <span id="main_menu">블로그</span>
        <span id="main_menu">지식iN</span>
        <span id="main_menu">쇼핑</span>
        <span>사전</span>
        <span>뉴스</span>
        <span>지도</span>
        <span>영화</span>
        더보기
        <img id="etc-button" src={ButtonArrowDown} alt="" />
        <img id="user-icon" src={IconUser} alt="" />
        령이
        <img id="user-toggle" src={SearchToggle} alt="" />
        <img className="menu" id="icon" src={IconAlarm} alt="" />
        <img className="menu" id="icon" src={IconMail} alt="" />
        <img className="menu" id="icon" src={IconGrid} alt="" />
        <img className="menu" id="bar" src={Hamburger} alt="" />
      </div>
    </HeaderMenuWrap>
  );
}

export default HeaderMenu;

const HeaderMenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 121.1rem;
  height: 8rem;

  @media (max-width: 1200px) {
    width: 111.5rem;
  }

  .header {
    &__menu {
      &--logo {
        width: 14.6rem;
        height: 2.717rem;
      }
      &--list {
        display: flex;
        align-items: center;
        font-size: 1.6rem;

        span {
          font-size: 1.9rem;
          font-weight: bold;
          margin-right: 1.8rem;
        }

        #main_menu {
          color: ${({ theme }) => theme.main.mainNaver};
        }

        #etc-button {
          width: 2.1rem;
          height: 2.2rem;
          margin-left: 0.2rem;
          margin-right: 1.8rem;
        }

        #user-icon {
          margin-right: 0.5rem;
          width: 3.4rem;
          height: 3.4rem;
        }

        #user-toggle {
          width: 1.746rem;
          height: 1.5rem;
          margin-right: 1.154rem;
        }

        .menu {
          width: 3.8rem;
          height: 3.8rem;
        }

        #icon {
          @media (max-width: 1200px) {
            display: none;
          }
        }

        #bar {
          display: none;
          @media (max-width: 1200px) {
            display: initial;
          }
        }
      }
    }
  }
`;
