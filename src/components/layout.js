import React from "react"
import PropTypes from "prop-types"
import Container from "./container"
import GlobalStyle from "./global-styles"
import { Normalize } from "styled-normalize"

const Layout = ({ children }) => (
  <Container>
    <Normalize/>
    <GlobalStyle/>
    <main>{children}</main>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
