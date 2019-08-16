import React from "react"
import styled from "styled-components"
import Image from "./image"

const Section = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const ImageWrapper = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
`;

const Contacts = () => (
  <Section>
    <ImageWrapper>
      <Image/>
    </ImageWrapper>
    <div>
      <h1>Serhii Minin</h1>
      <h2>Front-end developer</h2>
      Data about contacts
    </div>
  </Section>
)

export default Contacts
