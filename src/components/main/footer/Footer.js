import React from 'react';
import MainCard from '../footer/MainCard';
import SettingIcon from '../../../assets/icons/Setting.svg';
import LeftButton from '../../../assets/icons/LeftButton.svg';
import RightButton from '../../../assets/icons/RightButton.svg';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrap>
      <div className="intro">
        <span className="intro__first">오늘 읽을만한 글</span>
        <span className="intro__second">주제별로 분류된 다양한 글 모음</span>
        <span className="intro__count-num">1,801</span>
        <span className="intro__count-text">개의 글</span>
        <span className="intro__setting">관심주제 설정</span>
        <img src={SettingIcon} className="intro__setting-icon" x />
      </div>
      <div className="menu-container">
        <img src={LeftButton} className="menu__left-button" />
        <div className="menu">
          <div className="menu__entertain">엔터</div>
          <div className="menu__sport">스포츠</div>
          <div className="menu__car">자동차</div>
          <div className="menu__webtoon">웹툰</div>
          <div className="menu__economy">경제M</div>
          <div className="menu__recipe">레시피</div>
          <div className="menu__game">게임</div>
          <div className="menu__movie">영화</div>
        </div>
        <img src={RightButton} className="menu__right-button" />
      </div>
      <div className="detail-card">
        {/* map돌려서 detailCard에서 3개 불러올 예정 -> grid 이용 , 값으로 보낼 것 ) 이미지 사이즈 , 카테고리 + 폰트 사이즈 , 제목 + 폰트 사이즈, 메뉴 + 폰트사이즈 */}
      </div>
      <div className="more">
        <img src={RightButton} className="more--button" />
        <div className="more--text">모든 스포프 더보기</div>
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
  .intro {
    &__first {
      font-weight: bold;
      font-size: 19px;
      line-height: 23px;
      letter-spacing: -0.05em;

      /* text/text_black */

      color: #202020;
    }
    &__second {
      font-size: 15px;
      line-height: 18px;
      /* identical to box height */

      letter-spacing: -0.02em;

      /* text/text_black */

      color: #202020;
    }
    &__count-num {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      text-align: right;
      letter-spacing: -0.05em;

      /* text/text_black */

      color: #202020;
    }
    &__count-text {
      font-size: 15px;
      line-height: 18px;
      /* identical to box height */

      letter-spacing: -0.02em;

      /* text/text_sub */

      color: #8c8c8c;
    }
    &__setting {
      font-size: 15px;
      line-height: 18px;
      /* identical to box height */

      letter-spacing: -0.02em;

      /* text/text_sub */

      color: #8c8c8c;
    }
    &__setting-icon {
      width: 18px;
      height: 18px;
    }
  }
`;
