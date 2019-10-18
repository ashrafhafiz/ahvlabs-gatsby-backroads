import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Tour from "./tour"

const getAllToursQuery = graphql`
  query {
    allTours: allContentfulTour {
      edges {
        node {
          id
          contentful_id
          name
          country
          price
          slug
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const ToursComponent = () => {
  const response = useStaticQuery(getAllToursQuery)
  const allTours = response.allTours.edges
  // console.log(allTours)

  return (
    <section className={styles.tours}>
      <Title title="Our" subtitle="Tours" />
      <div className={styles.center}>
        {allTours.map(tour => (
          <Tour key={tour.node.contentful_id} tour={tour.node} />
        ))}
      </div>

      <AniLink fade to="/" className="btn-primary">
        home
      </AniLink>
    </section>
  )
}

export default ToursComponent
