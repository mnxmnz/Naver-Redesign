import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './assets/styles/global';
import theme from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById('root'),
);
