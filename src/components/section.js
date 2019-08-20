import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0 0 .7rem;
`

const TitleText = styled.span`
  margin-left: 4px;
`;

const Data = styled.div`
  padding: .5rem 0;
  margin-bottom: 1rem;
`;

const Section = ({ title, icon, children }) => (
  <section>
    <Title>{icon}<TitleText>{title}</TitleText></Title>
    <Data>{children}</Data>
  </section>
)
Section.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section
