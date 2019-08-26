import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "./anchor"

const LineWrapper = styled.div`
  margin-bottom: 2.4rem;
  display: grid;
  row-gap: .4rem;
`

const Organization = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
`

const Period = styled.span`
  opacity: .5;
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
