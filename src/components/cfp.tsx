import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Section = styled.section`
  display: flex;
  padding: 0 4rem 0 4rem;
  justify-content: space-around;
  align-items: center;
  height: 60vh;
  position: relative;
  h3 {
    width: 60rem;
    height: 10rem;
    top: -2rem;
    position: absolute;
    background-color: white;
    padding: 1rem 0 0 4rem;
    font-size: 3rem;
    color: #0da695;
  }
  p {
    font-size: 1.8rem;
    color: #5f2265;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`
const Button = styled.a`
  padding: 1rem 2rem 1rem 2rem;
  background-color: #f16935;
  color: white;
  border-radius: 5rem;
  font-size: 1.3rem;
  right: 0;
  margin-left: auto;
  cursor: pointer;
  box-shadow: 4px 4px 0px -1px rgba(240, 195, 40, 1);
`

const Cactus = styled.div`
  width: 20rem;
`

function CFP(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cactus.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Section>
      <div className="content">
        <h3 className="title">Da una conferencia</h3>
        <p className="text">
          Comparte tus ideas, logros y retos con la comunidad de desarrollo de
          JS más grande de México. <br /> Toma el micrófono y crea nuevas
          historias. Revisa la convocatoria para enviar tu propuesta.
        </p>
        <Button>Postularme</Button>
      </div>
      <Cactus>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Cactus>
    </Section>
  )
}

export default CFP
