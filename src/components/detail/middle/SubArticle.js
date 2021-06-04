import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { sportsDataAtom } from '../../../states/atom';

function SubArticle({ index }) {
  const detailData = useRecoilValue(sportsDataAtom);

  return (
    <SubArticleWrap>
      {detailData.news && (
        <>
          <Photo src={detailData.news[index].imageUrl} />
          <Article>
            <Title>{detailData.news[index].title}</Title>
            <Content>{detailData.news[index].content}</Content>
            <Reporter>스포탈코리아 · 라리가</Reporter>
          </Article>
        </>
      )}
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
