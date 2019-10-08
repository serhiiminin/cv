import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "./anchor"

const LineWrapper = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.spacing[0]};
`

const Organization = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize[3]};
`

const Period = styled.span`
  color: ${({ theme }) => theme.color.textLighter};
`

const DescriptionText = styled.p`
  text-align: justify;
  margin: 0;
`

const DetailedLine = ({ organization, organizationRef, period, position, description }) => (
  <LineWrapper>
    <Period>{period}</Period>
    <Organization>
      <Anchor href={organizationRef} target='_blank'>{organization}</Anchor>
      {' — '}
      <span>{position}</span>
    </Organization>
    <DescriptionText>
      {description}
    </DescriptionText>
  </LineWrapper>
)

DetailedLine.propTypes = {
  organization: PropTypes.string.isRequired,
  organizationRef: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default DetailedLine
