import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background: #c31432; 
    background: -webkit-linear-gradient(to top, #240b36, #c31432);
    background: linear-gradient(to top, #240b36, #c31432); 
    color:#e2eaf2;
    word-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }
 
`;

export default GlobalStyle;
