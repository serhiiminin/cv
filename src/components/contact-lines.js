import React, { Fragment } from "react"
import PropTypes from "prop-types"
import shortid from "shortid"
import styled from "styled-components"

const DefinitionList = styled.dl`
  display: grid;
  grid-template-columns: max-content auto;
  grid-auto-rows: 3rem;
  align-items: center;
  column-gap: 1.2rem;
  margin: 0;
`

const DefinitionTitle = styled.dt`
  display: grid;  
  justify-self: start;
  align-self: center;
  font-weight: bolder;
`

const DefinitionData = styled.dd`
  margin-inline-start: 0;
  display: grid;
  justify-self: start;
  align-self: center;
`

const ContactLines = ({ definitions }) => (
  <DefinitionList>
    {definitions.map(({ title, value }) => (
      <Fragment key={shortid.generate()}>
        <DefinitionTitle>{title}</DefinitionTitle>
        <DefinitionData>{value}</DefinitionData>
      </Fragment>
    ))}
  </DefinitionList>
)

ContactLines.propTypes = {
  definitions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    }),
  ).isRequired,
}

export default ContactLines
