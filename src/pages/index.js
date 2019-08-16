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

const IndexPage = () => (
  <Layout>
    <Seo title="CV"/>
    <Contacts/>
    <Summary/>
    <Skills/>
    <Experience/>
    <Education/>
    <Languages/>
  </Layout>
)

export default IndexPage
