import React from 'react';
import styled from 'styled-components';
import NaverIcon from '../../../assets/icons/NaverIcon.svg';
import ButtonArrowDown from '../../../assets/icons/ButtonArrowDownBlack.svg';
import IconAlarm from '../../../assets/icons/IconAlarmBlack.svg';
import IconMail from '../../../assets/icons/IconMailBlack.svg';
import IconGrid from '../../../assets/icons/IconGridBlack.svg';
import IconUser from '../../../assets/icons/IconUser.svg';
import SearchToggle from '../../../assets/icons/SearchToggleBlack.svg';

function HeaderMenu() {
  return (
    <HeaderMenuWrap>
      <img className="header__menu--logo" src={NaverIcon} alt="" />
      <div className="header__menu--list">
        <span id="main">카페</span>
        <span id="main">블로그</span>
        <span id="main">지식iN</span>
        <span id="main">쇼핑</span>
        <span id="middle">사전</span>
        <span id="middle">뉴스</span>
        <span id="middle">지도</span>
        <span id="middle">영화</span>
        더보기
        <img id="etc__button" src={ButtonArrowDown} alt="" />
        <img id="etc__user--icon" src={IconUser} alt="" />
        령이
        <img id="etc__user--toggle" src={SearchToggle} alt="" />
        <img id="etc__menu--icon" src={IconAlarm} alt="" />
        <img id="etc__menu--icon" src={IconMail} alt="" />
        <img id="etc__menu--icon" src={IconGrid} alt="" />
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

        #etc__button {
          width: 2.1rem;
          height: 2.2rem;
          margin-left: 0.2rem;
          margin-right: 1.8rem;
        }

        #etc__user--icon {
          margin-right: 0.5rem;
          width: 3.4rem;
          height: 3.4rem;
        }

        #etc__menu--icon {
          width: 3.8rem;
          height: 3.8rem;
        }
      }
    }
  }
`;
