import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #f0f0f0;
    font-size: 14px;
    color: #333;
    font-family: sans-serif;
  }
`;