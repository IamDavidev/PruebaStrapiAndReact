import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { AppContainer } from './mainStyled';
const AppStyled = createGlobalStyle`
    body {
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
        background-color: #fafafa;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;

    }
 `;
ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <App />
    </AppContainer>
    <AppStyled></AppStyled>
  </React.StrictMode>,
  document.getElementById('root')
);
