import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import HeroSimple from "../components/heroSimple"
import HeroStyled from "../components/heroStyled"
import Banner from "../components/banner"
import About from "../components/home/about"
import Services from "../components/home/services"
import { graphql } from "gatsby"
import FeaturedTours from "../components/home/featuredTours"
import SEO from "../components/seo"

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

export default props => {
  // console.log(props.data)
  return (
    <Layout>
      <SEO title="Home" />
      <HeroStyled home="true" img={props.data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, laboriosam."
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </HeroStyled>
      <About />
      <Services />
      <FeaturedTours />
    </Layout>
  )
}
