import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HeroSimple from "../components/heroSimple"
import Banner from "../components/banner"
import About from "../components/home/about"
import Services from "../components/home/services"

export default () => {
  return (
    <Layout>
      <HeroSimple>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, laboriosam."
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </HeroSimple>
      <About />
      <Services />
    </Layout>
  )
}
