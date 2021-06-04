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
`;

export default Advertisement;
