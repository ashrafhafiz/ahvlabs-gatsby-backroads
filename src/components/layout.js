import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

import "./layout.css"

const Layout = props => {
  return (
    <main>
      <Navbar />
      {props.children}
      <Footer />
    </main>
  )
}

export default Layout
