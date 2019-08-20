import React from "react"
import PropTypes from "prop-types"
import { MdAccountCircle } from "react-icons/md"
import Section from "./section"
import styled from 'styled-components';

const SummaryText = styled.p`
  text-align: justify;
`;

const Summary = ({ summary }) => (
  <Section
    title="Summary"
    icon={<MdAccountCircle/>}
  >
    <SummaryText>{summary}</SummaryText>
  </Section>
)

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
}

export default Summary
