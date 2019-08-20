import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
    background: #fafafa;
    color: #333;
    font-family: "merriweather", sans-serif;
    font-size: 1.6rem;
  } 
  
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
