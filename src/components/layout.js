import React from "react"
import PropTypes from "prop-types"
import Container from "./container"
import GlobalStyle from "./global-styles"
import { Normalize } from "styled-normalize"
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 2.4rem;
`;

const Layout = ({ children }) => (
  <Container>
    <Normalize/>
    <GlobalStyle/>
    <Main>{children}</Main>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
