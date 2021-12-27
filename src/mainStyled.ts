import styled, { createGlobalStyle } from 'styled-components';

export const AppStyled = createGlobalStyle`
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

export const AppTheme = {
  colors: {
    first: '#41729F',
    second: '#5885AF',
    third: '#274472',
    fourth: '#A4E8E0',
    text: '#00ADB5',
    ext: '#222831',
  },
  font:{
    title:'3rem',
    subtitle:'1.5rem',
    text:'1rem'
  }
};

export const AppContainer = styled.main`
  background: ${AppTheme.colors.fourth};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  font-size: calc(10px + 2vmin);
  margin: 0;
  padding: 0;
`;
