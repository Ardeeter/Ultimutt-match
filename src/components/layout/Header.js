import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border border-dark">
  <Link className="navbar-brand" to="#">
    <div className="logo nav-logo">Ultimutt <img src="./images/icon.jpg" height="30px" alt=""/> Match</div>
    </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/resourses">Resources</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/aboutme">About</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header