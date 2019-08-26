import React from "react"
import {
  Layout,
  Seo,
  Education,
  Skills,
  Experience,
  Languages,
  Summary,
  Contacts,
} from "../components"
import { ThemeProvider } from "../context/theme"
import Header from "../components/header"

const IndexPage = ({ pageContext }) => {
  const { name, position, contacts, summary, skills, experience, education, languages } = pageContext.index

  return (
    <ThemeProvider>
      <Layout>
        <Seo title="CV"/>
        <Header position={position} name={name}/>
        <main>
          <Contacts contacts={contacts}/>
          <Summary summary={summary}/>
          <Skills skills={skills}/>
          <Experience experience={experience}/>
          <Education education={education}/>
          <Languages languages={languages}/>
        </main>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
