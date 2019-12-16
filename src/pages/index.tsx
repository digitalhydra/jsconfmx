import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Sombrero from "../components/sombrero"
import WorldCloud from "../components/worldcloud"
import CFP from "../components/cfp"

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Sombrero />
    <WorldCloud />
    <CFP />
  </Layout>
)

export default IndexPage
