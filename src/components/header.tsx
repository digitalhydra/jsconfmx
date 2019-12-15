import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

type Props = {}

const StyledHeader = styled.header`
  display: flex;
  height: 60px;
  margin: none;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  font-weight: 600;
  color: #5f2265;
  font-size: 14px;
  background-color: #fff;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.2);
  position: relative:
  z-index: 1000;
  a {
    text-decoration: none;
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
`

const Logo = styled.div`
  width: 30px;
  height: 30px;
`
const Navs = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 90;
  .sep {
    width: 1px;
    height: 3rem;
    opacity: 0.36;
    margin: 0 1rem 0 1rem;
    background-color: #5f2265;
  }
`
const I18n = styled.div`
  flex-basis: 10;
  display: flex;
  align-items: center;

  .sep {
    width: 1px;
    height: 3rem;
    opacity: 0.36;
    margin: 0 0.9rem 0 0.9rem;
    background-color: #5f2265;
    transform: rotate(15deg);
  }
`

const Header = ({}: Props): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <Logo>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Logo>
      <Navs>
        <nav>
          <a href="#about">Acerca De</a>
        </nav>
        <div className="sep"></div>
        <nav>
          <a href="#cfp">CFP</a>
        </nav>
        <div className="sep"></div>
        <nav>
          <a href="#location">Ubicación</a>
        </nav>
        <div className="sep"></div>
        <nav>
          <a href="#coc">Código de conducta</a>
        </nav>
        <div className="sep"></div>
        <nav>
          <a href="#sponsor">Patrocinadores</a>
        </nav>
      </Navs>
      <I18n>
        <Link to="/en">en</Link>
        <div className="sep"></div>
        <Link to="/">es</Link>
      </I18n>
    </StyledHeader>
  )
}

export default Header
