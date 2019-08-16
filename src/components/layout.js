import React from "react"
import PropTypes from "prop-types"
import Container from "./container"
import "./layout.css"

const Layout = ({ children }) => (
  <Container>
    <main>{children}</main>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
