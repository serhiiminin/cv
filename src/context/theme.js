import React, { createContext } from "react"

const theme = {
  color: {
    background: '#fff',
    text: '#333',
  },
  fontFamily: {
    ibmPlexSansCondensed: 'ibm plex sans condensed',
  },
  fontSize: [
    '1rem',
    '1.2rem',
    '1.4rem',
    '1.6rem',
    '1.8rem',
    '2rem',
    '2.2rem',
    '2.4rem',
    '2.6rem',
    '2.8rem',
    '3rem',
    '2.2rem',
    '2.4rem',
    '2.6rem',
    '2.8rem',
    '3rem',
    '3.2rem',
    '3.4rem',
    '3.6rem',
    '3.8rem',
    '4rem'
  ],
  spacing: [
    '.4rem',
    '.8rem',
    '1.2rem',
    '1.6rem',
    '2rem',
    '2.4rem',
    '2.8rem',
    '3.2rem',
    '3.6rem',
    '4rem'
  ],
  letterSpacing: [
    '.02rem',
    '.04rem',
    '.06rem',
    '.08rem',
    '.1rem',
    '.12rem',
    '.14rem',
    '.16rem',
    '.18rem',
    '.2rem'
  ]
}

const { Provider, Consumer } = createContext({ theme })

const ThemeProvider = ({ children }) => (
  <Provider value={{ theme }}>{children}</Provider>
)

const withTheme = Cmp => props => <Consumer>{context => <Cmp {...context} {...props} />}</Consumer>

export { ThemeProvider, withTheme }
