import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
  return (  
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" id="navbarid">
        <div className="container-fluid">
        <Link className="top" to="/">
          <img
            src={require("./image/logo.png")}
            style={{ width: 45, height: 40 }}
            alt=""
          />
        </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Ourstory">Our Story </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Team">Our Team</Link>
                </li>

                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Media
                  </Link>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to="/Mediaphoto">Photos</Link></li>
                    <li><Link class="dropdown-item" to="/Mediavideo">Videos</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="#Footer_container">Contact US</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Donate">Donate</Link>
                </li>
            </ul>
            <form className="d-flex">
                <Link className="btn btn-primary btn-sm" to="/JoinUS">Join US</Link>
                {/* <button className="btn btn-outline-success btn-sm" type="submit">Join US</button> */}
            </form>
            </div>
        </div>
        </nav>
    </div>
  )
}