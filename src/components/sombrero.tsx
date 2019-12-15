import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const SombreroSection = styled.section`
  height: 60vh;
  background-color: #f0c328;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #5f2265;
  position: relative;
`
const Experience = styled.h3`
  font-size: 3rem;
  font-weight: 900;
`
const Content = styled.p`
  width: 80%;
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
`

const Logo = styled.div`
  width: 400px;
  position: absolute;
  right: -28px;
  top: -199px;
`

function Sombrero(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sombrero.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <SombreroSection>
      <Logo>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Logo>
      <Experience>Vive la experiencia</Experience>
      <Content>
        Únete al encuentro de desarrolladores front-end más prestigioso del
        mundo, por primera vez en México. <br />
        Conoce los proyectos más innovadores y conecta con las personas que los
        hacen realidad. <br />
        Ven a formar parte de una comunidad dinámica, robusta y en crecimiento.
      </Content>
    </SombreroSection>
  )
}

export default Sombrero
