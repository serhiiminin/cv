import React from "react"
import PropTypes from "prop-types"
import Section from "./section"
import LanguageLines from "./language-lines"

const Languages = ({ languages }) => (
  <Section title="Languages">
    <LanguageLines data={languages}/>
  </Section>
)

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
}

export default Languages
