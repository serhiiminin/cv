import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaTwitter, FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaMobileAlt } from "react-icons/fa"
import { withTheme } from "../context/theme"
import Image from "./image"
import DataLines from "./data-lines"
import Anchor from "./anchor"
import Section from "./section"

const ContactsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: start;
  column-gap: 3.6rem;
`

const ImageWrapper = styled.div`
  height: 18.5rem;
  width: 18.5rem;
  border-radius: 1.2rem;
  overflow: hidden;
`

const Contacts = ({ contacts, theme }) => {
  const { location, phone, email, linkedin, github, twitter, nickname } = contacts

  return (
    <Section>
      <ContactsInner>
        <ImageWrapper theme={theme}>
          <Image/>
        </ImageWrapper>
        <DataLines
          definitions={[
            { title: <FaMapMarkerAlt/>, value: location },
            { title: <FaMobileAlt/>, value: <Anchor href={`tel:${phone}?call`}>{phone}</Anchor> },
            { title: <FaEnvelope/>, value: <Anchor href={`mailto:${email}`}>{email}</Anchor> },
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

export default withTheme(Contacts)
