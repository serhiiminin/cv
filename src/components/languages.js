import React from "react"
import PropTypes from "prop-types"
import { FaGlobe } from "react-icons/fa"
import Section from "./section"
import ContactLines from "./contact-lines"

const Languages = ({ languages }) => (
  <Section
    title="Languages"
    icon={<FaGlobe/>}
  >
    <ContactLines definitions={languages}/>
  </Section>
)

Languages.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
}

export default Languages
