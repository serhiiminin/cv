import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"
import IconPrint from "./icon-print"

const TitleBlock = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 .8rem;
`

const TitlesWrapper = styled.div`
  display: grid;
  row-gap: 1.2rem;
  margin-bottom: 1.8rem;
`

const TitleName = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  margin: 0;
`

const TitlePosition = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin: 0;
`

const Header = ({ name, position }) => {
  const onPrint = () => {
    window.print()
  }

  return (
    <TitleBlock>
      <TitlesWrapper>
        <TitleName>{name}</TitleName>
        <TitlePosition>{position}</TitlePosition>
      </TitlesWrapper>
      <IconPrint onClick={onPrint}/>
    </TitleBlock>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default Header
