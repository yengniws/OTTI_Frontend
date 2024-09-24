import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background-color: white;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
z
  * {
    box-sizing: border-box;
  }
`;
