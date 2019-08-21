import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const DefinitionList = styled.dl`
  display: grid;
  grid-template-columns: 9rem auto;
  grid-auto-rows: 2.8rem;
  align-items: center;
  margin: 0 0 1rem;
`

const DefinitionTitle = styled.dt`
  font-weight: bolder;
`

const DefinitionData = styled.dd`
  margin-inline-start: 0;
`

const ContactLines = ({ definitions }) => (
  <DefinitionList>
    {definitions.map(({ title, definition }) => (
      <Fragment key={title}>
        <DefinitionTitle>{title}:</DefinitionTitle>
        <DefinitionData>{definition}</DefinitionData>
      </Fragment>
    ))}
  </DefinitionList>
)

ContactLines.propTypes = {
  definitions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      definition: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    })
  ).isRequired
}

export default ContactLines
