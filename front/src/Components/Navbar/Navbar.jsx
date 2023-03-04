import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar-main">
      <Link to={"/"}>
        <h3>TAP 101</h3>
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
