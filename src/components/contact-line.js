import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const DefinitionList = styled.dl``
const DefinitionTitle = styled.dt``
const DefinitionData = styled.dd``

const ContactLine = ({ definitions }) => (
  <DefinitionList>
    {definitions.map(({ title, definition }) => (
      <>
        <DefinitionTitle>{title}:</DefinitionTitle>
        <DefinitionData>{definition}</DefinitionData>
      </>
    ))}
  </DefinitionList>
)

ContactLine.defaultProps = {
  definitions: [],
}

ContactLine.propTypes = {
  definitions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      definition: PropTypes.string.isRequired,
    })
  )
}

export default ContactLine
