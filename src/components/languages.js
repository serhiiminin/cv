import React from "react"
import { FaGlobe } from "react-icons/fa"
import Section from "./section"
import ContactLines from './contact-lines'

const Languages = ({ languages }) => (
  <Section
    title="Languages"
    icon={<FaGlobe/>}
  >
    <ContactLines definitions={languages}/>
  </Section>
)

export default Languages
