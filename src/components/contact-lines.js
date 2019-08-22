import React, { Fragment } from "react"
import PropTypes from "prop-types"
import shortid from "shortid"
import styled from "styled-components"

const DefinitionList = styled.dl`
  display: grid;
  grid-template-columns: 3rem auto;
  grid-auto-rows: 3rem;
  align-items: center;
  margin: 0;
`

const DefinitionTitle = styled.dt`
  display: grid;  
  justify-self: start;
  align-self: center;
  font-size: 2rem;
`

const DefinitionData = styled.dd`
  margin-inline-start: 0;
  display: grid;
  justify-self: start;
  align-self: center;
`

const ContactLines = ({ definitions }) => (
  <DefinitionList>
    {definitions.map(({ title, definition }) => (
      <Fragment key={shortid.generate()}>
        <DefinitionTitle>{title}</DefinitionTitle>
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
    }),
  ).isRequired,
}

export default ContactLines
