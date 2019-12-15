import React from "react"
import styled from "styled-components"
import Background from "../svg/Background"

const Section = styled.section`
  height: 80vh;
  background-image: linear-gradient(
    to bottom,
    rgba(240, 187, 40, 1) 0%,
    rgba(238, 105, 72, 0.6) 100%
  );
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 4rem 0 4rem;
`

const StyledBackground = styled(Background)`
  position: absolute;
  bottom: 0;
  width: 100vw;
  z-index: -1;
`

const Left = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  color: white;
  font-weight: 900;
  text-transform: uppercase;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div1 {
    grid-area: 1 / 1 / 4 / 2;
    font-size: 2.5rem;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 6;
    align-items: flex-end;
    font-size: 3em;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
  }
  .div3 {
    grid-area: 1 / 6 / 4 / 7;
    writing-mode: vertical-rl;
    align-items: flex-end;
    font-size: 2.8rem;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
  }
  .div4 {
    grid-area: 1 / 7 / 4 / 8;
    writing-mode: vertical-rl;
    align-items: flex-end;
    font-size: 2.8rem;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
  }
  .div5 {
    grid-area: 2 / 2 / 4 / 3;
    justify-content: flex-end;
    font-size: 1.5rem;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
  }
  .div6 {
    grid-area: 2 / 3 / 3 / 6;
    align-items: flex-end;
    font-size: 2.5rem;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
  }
  .div7 {
    grid-area: 3 / 3 / 4 / 6;
    font-size: 5rem;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
    justify-content: flex-end;
  }
  .div8 {
    grid-area: 4 / 1 / 5 / 4;
    justify-content: flex-end;
    font-size: 3rem;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
  }
  .div9 {
    grid-area: 4 / 4 / 6 / 5;
    writing-mode: vertical-rl;
    font-size: 2rem;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
  }
  .div10 {
    grid-area: 5 / 5 / 6 / 8;
    font-size: 1.8rem;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
  }
  .div11 {
    writing-mode: vertical-rl;
    grid-area: 4 / 5 / 5 / 8;
    font-size: 3.1rem;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
  }
  .div12 {
    grid-area: 5 / 1 / 6 / 4;
    justify-content: flex-end;
    font-size: 2.5rem;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
  }
`

const Right = styled.div`
  width: 30%;
  .title {
    font-size: 2rem;
    font-weight: 900;
    color: #5f2265;
  }
  .content {
    font-size: 1.2rem;
    color: #5f2265;
    line-height: 1.6;
  }
`
function WorldCloud(): JSX.Element {
  return (
    <Section>
      <StyledBackground />
      <Left>
        <div className="div1"></div>
        <div className="div2">React</div>
        <div className="div3">GraphQL</div>
        <div className="div4">TC39</div>
        <div className="div5">Angular</div>
        <div className="div6">Progresive Web Apps</div>
        <div className="div7">JavaScript</div>
        <div className="div8">Machine Learning</div>
        <div className="div9">i18n</div>
        <div className="div10">VR/AR/XR</div>
        <div className="div11">A11y</div>
        <div className="div12">NodeJS</div>
      </Left>
      <Right>
        <h3 className="title">Hablemos de...</h3>
        <p className="content">
          Asiste a charlas acerca de los avances más relevantes del ecosistema
          de desarrollo JS. Expande tu conocimiento y dialoga con expertos.
          Encuentra a personas conde intereses afines y construye una red con
          ellas.
        </p>
      </Right>
    </Section>
  )
}

export default WorldCloud
