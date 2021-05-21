import React from 'react';
import styled from 'styled-components';
import DetailCard from '../footer/DetailCard';
import NaverIcon from '../../../assets/icons/NaverIcon.svg';
import PlusBtn from '../../../assets/icons/PlusBtn.svg';

function Footer() {
  {
    /*임의로 20개의 데이터를 넣음*/
  }
  const cardData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  return (
    <FooterWrap>
      <div className="introduce">
        <div className="introduce__title bold">스포츠 영상</div>
        <div className="introduce__detail">주제별로 분류된 다양한 영상 모음</div>
      </div>
      {/* 4*5 grid 틀에 map 돌려서 DetailCard 넣기*/}
      <CardList>{cardData && cardData.map(() => <DetailCard />)}</CardList>
      <div className="more">
        <img src={PlusBtn} className="more--button" />
        <div className="more--text">새로운 글 더보기</div>
      </div>
      <div className="footer">
        <div className="footer--first">
          <span className="footer--first__element">회사소개</span>
          <span className="footer--first__element">인재채용</span>
          <span className="footer--first__element">제휴제안</span>
          <span className="footer--first__element">이용약관</span>
          <span className="footer--first__element bold">개인정보처리방침</span>
          <span className="footer--first__element">청소년보호정책</span>
          <span className="footer--first__element">네이버 정책</span>
          <span className="footer--first__element">고객센터</span>
        </div>
        <div className="footer--second">
          본 콘텐츠의 저작권은 네이버 및 제공처에 있으며, 이를 이용하는 경우 저작권법 등에 따라
          법적책임을 질 수 있습니다.
        </div>
        <div className="footer--last">
          <img src={NaverIcon} className="footer--last__navericon" />
          <div className="footer--last__copyright">
            <span>Copyright </span>
            <span className="bold">ⓒ NAVER corp. </span>
            <span>All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${({ theme }) => theme.pcPadding.detail};
  padding-right: ${({ theme }) => theme.pcPadding.detail};

  @media (max-width: 1200px) {
    padding-left: ${({ theme }) => theme.tabletPadding.detailFooter};
    padding-right: ${({ theme }) => theme.tabletPadding.detailFooter};
  }

  .bold {
    font-weight: bold;
  }
  .introduce {
    width: 120rem;
    height: 2.3rem;
    display: flex;
    align-items: center;
    margin-bottom: 1.1rem;
    &__title {
      width: 8.3rem;
      height: 2.3rem;
      font-style: normal;
      font-size: 1.9rem;
      line-height: 2.3rem;
      letter-spacing: -0.05em;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &__detail {
      width: 19.5rem;
      height: 1.8rem;
      font-family: Apple SD Gothic Neo;
      font-style: normal;
      font-weight: normal;
      font-size: 1.5rem;
      line-height: 1.8rem;
      text-align: center;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.text.textBlack};
      margin-left: 92.3rem;
    }
  }
  .more {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 143.8rem;
    &--button {
      width: 6.358rem;
      height: 6.358rem;
      cursor: pointer;
    }
    &--text {
      margin-top: 0.642rem;
      font-size: 1.58949rem;
      text-align: center;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.text.textBlack};
    }
  }
  .footer {
    width: 100vw;
    margin: 0;
    height: 27.2rem;
    margin-top: 12.2rem;
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
      width: 42.1rem;
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

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  row-gap: 2.485rem;
  column-gap: 2.39rem;
  padding-bottom: 3.507rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.main.mainNaverLightgray};
`;
export default Footer;
