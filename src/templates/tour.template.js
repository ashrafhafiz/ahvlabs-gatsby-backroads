import React from "react"
import Layout from "../components/layout"
import HeroStyled from "../components/heroStyled"
import Banner from "../components/banner"
import styles from "../css/template.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import DailySchedule from "../components/tours/dailySchedule"

// The var slug is provided through the "context" in "gatsby-node.js"
export const query = graphql`
  query($slug: String!) {
    contentfulTour(slug: { eq: $slug }) {
      id
      contentful_id
      name
      country
      price
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const TourTemplate = props => {
  const {
    name,
    country,
    price,
    days,
    start,
    images,
    description: { description },
    journey,
  } = props.data.contentfulTour

  const [mainImage, ...restOfImages] = images

  return (
    <Layout>
      <HeroStyled img={mainImage.fluid}>
        <Banner
          title={name}
          info="Lorem ipsum dolor sit amet consectetur."
        ></Banner>
      </HeroStyled>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {restOfImages.map((image, index) => {
              return (
                <Img
                  key={index}
                  fluid={image.fluid}
                  alt="single tour"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journy}>
            {journey.map((item, index) => {
              return <DailySchedule key={index} item={item} />
            })}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default TourTemplate
