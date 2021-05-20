import React from 'react';
import styled from 'styled-components';
import DetailCard from '../footer/DetailCard';
import NaverIcon from '../../../assets/icons/NaverIcon.svg';
import PlusBtn from '../../../assets/icons/PlusBtn.svg';

function Footer() {
  return (
    <FooterWrap>
      <div className="introduce">
        <div className="introduce--title">스포츠 영상</div>
        <div className="introduce--detail">주제별로 분류된 다양한 영상 모음</div>
      </div>
      <div className="DetailCard-container">
        {/* 4*5 grid 틀에 map 돌려서 DetailCard넣을 예정 */}
        <DetailCard />
      </div>
      {/* margin-top에 -값 주거나 해서 잘 올려보기*/}
      <div className="more">
        <img src={PlusBtn} className="more--button" />
        <div className="mare--text">새로운 글 더보기</div>
      </div>
      <div className="footer">
        <div className="footer--second">
          본 콘텐츠의 저작권은 네이버 및 제공처에 있으며, 이를 이용하는 경우 저작권법 등에 따라
          법적책임을 질 수 있습니다.
        </div>
        <div className="footer--last">
          {/* 배열 map으로 돌면서 그리도록 .. 각각에 제어권 부여하기 위해서  */}
          <img src={NaverIcon} className="footer--last--navericon" />
          <div className="footer--last--">Copyright ⓒ NAVER Corp. All Rights Reserved.</div>
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
  .introduce {
    width: 120rem;
    height: 2.3rem;
    display: flex;
    align-items: center;
    &--title {
      width: 8.3rem;
      height: 2.3rem;
      font-style: normal;
      font-weight: bold;
      font-size: 1.9rem;
      line-height: 2.3rem;
      letter-spacing: -0.05em;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &--detail {
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
`;

export default Footer;
