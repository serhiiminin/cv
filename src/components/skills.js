import React from "react"
import PropTypes from 'prop-types';
import { FaTerminal } from "react-icons/fa"
import Section from "./section"
import ContactLines from "./contact-lines"

const Skills = ({ skills }) => (
  <Section
    title="Skills"
    icon={<FaTerminal/>}
  >
    <ContactLines definitions={skills}/>
  </Section>
)

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  })).isRequired
}

export default Skills
