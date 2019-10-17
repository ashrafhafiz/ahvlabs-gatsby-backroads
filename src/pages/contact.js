import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import HeroStyled from "../components/heroStyled"
import Banner from "../components/banner"
import ContactUs from "../components/contact/contactUs"

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Contact = props => {
  return (
    <Layout>
      <HeroStyled img={props.data.contactBcg.childImageSharp.fluid}>
        <Banner title="Contact" info="Lorem ipsum dolor sit amet consectetur.">
          <Link to="/contact" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </HeroStyled>
      <ContactUs />
    </Layout>
  )
}

export default Contact
