import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.fontFamily.ibmPlexSansCondensed}, sans-serif;
    font-size: ${({ theme }) => theme.fontSize[2]};
  } 
  
  * {
    box-sizing: border-box;
    letter-spacing: ${({ theme }) => theme.letterSpacing[3]};
    line-height: ${({ theme }) => theme.lineHeight[1]};
  }
  
  a { 
    text-decoration: none;
  }
`

export default GlobalStyle
