import React from "react"
import PropTypes from "prop-types"
import { MdPrint } from "react-icons/md"
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

const Contacts = ({ contacts }) => {
  const { name, position, location, phone, email, linkedin, github, twitter, telegram } = contacts
  const onPrint = () => {
    window.print();
  }

  return (
    <Section>
      <ImageWrapper>
        <Image/>
      </ImageWrapper>
      <div>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <MdPrint onClick={onPrint}/>
        <div>Location: {location}</div>
        <div>Phone: {phone}</div>
        <div>Email: {email}</div>
        <div>Linkedin: {linkedin}</div>
        <div>Github: {github}</div>
        <div>Twitter: {twitter}</div>
        <div>Telegram: {telegram}</div>
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
    telegram: PropTypes.string.isRequired
  }),
}

export default Contacts
