import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const getLevelValue = level => ({
  Beginner: "20%",
  'Pre-Intermediate': "40%",
  Intermediate: "60%",
  'Upper-Intermediate': "80%",
  Fluent: "100%",
  Native: "100%",
})[level] || 0

const LanguagesList = styled.div`
  margin: 0;
`

const LanguageItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const LanguageTitles = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const Title = styled.h5`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize[2]};
  min-width: 8rem;
`

const Value = styled.span`
  color: ${({ theme }) => theme.color.textLighter}
`;

const LevelOuter = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.textLighter};
  
  @media (min-width: 576px) {
    width: 67%;
  }
`

const LevelInner = styled.div`
  height: ${({ theme }) => theme.spacing[0]};
  width: ${({ level }) => getLevelValue(level)};
  background: ${({ theme }) => theme.color.text};
`

const LanguageLines = ({ data }) => (
  <LanguagesList>
    {data.map(({ title, value }) => (
      <LanguageItem key={title}>
        <LanguageTitles>
          <Title>{title}</Title>
          <Value>{value}</Value>
        </LanguageTitles>
        <LevelOuter>
          <LevelInner level={value}/>
        </LevelOuter>
      </LanguageItem>
    ))}
  </LanguagesList>
)

LanguageLines.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    }),
  ).isRequired,
}

export default LanguageLines
