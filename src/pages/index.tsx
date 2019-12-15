import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Sombrero from "../components/sombrero"

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Sombrero />
  </Layout>
)

export default IndexPage
