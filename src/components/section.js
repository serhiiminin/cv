import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Section = styled.section`
  display: grid;
  grid-template-columns: 20rem auto;
  margin-bottom: 3.6rem;
  
  @media print {
    margin-bottom: 1.8rem;
  }
`

const TitleWrapper = styled.div``

const DetailsWrapper = styled.div``

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  margin: 0 0 2.4rem;
  font-weight: bold;
`

const TitleText = styled.span`
  margin-left: ${props => props.icon ? `1.2rem` : 0};
`

const SectionCmp = ({ title, icon, children, titleRender }) => {
  const TitleTextCmp = title && <TitleText icon={icon}>{title}</TitleText>
  const TitleCmp = (icon || title) && <Title>{icon}{TitleTextCmp}</Title>

  return (
    <Section>
      <TitleWrapper>{titleRender || TitleCmp}</TitleWrapper>
      <DetailsWrapper>{children}</DetailsWrapper>
    </Section>
  )
}

SectionCmp.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  titleRender: PropTypes.node,
  children: PropTypes.node.isRequired,
}

SectionCmp.defaultProps = {
  titleRender: null,
  icon: null,
  title: null,
}

export default SectionCmp
