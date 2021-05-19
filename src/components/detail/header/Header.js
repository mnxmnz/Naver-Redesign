import React from 'react';
import styled from 'styled-components';
import NaverSportsLogo from '../../../assets/icons/NaverSportsLogo.svg';
import ButtonArrowDown from '../../../assets/icons/ButtonArrowDown.svg';
import IconUser from '../../../assets/icons/IconUser.svg';
import SearchToggle from '../../../assets/icons/SearchToggle.svg';
import IconAlarm from '../../../assets/icons/IconAlarm.svg';
import IconMail from '../../../assets/icons/IconMail.svg';
import IconGrid from '../../../assets/icons/IconGrid.svg';

function Header() {
  return (
    <HeaderWrap>
      <div className="header__top">
        <img className="header__top--logo" src={NaverSportsLogo} alt="" />
        <div className="header__top--menu">
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
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  padding-left: ${({ theme }) => theme.pcPadding.detail};
  padding-right: ${({ theme }) => theme.pcPadding.detail};
  background-color: ${({ theme }) => theme.main.mainNewsBlue};

  .header {
    &__top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 8rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.main.mainNaverLightgray};

      &--menu {
        display: flex;
        align-items: center;

        span {
          display: flex;
          align-items: center;
          margin-left: 1.8rem;
        }

        #etc--button {
          width: 2.1rem;
          height: 2.2rem;
          margin-left: 0.2rem;
        }

        #bold {
          font-weight: bold;
          font-size: 1.9rem;
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

  @media (max-width: 1200px) {
    padding-left: ${({ theme }) => theme.tabletPadding.detailHeader};
    padding-right: ${({ theme }) => theme.tabletPadding.detailHeader};
  }
`;

export default Header;
