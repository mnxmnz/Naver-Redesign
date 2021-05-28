import React from 'react';
import ArrowButton from '../../../assets/icons/ButtonArrow.svg';
import styled from 'styled-components';

function FooterMenu() {
  return (
    <FooterWrap>
      <div className="footer">
        <div className="footer--first">
          <div className="footer--first__info">공지사항</div>
          <div className="footer--first__right">
            <div className="footer--first__service">서비스 전체보기</div>
            <img src={ArrowButton} className="footer--first__icon" alt="" />
          </div>
        </div>
        <div className="footer--creaters">
          <span className="footer--title">Creaters</span>
          <span className="footer--content">크리에이터</span>
          <span className="footer--lastcontent">스몰비즈니스</span>
        </div>
        <div className="footer--partners">
          <span className="footer--title">Partners</span>
          <span className="footer--content">비즈니스 · 광고</span>
          <span className="footer--content">스토어 개설</span>
          <span className="footer--content">지역업체 등록</span>
          <span className="footer--lastcontent">엑스퍼트 등록</span>
        </div>
        <div className="footer--developers">
          <span className="footer--title">Developers</span>
          <span className="footer--content">네이버 개발자 센터</span>
          <span className="footer--content">오픈 API</span>
          <span className="footer--content">오픈소스</span>
          <span className="footer--content">네이버 D2</span>
          <span className="footer--content">네이버 D2SF</span>
          <span className="footer--lastcontent">네이버 랩스</span>
        </div>
        <div className="footer--rest">
          <span className="footer--content">회사소개</span>
          <span className="footer--content">인재채용</span>
          <span className="footer--content">제휴제안</span>
          <span className="footer--content">이용약관</span>
          <span className="bold footer--content">개인정보처리방침</span>
          <span className="footer--content">청소년보호정책</span>
          <span className="footer--content">네이버 정책</span>
          <span className="footer--lastcontent">고객센터</span>
        </div>
      </div>
    </FooterWrap>
  );
}

export default FooterMenu;

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .footer {
    margin-top: 10.1rem;
    width: 100%;
    height: 32.7rem;
    background: ${({ theme }) => theme.box.boxBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* footer의 공통 스타일링은 따로 제어*/
    &--title {
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2.4rem;
      letter-spacing: -0.05em;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &--content {
      cursor: pointer;
      padding-right: 0.7rem;
      padding-left: 0.7rem;
      border-right: 0.1rem solid ${({ theme }) => theme.text.textBlack};
      font-size: 1.5rem;
      line-height: 1.8rem;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &--lastcontent {
      cursor: pointer;
      padding-right: 0.7rem;
      padding-left: 0.7rem;
      font-size: 1.5rem;
      line-height: 1.8rem;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.text.textBlack};
    }

    /* 공통 스타일링 제외한 스타일 각각 제어 */
    &--first {
      width: 120rem;
      height: 2.1rem;
      margin-bottom: 2.1rem;
      display: flex;
      align-items: space-between;
      justify-content: space-between;
      &__info {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 1.8rem;
        letter-spacing: -0.02em;
        color: ${({ theme }) => theme.text.textBlack};
      }
      &__right {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 12.1rem;
      }
      &__service {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 1.8rem;
        letter-spacing: -0.02em;
        color: ${({ theme }) => theme.text.textBlack};
      }
      &__icon {
        width: 2.1rem;
        height: 2.1rem;
        padding-bottom: 0.6rem;
        cursor: pointer;
      }
    }
    &--creaters {
      width: 120rem;
      padding-top: 1.192rem;
      border-top: 0.1rem solid ${({ theme }) => theme.main.mainNaverLightgray};
    }
    &--partners {
      width: 120rem;
      margin-top: 0.9rem;
    }
    &--developers {
      width: 120rem;
      margin-top: 0.9rem;
    }
    &--rest {
      margin-left: -1.4rem;
      margin-top: 6rem;
      width: 120rem;
    }
  }
`;
