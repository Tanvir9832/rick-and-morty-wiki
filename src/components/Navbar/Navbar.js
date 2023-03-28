import React from 'react'
import { NavLink ,Link } from 'react-router-dom'
import {AiOutlineMenuFold } from 'react-icons/ai'
import {ImCross} from 'react-icons/im'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-1">
  <div className="container">
  <Link to="/" className="text-center ubuntu my-4 fs-5 fw-bold text-dark text-decoration-none "> Rick & Morty <span className="text-primary">Wiki</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <style jsx>
          {
            `button[aria-expanded="false"] > .close{
              display : none;
            }
            
            button[aria-expanded ="true"]> .open{
              display : none;
            }
            `
          }
      </style>
      <AiOutlineMenuFold className='open fw-bold text-dark' />
      <ImCross className='close fw-bold text-dark' />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink activeClassName="active" to="/" className="nav-link">Characters</NavLink>
        <NavLink to="/episodes"className="nav-link" >Episodes</NavLink>
        <NavLink to="/location"className="nav-link" >Location</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar