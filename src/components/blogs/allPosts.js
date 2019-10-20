import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../title"
import styles from "../../css/blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Post from "./post"

const getAllPostsQuery = graphql`
  query {
    allPosts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const PostsComponent = () => {
  const response = useStaticQuery(getAllPostsQuery)
  const allPosts = response.allPosts.edges
  // console.log(allPosts)

  return (
    <section className={styles.blog}>
      <Title title="Our" subtitle="Blog" />
      <div className={styles.center}>
        {allPosts.map(post => (
          <Post key={post.node.id} post={post.node} />
        ))}
      </div>
      <AniLink fade to="/" className="btn-primary">
        home
      </AniLink>
    </section>
  )
}

export default PostsComponent
