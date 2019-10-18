// this component can be used instead of tours component
import React, { Component } from "react"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Tour from "./tour"

export default class TourList extends Component {
  state = {
    tours: [],
    sortedTours: [],
  }

  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="Our" subtitle="Tours" />
        <div className={styles.center}>
          {this.state.sortedTours.map(tour => (
            <Tour key={tour.node.contentful_id} tour={tour.node} />
          ))}
        </div>

        <AniLink fade to="/" className="btn-primary">
          home
        </AniLink>
      </section>
    )
  }
}
