import styled from "styled-components"
import { FaPrint } from "react-icons/fa"

const PrintIcon = styled(FaPrint)`
  font-size: 2.4rem;
  &:hover {
    cursor: pointer;
  }
  @media print {
    display: none;
  }
`

export default PrintIcon
