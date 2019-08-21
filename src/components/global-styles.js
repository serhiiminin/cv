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
    letter-spacing: .05rem;
    line-height: 2.6rem;
  }
  
  a { 
    text-decoration: none;
  }
`

export default GlobalStyle
