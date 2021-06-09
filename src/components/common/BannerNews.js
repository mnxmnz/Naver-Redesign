import React from 'react';
import styled from 'styled-components';
import IconComment from '../../assets/icons/IconComment.svg';
import IconLike from '../../assets/icons/IconLike.svg';
import IconShared from '../../assets/icons/IconShared.svg';
import IconLookup from '../../assets/icons/IconLookup.svg';

function BannerNews({ data }) {
  console.log('here is the data');
  const { imageUrl, title, content } = data;

  return (
    <BannerNewsWrap>
      <div className="banner">
        <img className="banner__image" src={imageUrl} alt="" />
        <div className="banner__description">
          <h2>핫뉴스</h2>
          <h1>{title}</h1>
          <h3>{content}</h3>
          <div id="icons">
            <span id="comment">
              <img src={IconComment} alt="" />
              10
            </span>
            <span id="like">
              <img src={IconLike} alt="" />
              10
            </span>
            <span id="shared">
              <img src={IconShared} alt="" />
              10
            </span>
            <span id="lookup">
              <img src={IconLookup} alt="" />
              1990
            </span>
          </div>
        </div>
      </div>
    </BannerNewsWrap>
  );
}

const BannerNewsWrap = styled.div`
  .banner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 2.6rem;
    margin-left: 2.6rem;
    @media (max-width: 1200px) {
      margin-left: 1.2rem;
      margin-right: 0.7rem;
    }

    &__image {
      width: 54.6rem;
      height: 33rem;
      margin-right: 3rem;
      @media (max-width: 1200px) {
        margin-right: 2.2rem;
      }
    }

    &__description {
      width: 45.6rem;

      h2 {
        font-size: 2.4rem;
        font-weight: bold;
        color: ${({ theme }) => theme.main.mainNewsBlue};
        margin-bottom: 1.4rem;
        letter-spacing: -0.12rem;
      }

      h1 {
        font-size: 2.8rem;
        font-weight: bold;
        letter-spacing: -0.14rem;
        margin-bottom: 1.7rem;
        line-height: 2.8rem;
      }

      h3 {
        font-size: 1.6rem;
        letter-spacing: -0.08rem;
        line-height: 2.2rem;
        margin-bottom: 0.9rem;
      }

      #icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #737373;
      }

      #icons > span {
        margin-right: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.4rem;
        letter-spacing: -0.028rem;

        img {
          margin-right: 0.4rem;
        }
      }
    }
  }
`;

export default BannerNews;
