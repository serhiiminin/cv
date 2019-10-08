import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Section = styled.section`
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: ${({ theme }) => theme.spacing[9]};
  
  @media (min-width: 768px) {
     grid-template-columns: 19rem auto;
  }
  
  @media print {
    grid-template-columns: 19rem auto;
  }
`

const TitleWrapper = styled.div``

const DetailsWrapper = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.spacing[4]};
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize[5]};
  margin: 0 0 ${({ theme }) => theme.spacing[5]};
  font-weight: bold;
`

const SectionCmp = ({ title, children, titleRender }) => {
  const TitleCmp = title && <Title>{title}</Title>

  return (
    <Section>
      <TitleWrapper>{titleRender || TitleCmp}</TitleWrapper>
      <DetailsWrapper>{children}</DetailsWrapper>
    </Section>
  )
}

SectionCmp.propTypes = {
  title: PropTypes.string,
  titleRender: PropTypes.node,
  children: PropTypes.node.isRequired,
}

SectionCmp.defaultProps = {
  titleRender: null,
  title: null,
}

export default SectionCmp
