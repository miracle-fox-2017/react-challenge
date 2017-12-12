import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="dropdown navigation">
        <a class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
      
        <div class="navbar">
          <a class="navbar-item">
            Home
          </a>
        </div>
        <div class="navbar">
          <a class="navbar-item">
            Category
          </a>
        </div>
      </nav>
    )
  }
}