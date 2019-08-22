import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "./anchor"

const LineWrapper = styled.div`
  display: grid;
  grid-template-columns: 20rem auto;
  column-gap: 1.2rem;
  margin-bottom: 1.2rem;
`

const Titles = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  text-align: center;
  row-gap: .4rem;
`

const DescriptionText = styled.p`
  text-align: justify;
  margin: 0;
`

const Organization = styled.span`
  font-weight: bold;
`;

const Position = styled.span`
  font-weight: bold;
`;

const Period = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const DetailedLine = ({ organization, organizationRef, period, position, description }) => (
  <LineWrapper>
    <Titles>
      <Organization>
        <Anchor href={organizationRef} target='_blank'>{organization}</Anchor>
      </Organization>
      <Position>{position}</Position>
      <Period>{period}</Period>
    </Titles>
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
