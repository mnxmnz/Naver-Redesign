import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    font-size: 10px;
    font-family: "AppleSDGothicNeoL";  
  }
`;

export default GlobalStyle;
