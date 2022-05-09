import { createGlobalStyle } from "styled-components";
import { typography } from "./typography";

const GlobalStyles = createGlobalStyle`
  ${typography};
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Segoe UI Variable Display", sans-serif;
    background: url(${({ theme }) => theme.background}) no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
