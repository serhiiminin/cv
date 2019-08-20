import React from "react"
import PropTypes from "prop-types"
import { MdAccountCircle } from "react-icons/md"
import Section from "./section"

const Summary = ({ summary }) => (
  <Section
    title="Summary"
    icon={<MdAccountCircle/>}
  >
    {summary}
  </Section>
)

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
}

export default Summary
