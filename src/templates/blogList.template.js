import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/blog.module.css"
import Post from "../components/blogs/post"
import Title from "../components/title"

export const query = graphql`
  query getPosts($limit: Int!, $skip: Int!) {
    posts: allContentfulPost(
      sort: { fields: published, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
const BlogListTemplate = props => {
  const { currentPage, pagesCount } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === pagesCount

  const prevPage =
    currentPage - 1 === 1 ? `/blogs/` : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`

  const { data } = props
  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <Post key={node.id} post={node} />
          })}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              Prev
            </AniLink>
          )}

          {Array.from({ length: pagesCount }, (_, i) => {
            return (
              <AniLink
                key={i}
                fade
                to={`/blogs/${i === 0 ? "" : i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            )
          })}
          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              Next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  )
}

export default BlogListTemplate
