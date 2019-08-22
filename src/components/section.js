import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Section = styled.section`
  margin-bottom: 1.2rem;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0 0 .6rem;
`

const TitleText = styled.span`
  margin-left: 1rem;
`;

const Data = styled.div`
  margin-bottom: 1rem;
`;

const SectionCmp = ({ title, icon, children }) => (
  <Section>
    <Title>{icon}<TitleText>{title}</TitleText></Title>
    <Data>{children}</Data>
  </Section>
)

SectionCmp.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SectionCmp
