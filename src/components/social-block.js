import React from 'react'
import PropTypes from 'prop-types';
import { FaTwitter, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa"
import styled from 'styled-components';

const SocialWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;  
`

const SocialLink = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 2.6rem;
  margin-right: 1rem;
`

const SocialBlock = ({linkedin, github, twitter, telegram }) => (
  <SocialWrapper>
    <SocialLink href={linkedin} target='_blank'><FaLinkedin/></SocialLink>
    <SocialLink href={github} target='_blank'><FaGithub/></SocialLink>
    <SocialLink href={twitter} target='_blank'><FaTwitter/></SocialLink>
    <SocialLink href={telegram} target='_blank'><FaTelegram/></SocialLink>
  </SocialWrapper>
)

SocialBlock.propTypes = {
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  telegram: PropTypes.string.isRequired,
}

export default SocialBlock;
