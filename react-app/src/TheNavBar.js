import React from 'react'
import { Link } from 'react-router-dom'

const TheNavBar = () => (
  <div className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item">
        <img src="https://d33wubrfki0l68.cloudfront.net/de351b8f6daef039814f26ed6f46a8e85a5e7357/ceeae/react.svg" alt="Bulma: a modern CSS framework based on Flexbox" height="28" />
        React App !!!
      </a>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
        </div>

      </div>
    </div>

  </div>
)

export default TheNavBar
