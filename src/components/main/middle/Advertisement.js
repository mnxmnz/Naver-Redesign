import React from 'react';
import styled from 'styled-components';

function Advertisement() {
  return <AdvertisementWrap></AdvertisementWrap>;
}

const AdvertisementWrap = styled.div`
  width: 120rem;
  height: 21.8rem;
  margin-bottom: 9.2rem;
  background-color: ${({ theme }) => theme.main.mainNaverLightgray};
`;

export default Advertisement;
