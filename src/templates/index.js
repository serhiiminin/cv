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

const IndexPage = ({ pageContext }) => {
  const { contacts, summary, skills, experience, education, languages } = pageContext.index

  return (
    <Layout>
      <Seo title="CV"/>
      <Contacts contacts={contacts}/>
      <Summary summary={summary}/>
      <Skills skills={skills}/>
      <Experience experience={experience}/>
      <Education education={education}/>
      <Languages languages={languages}/>
    </Layout>
  )
}

export default IndexPage
