import styled from "styled-components"

export default styled.div`
   width: 100%;
   margin: 0 auto;
   padding: ${({ theme }) => `0 ${theme.spacing[3]} ${theme.spacing[5]}`};
   
   @media (min-width: 576px) {
    max-width: 54rem;
   }
   
   @media (min-width: 768px) {
     max-width: 72rem;
   }
   
   @media (min-width: 992px) {
     max-width: 96rem;
   }
`
