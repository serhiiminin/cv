import React from "react"
import styled from "styled-components"
import { MdPrint } from "react-icons/md"

const PrintIcon = styled(props => <MdPrint {...props} />)`
  font-size: 2.6rem;
  color: gray;
  &:hover {
    cursor: pointer;
  }
  @media print {
    display: none;
  }
`

export default PrintIcon
