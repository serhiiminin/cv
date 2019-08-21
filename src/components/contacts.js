import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SocialBlock from "./social-block"
import IconPrint from "./icon-print"
import Image from "./image"
import ContactLines from "./contact-lines"
import Title from "./title"

const Section = styled.section`
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const ContactsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: start;
  column-gap: 2rem;
`

const ImageWrapper = styled.div`
  height: 12.8rem;
  width: 12.8rem;
  border-radius: 1rem;
  overflow: hidden;
`

const Contacts = ({ contacts }) => {
  const { name, position, location, phone, email, linkedin, github, twitter, telegram, nickname } = contacts
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
        <div>
          <ContactLines
            definitions={[
              { title: "Location", definition: location },
              { title: "Phone", definition: <a href={`tel:${phone}?call`}>{phone}</a> },
              { title: "Email", definition: <a href={`mailto:${email}`}>{email}</a> },
            ]}
          />
          <SocialBlock github={github} linkedin={linkedin} telegram={telegram} twitter={twitter}/>
        </div>
        <ContactLines
          definitions={[{
            title: "LinkedIn",
            definition: <a href={linkedin} target='_blank' rel='noopener noreferrer'>{nickname}</a>,
          }, {
            title: "GitHub",
            definition: <a href={github} target='_blank' rel='noopener noreferrer'>{nickname}</a>,
          }, {
            title: "Twitter",
            definition: <a href={twitter} target='_blank' rel='noopener noreferrer'>{nickname}</a>,
          }]}
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
