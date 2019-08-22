import React from "react"
import PropTypes from 'prop-types';
import { FaUniversity } from "react-icons/fa"
import Section from "./section"
import DetailedLine from "./ditailed-line"

const Education = ({ education }) => (
  <Section title="Education" icon={<FaUniversity/>}>
    {education.map(({ organization, organizationRef, period, position, description }) => (
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

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.shape({
    organization: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
}

export default Education
