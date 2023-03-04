import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar-main">
      <Link to={"/"}>
        <h3>The Tap Store</h3>
      </Link>
      <Link to={"/list"}>
        <p>Check our products!</p>
      </Link>
      <Link to={"/add"}>
        <p>Introduce products</p>
      </Link>
    </div>
  )
}

export default Navbar
