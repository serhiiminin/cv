import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"
import IconPrint from "./icon-print"

const TitleBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 .8rem;
`

const TitlesWrapper = styled.div`
  display: grid;
  row-gap: .8rem;
  margin-bottom: .8rem;
`

const TitleName = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  margin: 0;
`

const TitlePosition = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  opacity: .5;
  margin: 0;
`

const TitlesBlock = ({ name, position }) => {
  const onPrint = () => {
    window.print()
  }

  return (
    <TitleBlock>
      <TitlesWrapper>
        <TitleName>{name}</TitleName>
        <TitlePosition>{position}</TitlePosition>
      </TitlesWrapper>
      <IconPrint onClick={onPrint} title='Print CV'/>
    </TitleBlock>
  )
}

TitlesBlock.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default TitlesBlock
