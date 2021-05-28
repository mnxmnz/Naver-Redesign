import React from 'react';
import PlayIcon from '../../assets/icons/PlayIcon.svg';
import styled, { css } from 'styled-components';

//하나의 카드를 형성하는 컴포넌트, 이 컴포넌트를 map으로 받아서 footer에서 grid로 나타낼 예정임.
function MainCard({ cardData }) {
  //받을 데이터 ) 서버로부터 받은 imgUrl, category,title, createdAt
  //메인, 디테일 페이지에서 받은 mainDesktop , mainTablet , detailDesktop , detailTab
  //각 모드에 들어갈 정보 ) 전체 너비, 카드 높이, 이미지 높이,(위 마진) category 폰트사이즈 (아래마진), title 폰트사이즈(아래마진) , created at 폰트사이즈, 각각의 폰트사이즈에 따른 마진

  const sizeData = {
    allWidth: '',
    cardHeight: '',
    imageHeight: '',
    createdAtFontSize: '',
    titleFontSize: '',
    categoryFontSize: '',
  };

  //서버로부터 넘어온 정보 구조분해 할당
  const { imgUrl, createdAt, title, category } = cardData;

  if (cardData.view === 'mainDesktop') {
    //mainDestop 크기 정보
    sizeData.allWidth = '37.8rem';
    sizeData.cardHeight = '48.8rem';
    sizeData.imageHeight = '37.8rem';
    sizeData.createdAtFontSize = '1.6rem';
    sizeData.titleFontSize = '1.6rem';
    sizeData.categoryFontSize = '1.5rem';
  } else if (cardData.view === 'mainTablet') {
    //mainTablet 크기 정보
    sizeData.allWidth = '37.8rem';
    sizeData.cardHeight = '48.8rem';
    sizeData.imageHeight = '37.8rem';
    sizeData.createdAtFontSize = '1.6rem';
    sizeData.titleFontSize = '1.6rem';
    sizeData.categoryFontSize = '1.5rem';
  } else if (cardData.view === 'detailDesktop') {
    //detailDestop 크기 정보
    sizeData.allWidth = '28.21rem';
    sizeData.cardHeight = '25.562rem';
    sizeData.imageHeight = '16.091rem';
    sizeData.createdAtFontSize = '1.52761rem';
    sizeData.titleFontSize = '1.52761rem';
    sizeData.categoryFontSize = '1.52761rem';
  } else {
    //detailTablet 크기 정보
    sizeData.allWidth = '37.8rem';
    sizeData.cardHeight = '48.8rem';
    sizeData.imageHeight = '37.8rem';
    sizeData.createdAtFontSize = '1.6rem';
    sizeData.titleFontSize = '1.6rem';
    sizeData.categoryFontSize = '1.5rem';
  }
  //view에서 넘어온 정보 구조분해 할당
  const { allWidth, cardHeight, imageHeight, createdAtFontSize, titleFontSize, categoryFontSize } =
    sizeData;

  return (
    <DetailCardWrap
      allWidth={allWidth}
      cardHeight={cardHeight}
      imageHeight={imageHeight}
      createdAtFontSize={createdAtFontSize}
      titleFontSize={titleFontSize}
      categoryFontSize={categoryFontSize}
      imgUrl={imgUrl}
    >
      <div className="card--top">
        <figure className="card--top__cardimage">
          <img src={PlayIcon} className="card--top__playicon" alt="img" />
          <div className="card--top__time">05:45</div>
        </figure>
      </div>
      <div className="card--bottom">
        <div className="card--bottom__kind">{createdAt}</div>
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
      /* 서버로부터 제대로 데이터 받으면 이 방식 이용해서 이미지 불러오기 */
      background: url(${props => props.imgUrl}) center center / 100% no-repeat;
      position: relative;
      width: ${props => props.allWidth};
      height: ${props => props.imageHeight};
    }
    &__playicon {
      position: absolute;
      ${props =>
        props.allWidth === '28.21rem'
          ? css`
              margin-left: 1.426rem;
              margin-top: 11.915rem;
            `
          : css`
              margin-top: 32.9rem;
              margin-left: 2rem;
            `}
    }
    &__time {
      position: absolute;
      width: 4.787rem;
      height: 2.241rem;
      ${props =>
        //만약 detailDesktop의 width이면
        props.allWidth === '28.21rem'
          ? css`
              margin-left: 22.405rem;
              margin-top: 12.832rem;
            `
          : //만약 mainDesktop의 width이면
            css`
              margin-left: 31.4rem;
              margin-top: 34.4rem;
            `}
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
      ${props =>
        //만약 detailDesktop의 width이면
        props.allWidth === '28.21rem'
          ? css`
              margin-top: 1.12rem;
            `
          : //만약 mainDesktop의 width이면
            css`
              margin-top: 1.12rem;
            `}
      font-weight: bold;
      font-size: ${props => props.createdAtFontSize};
      line-height: 1.8rem;
      letter-spacing: -0.02rem;
      color: ${({ theme }) => theme.text.textDarkBlue};
    }
    &__title {
      margin-top: 0.815rem;
      font-size: ${props => props.titleFontSize};
      line-height: 1.8rem;
      letter-spacing: -0.02rem;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &__category {
      margin-top: 0.713rem;
      font-size: ${props => props.categoryFontSize};
      line-height: 1.8rem;
      letter-spacing: -0.02rem;
      color: ${({ theme }) => theme.text.textSub};
    }
  }
`;

export default MainCard;
