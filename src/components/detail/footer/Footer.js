import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrap>
      <div>Detail - Footer</div>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  padding-left: ${({ theme }) => theme.pcPadding.detail};
  padding-right: ${({ theme }) => theme.pcPadding.detail};

  @media (max-width: 1200px) {
    padding-left: ${({ theme }) => theme.tabletPadding.detailFooter};
    padding-right: ${({ theme }) => theme.tabletPadding.detailFooter};
  }
`;

export default Footer;
