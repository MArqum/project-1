import React, { useState } from 'react'
import PropTypes from 'prop-types' 
import { useNavigate } from 'react-router-dom'
export default function Navbar(props) {
  const [search,setSeatch] = useState('')
  const navigate =  useNavigate()
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">Login</a>
      </li>
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/aboutus">Aboutus</a>
      </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSeatch(e.target.value)} />
        <button className="btn btn-outline-success" type="submit" onClick={()=>{
          navigate(`/aboutus?${search}`)
        }} >Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired, 
    aboutus : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : 'set title here',
    aboutus : 'write about us here'
};