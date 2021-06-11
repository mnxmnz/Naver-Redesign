import React from 'react';
import styled from 'styled-components';
import NaverIcon from '../../../assets/icons/NaverIcon.svg';

function FooterMenu() {
  return (
    <FooterMenuWrap>
      <div className="footer">
        <div className="footer--first">
          <span className="footer--first__element">회사소개</span>
          <span className="footer--first__element">인재채용</span>
          <span className="footer--first__element">제휴제안</span>
          <span className="footer--first__element">이용약관</span>
          <span className="footer--first__element bold">개인정보처리방침</span>
          <span className="footer--first__element">청소년보호정책</span>
          <span className="footer--first__element">네이버 정책</span>
          <span className="footer--first__lastelement">고객센터</span>
        </div>
        <div className="footer--second">
          본 콘텐츠의 저작권은 네이버 및 제공처에 있으며, 이를 이용하는 경우 저작권법 등에 따라
          법적책임을 질 수 있습니다.
        </div>
        <div className="footer--last">
          <img src={NaverIcon} className="footer--last__navericon" alt="" />
          <div className="footer--last__copyright">
            <span>Copyright </span>
            <span className="bold">ⓒ NAVER corp. </span>
            <span>All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </FooterMenuWrap>
  );
}

const FooterMenuWrap = styled.div`
  .bold {
    font-weight: bold;
  }
  .footer {
    margin: 0;
    height: 27.2rem;
    margin-top: 5.869rem;
    background: ${({ theme }) => theme.box.boxBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &--first {
      display: flex;
      height: 1.5rem;
      margin-bottom: 1.2rem;
      &__element {
        cursor: pointer;
        padding-right: 0.7rem;
        padding-left: 0.7rem;
        border-right: 0.1rem solid ${({ theme }) => theme.text.textBlack};
        font-size: 1.5rem;
        line-height: 1.8rem;
        letter-spacing: -0.02em;
        color: ${({ theme }) => theme.text.textBlack};
      }
      &__lastelement {
        cursor: pointer;
        padding-right: 0.7rem;
        padding-left: 0.7rem;
        font-size: 1.5rem;
        line-height: 1.8rem;
        letter-spacing: -0.02em;
        color: ${({ theme }) => theme.text.textBlack};
      }
    }
    &--second {
      font-size: 1.3rem;
      line-height: 1.6rem;
      /* identical to box height */
      letter-spacing: -0.02em;
      /* text/text_sub */
      margin-bottom: 1.6rem;

      color: ${({ theme }) => theme.text.textSub};
    }
    &--last {
      display: flex;
      height: 2.2rem;
      align-items: center;
      &__navericon {
        width: 6.501rem;
        height: 1.224rem;
      }
      &__copyright {
        margin-left: 1.899rem;
        font-family: Helvetica;
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 2.2rem;
        letter-spacing: 0.02em;
        color: ${({ theme }) => theme.text.textBlack};
      }
    }
  }
`;

export default FooterMenu;
