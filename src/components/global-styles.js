import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
    background: #fff;
    color: #333;
    font-family: "merriweather", sans-serif;
    font-size: 1.8rem;
  } 
  
  * {
    box-sizing: border-box;
    letter-spacing: .04rem;
    line-height: 2.4rem;
  }
  
  a { 
    text-decoration: none;
  }
`

export default GlobalStyle
