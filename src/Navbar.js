import React, { Component } from 'react';
import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingSearch: false,
      keyword: ''
    }
  }

  setKeyword(event) {
    this.setState({
      keyword: event.target.value
    })
  }

  render() {
    const url = '/game/search/'+this.state.keyword

    let buttonSearch = null;
    if (this.state.loadingSearch) {
      buttonSearch = <a class="button is-info is-loading">Loading</a>;
    } else {
      buttonSearch = <a class="button is-info">Search</a>;
    }

    return (
      <nav className="navbar" role="navigation" aria-label="dropdown navigation">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <div class="navbar-item">
          <div class="control">
            <input class="input" type="text" placeholder="Find a Game" onChange={(e) => this.setKeyword(e)}/>
           </div>
          <Link to={url} class="control">
            {buttonSearch}
          </Link>
        </div>
      </nav>
    )
  }
}