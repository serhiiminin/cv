import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Section = styled.section`
  margin-bottom: 2.4rem;
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0 0 .6rem;
`

const TitleText = styled.span`
  margin-left: ${props => props.icon ? `1.2rem` : 0};
`

const SectionCmp = ({ title, icon, children }) => {
  const TitleTextCmp = title && <TitleText icon={icon}>{title}</TitleText>
  const TitleCmp = (icon || title) && <Title>{icon}{TitleTextCmp}</Title>

  return (
    <Section>
      {TitleCmp}
      {children}
    </Section>
  )
}

SectionCmp.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

SectionCmp.defaultProps = {
  icon: null,
  title: null,
}

export default SectionCmp
