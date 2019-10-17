import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import HeroStyled from "../components/heroStyled"
import Banner from "../components/banner"

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <HeroStyled img={props.data.blogBcg.childImageSharp.fluid}>
        <Banner title="Blog" info="Lorem ipsum dolor sit amet consectetur.">
          <Link to="/blog" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </HeroStyled>
    </Layout>
  )
}

export default Blog
