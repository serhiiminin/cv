import React from "react"
import PropTypes from "prop-types"

const Section = ({ title, icon, children }) => (
  <section>
    <h2><span>{icon}</span>{title}</h2>
    {children}
  </section>
)
Section.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section
