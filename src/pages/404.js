import React from "react"
import Layout from "../components/layout"
import styles from '../css/error.module.css'
import {Link} from 'gatsby'
import Banner from "../components/banner"

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <Link to="/" className="btn-white">Back to Home Page</Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error
