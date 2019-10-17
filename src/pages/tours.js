import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import HeroStyled from "../components/heroStyled"
import Banner from "../components/banner"

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
  return (
    <Layout>
      <HeroStyled
        home="false"
        img={props.data.defaultBcg.childImageSharp.fluid}
      >
        <Banner title="Tours" info="Lorem ipsum dolor sit amet consectetur.">
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </HeroStyled>
    </Layout>
  )
}

export default Tours
