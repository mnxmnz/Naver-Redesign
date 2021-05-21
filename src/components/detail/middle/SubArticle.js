import React from 'react';
import styled from 'styled-components';

function SubArticle() {
  return (
    <SubArticleWrap>
      <Photo />
      <Article>
        <Title>[잠실 토크박스] 홍원기 감독 “오재원 배트, 어떻게 알았냐고요?”</Title>
        <Content>
          [스포탈코리아] 김희웅 인턴기자= 우스만 뎀벨레(FC 바르셀로나)가 이색적인 기록을 세웠다.
          뎀벨레는 12일 스페인 발렌시아 시우다드 데 발렌시아에서 열린 2020/2021 시즌 스페인 라리가
          36라운드 레반테와 경기에서 열...
        </Content>
        <Reporter>스포탈코리아 · 라리가</Reporter>
      </Article>
    </SubArticleWrap>
  );
}

const SubArticleWrap = styled.div`
  width: 120rem;
  height: 17.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.2rem;
`;

const Photo = styled.img`
  width: 28rem;
  height: 17.1rem;
  background-color: ${({ theme }) => theme.background.boxBg};
`;

const Article = styled.div`
  width: 79.8rem;
  margin-left: 2.6rem;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 2.4rem;
  line-height: 2.88rem;
  color: ${({ theme }) => theme.text.textDarkblue};
`;

const Content = styled.div`
  margin-top: 1.8rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.text.textSub};
`;

const Reporter = styled.div`
  margin-top: 1rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.main.mainNaverLightgray};
`;

export default SubArticle;
