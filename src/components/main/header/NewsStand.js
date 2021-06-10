import React from 'react';
import styled from 'styled-components';
import ButtonArrowRight from '../../../assets/icons/ButtonArrowRight.svg';

function NewsStand() {
  return (
    <NewsStandWrap>
      <div className="news">
        <span className="news__company">연합뉴스</span>
        <img src={ButtonArrowRight} alt="" />
        <span className="news__title">
          박나희, 갈겨나희 상태로 스카 도착... 김민지 김소령 걱정 커져..
        </span>
      </div>
      <div className="button">
        <span className="button__total">네이버뉴스</span>
        <span className="button__etc--entertainments">연예</span>
        <span className="button__etc--sports">스포츠</span>
        <span className="button__etc--economics">경제</span>
      </div>
    </NewsStandWrap>
  );
}

export default NewsStand;

const NewsStandWrap = styled.div`
  width: 120rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.background.boxBg};
  margin-top: 2rem;
  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.main.mainNaverLightgray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 110.4rem;
  }

  .news {
    display: flex;
    align-items: center;
    &__company {
      margin-left: 2rem;
      font-size: 1.6rem;
      font-weight: bold;
    }

    img {
      width: 2.1rem;
      height: 2.2rem;
    }

    &__title {
      margin-left: 1.838rem;
      font-size: 1.5rem;
    }
  }

  .button {
    margin-right: 3.462rem;
    span {
      padding-left: 2rem;
      font-size: 1.6rem;
      font-weight: bold;
    }

    &__total {
      color: ${({ theme }) => theme.main.mainNewsBlue};
    }
  }
`;
