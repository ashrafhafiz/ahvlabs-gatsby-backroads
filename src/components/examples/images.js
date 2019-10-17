import React from "react"
import styled from "styled-components"
import basicImage from "./../../images/carousel_def_3.jpg"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

const getGatsbyImageQuery = graphql`
  query Images {
    fixed: file(relativePath: { eq: "carousel_def_1.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "carousel_def_2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getGatsbyImageQuery)
  //   console.log(data)
  return (
    <div>
      <h1>Images</h1>
      <Wrapper>
        <article>
          <h3>basic image</h3>
          <img src={basicImage} className="basic" />
        </article>
        <article>
          <h3>fixed/blur</h3>
          <GatsbyImage fixed={data.fixed.childImageSharp.fixed} />
        </article>
        <article>
          <h3>fluid/svg</h3>
          <GatsbyImage fluid={data.fluid.childImageSharp.fluid} />
        </article>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  width: 80vw;
  text-align: center;
  text-transform: capitalize;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
  article {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 2px 2px 4px #888888;
  }
  .basic {
    width: 100%;
  }
`

export default Images
