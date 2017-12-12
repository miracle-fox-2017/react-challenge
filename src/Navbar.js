import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="dropdown navigation">
        <a className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
      
        <div className="navbar">
          <a className="navbar-item">
            Home
          </a>
        </div>
        <div className="navbar">
          <a className="navbar-item">
            Category
          </a>
        </div>
      </nav>
    )
  }
}