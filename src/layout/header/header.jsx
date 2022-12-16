import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand"  to={"/"}>Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to={"home"}>home</Link>
        <Link class="nav-link" to={"/logIn"}>Features</Link>
        <Link class="nav-link" to={"/signUp"}>Pricing</Link>
        <Link class="nav-link disabled">Disabled</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header