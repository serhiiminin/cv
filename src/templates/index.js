import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout, Seo, Education, Skills, Experience, Languages, Summary, Contacts } from "../components"
import theme from "../theme"

const IndexPage = ({ pageContext }) => {
  const { contacts, summary, skills, experience, education, languages } = pageContext.index

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Seo title="CV"/>
        <Contacts contacts={contacts}/>
        <Summary summary={summary}/>
        <Skills skills={skills}/>
        <Experience experience={experience}/>
        <Education education={education}/>
        <Languages languages={languages}/>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
