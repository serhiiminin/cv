import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaTwitter, FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaMobileAlt } from "react-icons/fa"
import Image from "./image"
import ContactLines from "./contact-lines"
import Anchor from "./anchor"
import Section from "./section"
import TitlesBlock from "./titles-block"

const ContactsInner = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: ${({ theme }) => theme.spacing[1]};
  justify-content: start;
  column-gap: ${({ theme }) => theme.spacing[8]};
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, max-content);
  }
`

const ImageWrapper = styled.div`
  height: 16.5rem;
  width: 16.5rem;
  border-radius: 50%;
  overflow: hidden;
  display: none;
  visibility: hidden;

  @media (min-width: 768px) {
    display: block;
    visibility: visible;
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }
`

const Contacts = ({ contacts, theme }) => {
  const { name, position, location, phone, email, linkedin, github, twitter, nickname } = contacts

  return (
    <Section titleRender={(
      <ImageWrapper theme={theme}>
        <Image/>
      </ImageWrapper>
    )}>
      <>
        <TitlesBlock position={position} name={name}/>
        <ContactsInner>
          <ContactLines
            data={[
              { title: <FaMapMarkerAlt/>, value: location },
              { title: <FaMobileAlt/>, value: <Anchor href={`tel:${phone}?call`}>{phone}</Anchor> },
              { title: <FaEnvelope/>, value: <Anchor href={`mailto:${email}`}>{email}</Anchor> },
            ]}
          />
          <ContactLines
            data={[
              {
                title: <FaLinkedin/>,
                value: <Anchor href={linkedin} target='_blank'>{nickname}</Anchor>,
              }, {
                title: <FaGithub/>,
                value: <Anchor href={github} target='_blank'>{nickname}</Anchor>,
              }, {
                title: <FaTwitter/>,
                value: <Anchor href={twitter} target='_blank'>{nickname}</Anchor>,
              },
            ]}
          />
        </ContactsInner>
      </>
    </Section>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.shape({
    location: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    telegram: PropTypes.string.isRequired,
  }),
}

export default Contacts
