import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html,
  body {
    font-size: 10px;
    font-family: 'Apple SD Gothic Neo';
    padding-left: 17.3vw;
    padding-right: 17.3vw;
  }

  @media (max-width: 1200px) {
    padding-left: 1.9vw;
    padding-right: 1.9vw;
}
`;

export default GlobalStyle;
