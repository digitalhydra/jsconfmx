import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { mat4 } from "gl-matrix"
import SimplexNoise from "simplex-noise"
import City from "../svg/City"
import Logo from "../svg/Logo"

type Props = {}

const Section = styled.section`
  position: relative;
  display: flex;
  padding: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  justify-content: flex-end;
`
const HeroContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  position: relative;
  z-index: 900;
`
const MexicoCity = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #5f2265;
  background-color: white;
  padding: 0.2rem 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Date = styled.h3`
  font-size: 2.2rem;
  font-weight: 900;
  color: #ce2281;
  background-color: white;
  padding: 0.2rem 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CFP = styled.a`
  cursor: pointer;
  color: white;
  font-size: 18px;
  background-color: #5f2265;
  padding: 0.2rem 1rem;
  border-radius: 10px;
`
const HeroH1 = styled.h1`
  position: absolute;
  left: 54vh;
  bottom: 3rem;
  font-size: 7vh;
  display: flex;
  .white {
    color: white;
    text-shadow: 5px 4px rgba(0, 0, 0, 0.2);
    margin-right: 3rem;
  }
  .orange {
    color: #f16935;
  }
  z-index: 950;
`
const StyledCity = styled(City)`
  position: absolute;
  height: 100%;
  left: 0;
  z-index: 900;
`

const StyledLogo = styled(Logo)`
  width: 360px;
  height: 360px;
`

const StyledCanvas = styled.canvas`
  height: 100%;
  width: 100%;
  position: absolute;
`

const VERTEX_COUNT = 2000

function createShader(gl: WebGLRenderingContext): WebGLProgram | void {
  const vs = `
    attribute vec4 coords;
    attribute float pointSize;
    uniform vec4 uScalingFactor;
    uniform mat4 transformMatrix;
    void main(void) {
      gl_Position = (coords * uScalingFactor) * transformMatrix;
      gl_PointSize = pointSize;
    }
  `
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  if (vertexShader === null) return
  gl.shaderSource(vertexShader, vs)
  gl.compileShader(vertexShader)

  const fs = `
    precision mediump float;
    uniform vec4 color;
    void main(void) {
      gl_FragColor = color;
    }
  `

  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  if (fragmentShader === null) return
  gl.shaderSource(fragmentShader, fs)
  gl.compileShader(fragmentShader)

  const shaderProgram = gl.createProgram()
  if (shaderProgram === null) return
  gl.attachShader(shaderProgram, vertexShader)
  gl.attachShader(shaderProgram, fragmentShader)
  gl.linkProgram(shaderProgram)
  gl.useProgram(shaderProgram)
  return shaderProgram
}

const Hero = ({}: Props): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const { current: canvas } = canvasRef
    const { current: section } = sectionRef
    if (section === null) return
    if (canvas === null) return
    const gl = canvas.getContext(`webgl`)
    if (gl === null) return

    const vertices: number[] = []
    const simplex = new SimplexNoise()
    let totalVertex = 0

    for (let i = 0; i < 200; i++) {
      const x = -1 + i / 30
      for (let j = 0; j < 100; j++) {
        const y = -0.3 + j / 30
        if (simplex.noise2D(x * 100, y * 100) > 0.5) {
          vertices.push(0 + x, 0 + y, -0.012 + x, -0.012 + y, 0.012 + x, -0.012 + y)
          totalVertex += 1
        }
      }
    }
    // vertices.push(0.7, -0.7, 0.5, 0.7, 0, -0.2)
    function createVertices(gl: WebGLRenderingContext, program: WebGLProgram): void {
      const buffer = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW)
      const coords = gl.getAttribLocation(program, `coords`)
      gl.vertexAttribPointer(coords, 2, gl.FLOAT, false, 0, 0)
      gl.enableVertexAttribArray(coords)
      // gl.bindBuffer(gl.ARRAY_BUFFER, null)
      const pointSize = gl.getAttribLocation(program, `pointSize`)
      gl.vertexAttrib1f(pointSize, 2)
      const color = gl.getUniformLocation(program, `color`)
      gl.uniform4f(color, 0.94, 0.76, 0.16, 0.9)
    }
    const program = createShader(gl)
    const init = (): void => {
      if (!program) return
      createVertices(gl, program)
      const { width, height } = section.getBoundingClientRect()
      const aspectRatio = width / height

      const currentScale = [1.0, aspectRatio, 1.0, 1.0]
      const uScalingFactor = gl.getUniformLocation(program, `uScalingFactor`)
      gl.uniform4fv(uScalingFactor, currentScale)
    }
    init()
    let animFrame = 0
    const matrix = mat4.create()
    const draw = (): void => {
      if (!program) return
      mat4.rotateX(matrix, matrix, -0.002)
      mat4.rotateY(matrix, matrix, 0.005)
      mat4.rotateZ(matrix, matrix, 0.005)
      const transformMatrix = gl.getUniformLocation(program, `transformMatrix`)
      gl.uniformMatrix4fv(transformMatrix, false, matrix)

      gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(vertices))
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLES, 0, totalVertex)
      animFrame = requestAnimationFrame(draw)
    }

    const resizeCanvas = (): void => {
      const { width, height } = section.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.clearColor(1, 1, 1, 1)

      draw()
      init()
    }
    resizeCanvas()

    window.addEventListener(`resize`, resizeCanvas)
    return (): void => {
      window.removeEventListener(`resize`, resizeCanvas)
      cancelAnimationFrame(animFrame)
    }
  }, [canvasRef])
  return (
    <Section ref={sectionRef}>
      <StyledCanvas ref={canvasRef} />
      <StyledCity />
      <HeroContent>
        <StyledLogo />
        <MexicoCity>Ciudad de Mexico</MexicoCity>
        <Date>4 y 5 de mayo, 2020</Date>
        <CFP>envia una charla</CFP>
      </HeroContent>
      <HeroH1>
        <div className="white">JS&nbsp;CONF</div>
        <div className="orange">MÉXICO</div>
      </HeroH1>
    </Section>
  )
}

export default Hero
