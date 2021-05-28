import React from 'react';
import styled from 'styled-components';
import { ReactComponent as News } from '../../../../assets/icons/NewsStand.svg';
import { ReactComponent as Arrow } from '../../../../assets/icons/ButtonArrowRight.svg';
import { ReactComponent as Left } from '../../../../assets/icons/NewsStandIconLeft.svg';
import { ReactComponent as Clicked } from '../../../../assets/icons/NewsStandClickedIcon.svg';
import { ReactComponent as Right } from '../../../../assets/icons/NewsStandIconRight.svg';

function NewsHeader() {
  return (
    <HeaderWrap>
      <NewsText>
        <News style={NewsMargin} />
        <TextWrap>
          <span>뉴스스탠드</span>
          <Arrow style={ArrowMargin} />
          <div>
            <span style={TextMargin}>구독한언론사</span>
            <span style={TextMargin}>ㆍ</span>
            <span>전체언론사</span>
          </div>
        </TextWrap>
      </NewsText>
      <NewsIcon>
        <Left style={IconSize} />
        <Clicked />
        <Right />
      </NewsIcon>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  width: 120rem;
  display: flex;
  justify-content: space-between;
`;

const NewsText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.8rem;
  font-style: normal;

  & > span {
    font-weight: bold;
    font-size: 1.9rem;
  }

  & > div > span:nth-child(2) {
    font-weight: bold;
    color: #d6dce0;
  }

  & > div > span:nth-child(3) {
    font-weight: bold;
  }
`;

const NewsIcon = styled.div``;

const NewsMargin = {
  marginRight: '2.1rem',
};

const IconSize = {
  width: '40px',
  height: '40px',
};

const ArrowMargin = {
  marginRight: '2.2rem',
};

const TextMargin = {
  marginRight: '0.9rem',
};

export default NewsHeader;
