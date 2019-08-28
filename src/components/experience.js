import React from "react"
import PropTypes from 'prop-types';
import DetailedLine from './ditailed-line';
import Section from "./section"

const Experience = ({ experience }) => (
  <Section title="Experience">
    {experience.map(({ organization, organizationRef, period, position, description }) => (
      <DetailedLine
        key={organization}
        organizationRef={organizationRef}
        organization={organization}
        period={period}
        position={position}
        description={description}
      />
    ))}
  </Section>
)

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape({
    organization: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
}

export default Experience
