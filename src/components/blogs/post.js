import React from "react"
import Image from "gatsby-image"
import styles from "../../css/blog-card.module.css"
// import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Post = props => {
  const { title, published, slug, image } = props.post

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} alt="single post" />
        <AniLink fade className={styles.link} to={`/blog/${slug}`}>
          details
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4 className={styles.title}>{title}</h4>
      </div>
    </article>
  )
}

export default Post
