import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SocialBlock from "./social-block"
import IconPrint from "./icon-print"
import Image from "./image"
import ContactLines from "./contact-lines"

const Section = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const ImageWrapper = styled.div`
  height: 25rem;
  width: 25rem;
  border-radius: 1rem;
  overflow: hidden;
`

const Contacts = ({ contacts }) => {
  const { name, position, location, phone, email, linkedin, github, twitter, telegram } = contacts
  const onPrint = () => {
    window.print()
  }

  return (
    <Section>
      <ImageWrapper>
        <Image/>
      </ImageWrapper>
      <div>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <div>
          <ContactLines
            definitions={[
              { title: "Location", definition: location },
              { title: "Phone", definition: <a href={`tel:${phone}?call`}>{phone}</a> },
              { title: "Email", definition: <a href={`mailto:${email}`}>{email}</a> },
            ]}
          />
        </div>
        <SocialBlock github={github} linkedin={linkedin} telegram={telegram} twitter={twitter}/>
        <IconPrint onClick={onPrint}/>
      </div>
    </Section>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    telegram: PropTypes.string.isRequired,
  }),
}

export default Contacts
