import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Tour from "../tours/tour"

const getFeaturedToursQuery = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      totalCount
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

const FeaturedTours = () => {
  const response = useStaticQuery(getFeaturedToursQuery)
  const tours = response.featuredTours.edges
  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(tour => (
          <Tour key={tour.node.contentful_id} tour={tour.node} />
        ))}
      </div>

      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
