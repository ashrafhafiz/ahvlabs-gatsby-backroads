import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import HeroStyled from "../components/heroStyled"
import Banner from "../components/banner"
import PostsComponent from "../components/blogs/allPosts"

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

const Blogs = props => {
  return (
    <Layout>
      <HeroStyled img={props.data.blogBcg.childImageSharp.fluid}>
        <Banner title="Blog" info="Lorem ipsum dolor sit amet consectetur.">
          <Link to="/blogs" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </HeroStyled>
      <h1>Blogs</h1>
    </Layout>
  )
}

export default Blogs
