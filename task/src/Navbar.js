import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link" to="/">Home</Link>
          <Link class="nav-item nav-link" to="/articles">Articles</Link>
        </div>
      </div>
      <hr/>
    </nav>

  </div>
  )
}

export default Navbar