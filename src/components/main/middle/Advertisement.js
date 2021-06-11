import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { mainDataAtom } from '../../../states/atom';

function Advertisement() {
  const mainData = useRecoilValue(mainDataAtom);

  return (
    <AdvertisementWrap>
      {mainData.adRes && <img src={mainData.adRes.imageUrl} alt="" />}
    </AdvertisementWrap>
  );
}

const AdvertisementWrap = styled.div`
  width: 120rem;
  height: 21.8rem;
  margin-top: 6.5rem;

  img {
    width: 120rem;
    height: 21.8rem;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    width: 110.4rem;
    height: 20rem;
    margin-top: 8rem;

    img {
      width: 110.4rem;
      height: 20rem;
    }
  }
`;

export default Advertisement;
