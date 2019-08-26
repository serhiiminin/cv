import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Section = styled.section`
  display: grid;
  grid-template-columns: 20rem auto;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  
  @media print {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`

const TitleWrapper = styled.div``

const DetailsWrapper = styled.div``

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize[5]};
  margin: 0 0 ${({ theme }) => theme.spacing[5]};
  font-weight: bold;
`

const TitleText = styled.span`
  margin-left: ${({ theme, icon }) => icon ? theme.spacing[2] : 0};
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
