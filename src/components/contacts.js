import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaTwitter, FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaMobileAlt } from "react-icons/fa"
import IconPrint from "./icon-print"
import Image from "./image"
import ContactLines from "./contact-lines"
import Title from "./title"
import Section from "./section"

const TitleBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const ContactsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: start;
  column-gap: 1.2rem;
`

const ImageWrapper = styled.div`
  height: 18rem;
  width: 18rem;
  border-radius: 1rem;
  overflow: hidden;
`

const Contacts = ({ contacts }) => {
  const { name, position, location, phone, email, linkedin, github, twitter, nickname } = contacts
  const onPrint = () => {
    window.print()
  }

  return (
    <Section>
      <TitleBlock>
        <Title>{`${name} | ${position}`}</Title>
        <IconPrint onClick={onPrint}/>
      </TitleBlock>
      <ContactsInner>
        <ImageWrapper>
          <Image/>
        </ImageWrapper>
        <ContactLines
          definitions={[
            { title: <FaMapMarkerAlt/>, definition: location },
            { title: <FaMobileAlt/>, definition: <a href={`tel:${phone}?call`}>{phone}</a> },
            { title: <FaEnvelope />, definition: <a href={`mailto:${email}`}>{email}</a> },
            {
              title: <FaLinkedin/>,
              definition: <a href={linkedin} target='_blank' rel='noopener noreferrer'>{nickname}</a>,
            }, {
              title: <FaGithub/>,
              definition: <a href={github} target='_blank' rel='noopener noreferrer'>{nickname}</a>,
            }, {
              title: <FaTwitter/>,
              definition: <a href={twitter} target='_blank' rel='noopener noreferrer'>{nickname}</a>,
            },
          ]}
        />
      </ContactsInner>
    </Section>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
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
