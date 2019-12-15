import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Sombrero from "../components/sombrero"
import WorldCloud from "../components/worldcloud"

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Sombrero />
    <WorldCloud />
  </Layout>
)

export default IndexPage
