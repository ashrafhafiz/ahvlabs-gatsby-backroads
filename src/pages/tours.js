import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import HeroStyled from "../components/heroStyled"
import Banner from "../components/banner"
import ToursComponent from "../components/tours/allTours"

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Tours = props => {
  // console.log("tours props: ", props)
  return (
    <Layout>
      <HeroStyled img={props.data.defaultBcg.childImageSharp.fluid}>
        <Banner title="Tours" info="Lorem ipsum dolor sit amet consectetur.">
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </HeroStyled>
      <ToursComponent />
    </Layout>
  )
}

export default Tours
