import React from 'react';
import MainCard from '../footer/MainCard';
import SettingIcon from '../../../assets/icons/Setting.svg';
import LeftButton from '../../../assets/icons/LeftButton.svg';
import RightButton from '../../../assets/icons/RightButton.svg';
import styled from 'styled-components';

function Footer() {
  // 임의의 데이터 넣기 -> 서버 연결하면 데이터 받아서 넣기
  const cardData = {
    allWidth: '37.8rem',
    cardHeight: '48.8rem',
    imageHeight: '37.8rem',
    kindFontSize: '1.6rem',
    titleFontSize: '1.6rem',
    categoryFontSize: '1.5rem',
    /*임의의 데이터 넣음*/
    kind: '구단특집',
    title: '[IUFC TV] 3 - 1 승리! 원정 첫 승리를 팬분들께 바칩니다!  승리의 무인 퇴근캠',
    category: '인천유나이티드 IUFC TV',
    data: [0, 1, 2],
  };
  return (
    <FooterWrap>
      <div className="intro">
        <span className="intro__first">오늘 읽을만한 글</span>
        <span className="intro__second">주제별로 분류된 다양한 글 모음</span>
        <span className="intro__count-num">1,801</span>
        <span className="intro__count-text">개의 글</span>
        <span className="intro__setting">관심주제 설정</span>
        <img src={SettingIcon} className="intro__setting-icon" />
      </div>

      <div className="menu-container">
        <img src={LeftButton} className="menu__left-button" />
        <div className="menu">
          <div className="menu__elem">엔터</div>
          <div className="menu__elem">스포츠</div>
          <div className="menu__elem">자동차</div>
          <div className="menu__elem">웹툰</div>
          <div className="menu__elem">경제M</div>
          <div className="menu__elem">레시피</div>
          <div className="menu__elem">게임</div>
          <div className="menu__elem">영화</div>
        </div>
        <img src={RightButton} className="menu__right-button" />
      </div>

      <div className="detail-card">
        {cardData.data && cardData.data.map(() => <MainCard cardData={cardData} />)}
      </div>
      <div className="more">
        <img src={RightButton} className="more--button" />
        <div className="more--text">모든 스포츠 더보기</div>
      </div>
      <div className="footer">
        <div className="footer--info">공지사항</div>
        <div className="footer--creaters">
          <span className="footer--creaters__title">Creaters</span>
          <span className="footer--creaters__content">크리에이터</span>
          <span className="footer--creaters__content">스몰비즈니스</span>
        </div>
        <div className="footer--partners">
          <span className="footer--partners__title">Partners</span>
          <span className="footer--partners__content">비즈니스 · 광고</span>
          <span className="footer--partners__content">스토어 개설</span>
          <span className="footer--partners__content">지역업체 등록</span>
          <span className="footer--partners__content">엑스퍼트 등록</span>
        </div>
        <div className="footer--developers">
          <span className="footer--developers__title">Developers</span>
          <span className="footer--developers__content">네이버 개발자 센터</span>
          <span className="footer--developers__content">오픈 API</span>
          <span className="footer--developers__content">오픈소스</span>
          <span className="footer--developers__content">네이버 D2</span>
          <span className="footer--developers__content">네이버 D2SF</span>
          <span className="footer--developers__content">네이버 랩스</span>
        </div>
        <div className="footer--rest">
          <span className="footer--first--element">회사소개</span>
          <span className="footer--first--element">인재채용</span>
          <span className="footer--first--element">제휴제안</span>
          <span className="footer--first--element">이용약관</span>
          <span className="footer--first--element bold">개인정보처리방침</span>
          <span className="footer--first--element">청소년보호정책</span>
          <span className="footer--first--element">네이버 정책</span>
          <span className="footer--first--element">고객센터</span>
        </div>
      </div>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .intro {
    width: 120rem;
    height: 4rem;
    display: flex;
    align-items: center;
    &__first {
      font-weight: bold;
      width: 13.9rem;
      font-size: 1.9rem;
      /* line-height: 2.3rem; */
      letter-spacing: -0.05em;
      margin-right: 1.8rem;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &__second {
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
      width: 7.2rem;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
      padding-right: 1.6rem;
      border-right: 1px solid ${({ theme }) => theme.main.mainNaverLightgray};
      color: ${({ theme }) => theme.text.textSub};
    }
    &__setting {
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
    }
  }
  .menu-container {
    width: 120rem;
    height: 8rem;
    position: relative;
    margin-top: 2.2rem;
  }
  .menu {
    width: 114.2rem;
    height: 8rem;
    display: flex;
    border: 0.1rem solid ${({ theme }) => theme.main.mainNaverLightgray};
    margin-left: 2.9rem;
    &__elem {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.6rem;
      letter-spacing: -0.05em;
      color: ${({ theme }) => theme.text.textBlack};
      border-right: 0.1rem solid ${({ theme }) => theme.main.mainNaverLightgray};
    }
    &__left-button {
      position: absolute;
      bottom: 0.6rem;
    }
    &__right-button {
      position: absolute;
      right: 0rem;
      bottom: 0.6rem;
    }
  }
  .detail-card {
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 3.3rem;
    padding-bottom: 4.2rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.main.mainNaverLightgray};
  }
`;
