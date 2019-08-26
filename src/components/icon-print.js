import styled from "styled-components"
import { FaPrint } from "react-icons/fa"

const IconPrint = styled(FaPrint)`
  font-size: ${({ theme }) => theme.fontSize[5]};
  &:hover {
    cursor: pointer;
  }
  @media print {
    display: none;
  }
`

export default IconPrint
