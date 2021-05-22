import React from 'react';
import PlayIcon from '../../../assets/icons/PlayIcon.svg';
import CardImage from '../../../assets/icons/example2.jpeg';
import styled from 'styled-components';

//하나의 카드를 형성하는 컴포넌트, 이 컴포넌트를 map으로 받아서 footer에서 grid로 나타낼 예정임.
function MainCard({ cardData }) {
  // 데이터 구조 분해 할당
  const {
    allWidth,
    cardHeight,
    imageHeight,
    kind,
    title,
    category,
    kindFontSize,
    titleFontSize,
    categoryFontSize,
  } = cardData;
  return (
    <DetailCardWrap
      allWidth={allWidth}
      cardHeight={cardHeight}
      imageHeight={imageHeight}
      kindFontSize={kindFontSize}
      titleFontSize={titleFontSize}
      categoryFontSize={categoryFontSize}
    >
      <div className="card--top">
        <figure className="card--top__cardimage">
          <img src={PlayIcon} className="card--top__playicon" />
          <div className="card--top__time">05:45</div>
        </figure>
      </div>
      <div className="card--bottom">
        <div className="card--bottom__kind">{kind}</div>
        <div className="card--bottom__title">{title}</div>
        <div className="card--bottom__category">{category}</div>
      </div>
    </DetailCardWrap>
  );
}

const DetailCardWrap = styled.div`
  width: ${props => props.allWidth};
  height: ${props => props.cardHeight};
  .card--top {
    &__cardimage {
      background: url(${CardImage}) center center / 100% no-repeat;
      position: relative;
      width: ${props => props.allWidth};
      height: ${props => props.imageHeight};
    }
    &__playicon {
      position: absolute;
      /* margin-left: 1.426rem;
      margin-top: 11.915rem; */
      margin-top: 32.9rem;
      margin-left: 2rem;
    }
    &__time {
      position: absolute;
      width: 4.787rem;
      height: 2.241rem;
      /* margin-left: 22.405rem;
      margin-top: 12.832rem; */

      margin-left: 31.4rem;
      margin-top: 34.4rem;

      padding-top: 0.408rem;
      font-size: 1.52761rem;
      line-height: 1.8rem;
      text-align: center;
      letter-spacing: 0.01rem;
      text-align: center;
      background-color: ${({ theme }) => theme.text.textBlack};
      color: ${({ theme }) => theme.text.textWhite};
    }
  }

  .card--bottom {
    &__kind {
      margin-top: 1.12rem;
      font-weight: bold;
      /* font-size: 1.52761rem; */
      font-size: ${props => props.kindFontSize};
      line-height: 1.8rem;
      letter-spacing: -0.02rem;
      color: ${({ theme }) => theme.text.textDarkBlue};
    }
    &__title {
      margin-top: 0.815rem;
      /* font-size: 1.52761rem; */
      font-size: ${props => props.titleFontSize};
      line-height: 1.8rem;
      letter-spacing: -0.02rem;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &__category {
      margin-top: 0.713rem;
      /* font-size: 1.52761rem; */
      font-size: ${props => props.categoryFontSize};
      line-height: 1.8rem;
      letter-spacing: -0.02rem;
      color: ${({ theme }) => theme.text.textSub};
    }
  }
`;

export default MainCard;
