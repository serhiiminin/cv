import React from "react"
import PropTypes from 'prop-types';
import { FaCode } from "react-icons/fa"
import Section from "./section"
import DataLines from "./data-lines"

const Skills = ({ skills }) => (
  <Section title="Skills" icon={<FaCode/>}>
    <DataLines definitions={skills}/>
  </Section>
)

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  })).isRequired
}

export default Skills
