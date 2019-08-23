import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaTwitter, FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaMobileAlt } from "react-icons/fa"
import IconPrint from "./icon-print"
import Image from "./image"
import DataLines from "./data-lines"
import Anchor from "./anchor"
import Section from "./section"

const TitleBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const TitlesWrapper = styled.div`
  display: grid;
  row-gap: 1.2rem;
  margin-bottom: 1.8rem;
`;

const TitleName = styled.h1`
  font-size: 3.6rem;
  font-weight: 900;
  margin: 0;
`;

const TitlePosition = styled.h2`
  font-size: 2.8rem;
  font-weight: 900;
  margin: 0;
`;

const ContactsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: start;
  column-gap: 3.6rem;
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
        <TitlesWrapper>
          <TitleName>{name}</TitleName>
          <TitlePosition>{position}</TitlePosition>
        </TitlesWrapper>
        <IconPrint onClick={onPrint}/>
      </TitleBlock>
      <ContactsInner>
        <ImageWrapper>
          <Image/>
        </ImageWrapper>
        <DataLines
          definitions={[
            { title: <FaMapMarkerAlt/>, value: location },
            { title: <FaMobileAlt/>, value: <Anchor href={`tel:${phone}?call`}>{phone}</Anchor> },
            { title: <FaEnvelope />, value: <Anchor href={`mailto:${email}`}>{email}</Anchor> },
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
