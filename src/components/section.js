import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0 0 .7rem;
`

const Data = styled.div`
  padding: .7rem 0;
  margin-bottom: 1rem;
`;

const Section = ({ title, icon, children }) => (
  <section>
    <Title>{icon}<span>{title}</span></Title>
    <Data>{children}</Data>
  </section>
)
Section.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section
