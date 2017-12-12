import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg';

const TheNavBar = () => (
  <div className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item">
        <img src={logo} className="Top-logo" alt="logo" />
        React App !!!
      </a>

      <button className="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
        </div>

      </div>
    </div>

  </div>
)

export default TheNavBar
