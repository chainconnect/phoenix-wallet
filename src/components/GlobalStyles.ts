import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    background-color: #1a1a1d;
    color:#e2eaf2;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }
 
`;

export default GlobalStyle;
