import React from 'react';
import PlayIcon from '../../../assets/icons/PlayIcon.svg';
import CardImage from '../../../assets/icons/example.jpeg';
import styled from 'styled-components';

//하나의 카드를 형성하는 컴포넌트, 이 컴포넌트를 map으로 받아서 footer에서 grid로 나타낼 예정임.
function DetailCard() {
  return (
    <DetailCardWrap>
      <div className="card--top">
        <figure className="card--top__cardimage">
          <img src={PlayIcon} className="card--top__playicon" alt="" />
          <div className="card--top__time">05:45</div>
        </figure>
      </div>
      <div className="card--bottom">
        <div className="card--bottom__kind">결산</div>
        <div className="card--bottom__title">[2020- 2021결산] 도드람 V-리그 - 기록</div>
        <div className="card--bottom__category">프로배구 네이버스포츠 · 59분 전</div>
      </div>
    </DetailCardWrap>
  );
}

const DetailCardWrap = styled.div`
  width: 28.21rem;
  height: 25.562rem;
  .card--top {
    &__cardimage {
      background: url(${CardImage}) center center / 100% no-repeat;
      position: relative;
      width: 28.21rem;
      height: 16.091rem;
    }
    &__playicon {
      position: absolute;
      margin-left: 1.426rem;
      margin-top: 11.915rem;
    }
    &__time {
      position: absolute;
      width: 4.787rem;
      height: 2.241rem;
      margin-left: 22.405rem;
      margin-top: 12.832rem;
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
      font-size: 1.52761rem;
      line-height: 1.8rem;
      letter-spacing: -0.02rem;
      color: ${({ theme }) => theme.text.textDarkBlue};
    }
    &__title {
      margin-top: 0.815rem;
      font-size: 1.52761rem;
      line-height: 1.8rem;
      letter-spacing: -0.02rem;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &__category {
      margin-top: 0.713rem;
      font-size: 1.52761rem;
      line-height: 1.8rem;
      letter-spacing: -0.02rem;
      color: ${({ theme }) => theme.text.textSub};
    }
  }
`;

export default DetailCard;
