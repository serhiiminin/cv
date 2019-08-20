import React from "react"
import PropTypes from "prop-types"
import { MdPrint } from "react-icons/md"
import { FaTwitter, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa"
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
`

const SocialWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;  
`

const SocialLink = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 26px;
  margin-right: 10px;
`

const PrintIcon = styled(props => <MdPrint {...props} />)`
  font-size: 26px;
  color: gray;
  &:hover {
    cursor: pointer;
  }
  @media print {
    display: none;
  }
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
        <div>Location: {location}</div>
        <div>Phone: {<a href={`tel:${phone}?call`}>{phone}</a>}</div>
        <div>Email: {<a href={`mailto:${email}`}>{email}</a>}</div>
        <SocialWrapper>
          <SocialLink href={linkedin} target='_blank'><FaLinkedin/></SocialLink>
          <SocialLink href={github} target='_blank'><FaGithub/></SocialLink>
          <SocialLink href={twitter} target='_blank'><FaTwitter/></SocialLink>
          <SocialLink href={telegram} target='_blank'><FaTelegram/></SocialLink>
        </SocialWrapper>
        <PrintIcon onClick={onPrint}/>
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
