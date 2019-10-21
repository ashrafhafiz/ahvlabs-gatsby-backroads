import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, description } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        twitterUserName
        siteUrl
        image
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    siteTitle,
    siteDesc,
    siteUrl,
    twitterUserName,
    image,
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />

      {/* Facebook Card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      {image && <meta property="og:image" content={`${siteUrl}${image}`} />}
      {image && <meta property="og:image:width" content="400" />}
      {image && <meta property="og:image:height" content="300" />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUserName} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      {image && <meta name="twitter:image" content={`${siteUrl}${image}`} />}
    </Helmet>
  )
}

export default SEO
