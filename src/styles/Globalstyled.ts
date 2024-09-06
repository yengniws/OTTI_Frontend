import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background-color: white;
  }

  #root {
    display: flex;
    // margin: 0 auto;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
z
  * {
    box-sizing: border-box;
  }
`;
