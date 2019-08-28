import React from "react"
import PropTypes from 'prop-types';
import Section from "./section"
import SkillLines from "./skill-lines"

const Skills = ({ skills }) => (
  <Section title="Skills">
    <SkillLines data={skills}/>
  </Section>
)

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string),
  })).isRequired
}

export default Skills
