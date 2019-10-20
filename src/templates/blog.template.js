import React from "react"
import Layout from "../components/layout"
import HeroStyled from "../components/heroStyled"
import Banner from "../components/banner"
import styles from "../css/single-blog.module.css"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// The var slug is provided through the "context" in "gatsby-node.js"
export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "dddd MMMM Do, YYYY")
      text {
        json
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const BlogTemplate = props => {
  const { title, published, text, image } = props.data.contentfulPost
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        // console.log(node)
        return (
          <div className={styles.post}>
            <img
              src={node.data.target.fields.file["en-US"].url}
              alt={node.data.target.fields.file["en-US"].fileName}
            />
            <p>Images provided by John Doe</p>
          </div>
        )
      },
      "embedded-entry-block": node => {
        console.log(node)
        const { title, image, text } = node.data.target.fields
        return (
          <div className={styles.post}>
            <h1>This is another post : {title["en-US"]}</h1>
            <img
              width="400"
              src={image["en-US"].fields.file["en-US"].url}
              alt={image["en-US"].fields.file["en-US"].fileName}
            />
            <p>Images provided by John Doe</p>
            {documentToReactComponents(text["en-US"])}
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <HeroStyled img={image.fluid}>
        <Banner title={title} info={published}></Banner>
      </HeroStyled>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>Published at : {published}</h4>
          <div>{documentToReactComponents(text.json, options)}</div>
          <AniLink fade to="/blog" className="btn-primary">
            back to blog
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default BlogTemplate
