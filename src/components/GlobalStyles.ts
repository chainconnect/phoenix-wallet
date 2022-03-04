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
    background: #c31432;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color:#e2eaf2;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }
 
`;

export default GlobalStyle;
