import React, { Fragment } from "react"
import PropTypes from "prop-types"
import shortid from "shortid"
import styled from "styled-components"

const ContactsList = styled.dl`
  display: grid;
  grid-template-columns: max-content auto;
  grid-auto-rows: max-content;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing[2]};
  row-gap: ${({ theme }) => theme.spacing[1]};
  margin: 0;
`

const Title = styled.dt`
  display: grid;  
  justify-self: start;
  align-self: center;
  font-weight: bolder;
`

const Data = styled.dd`
  margin-inline-start: 0;
  display: grid;
  justify-self: start;
  align-self: center;
`

const ContactLines = ({ data }) => (
  <ContactsList>
    {data.map(({ title, value }) => (
      <Fragment key={shortid.generate()}>
        <Title>{title}</Title>
        <Data>{value}</Data>
      </Fragment>
    ))}
  </ContactsList>
)

ContactLines.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    }),
  ).isRequired,
}

export default ContactLines
