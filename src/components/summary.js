import React from "react"
import PropTypes from "prop-types"
import { FaRegAddressCard } from "react-icons/fa"
import Section from "./section"
import styled from 'styled-components';

const SummaryText = styled.p`
  text-align: justify;
`;

const Summary = ({ summary }) => (
  <Section
    title="Summary"
    icon={<FaRegAddressCard/>}
  >
    <SummaryText>{summary}</SummaryText>
  </Section>
)

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
}

export default Summary
