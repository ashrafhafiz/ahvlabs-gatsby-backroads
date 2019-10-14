import React from "react"
import styles from "../css/banner.module.css"

const Banner = props => {
  return (
    <div className={styles.banner}>
      <h1>{props.title}</h1>
      <p>{props.info}</p>
      {props.children}
    </div>
  )
}

export default Banner
