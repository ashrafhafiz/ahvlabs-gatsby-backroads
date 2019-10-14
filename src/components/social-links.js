import React from "react"
import { Link } from "gatsby"
import { FaFacebook, FaTwitterSquare, FaSquarespace } from "react-icons/fa"

const SocialLinks = () => {
  return (
    <div>
      <Links to="/">Home</Links>
      <Links to="/blog">Blog</Links>
      <Links to="/tours">Tours</Links>
      <Links to="/contact">Contact</Links>
    </div>
  )
}

export default SocialLinks
