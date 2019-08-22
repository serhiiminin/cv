import React from "react"
import PropTypes from "prop-types"
import { FaGlobe } from "react-icons/fa"
import Section from "./section"
import DataLines from "./data-lines"

const Languages = ({ languages }) => (
  <Section title="Languages" icon={<FaGlobe/>}>
    <DataLines definitions={languages}/>
  </Section>
)

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
}

export default Languages
