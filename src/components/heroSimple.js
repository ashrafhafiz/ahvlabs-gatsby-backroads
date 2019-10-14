import React from "react"
import Hero from "../images/defaultBcg.jpeg"

const HeroSimple = props => {
  return <header className="defaultHero">{props.children}</header>
}

export default HeroSimple
