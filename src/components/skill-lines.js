import React from "react"
import PropTypes from "prop-types"
import shortid from "shortid"
import styled from "styled-components"

const DefinitionList = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(4, max-content);
  grid-auto-rows: max-content;
  column-gap: ${({ theme }) => theme.spacing[9]};
  row-gap: ${({ theme }) => theme.spacing[3]};
  margin: 0;
  padding: 0;
  
  @media print {
    grid-template-columns: repeat(3, max-content);
  }
`

const DefinitionItem = styled.li`
`

const DefinitionTitle = styled.h3`
  font-weight: bolder;
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
`

const DefinitionDataList = styled.ul`
  padding: 0 0 0 ${({ theme }) => theme.spacing[3]};
  list-style: initial;
`

const DefinitionDataItem = styled.li`
`

const SkillLines = ({ data }) => (
  <DefinitionList>
    {data.map(({ title, value }) => (
      <DefinitionItem key={shortid.generate()}>
        <DefinitionTitle>{title}</DefinitionTitle>
        <DefinitionDataList>{value.map(name => (
          <DefinitionDataItem key={name}>{name}</DefinitionDataItem>
        ))}</DefinitionDataList>
      </DefinitionItem>
    ))}
  </DefinitionList>
)

SkillLines.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      value: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
}

export default SkillLines
