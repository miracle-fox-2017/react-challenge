import React, { Component } from 'react';
import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // searchResult: [],
      keyword: ''
    }
  }

  searchGame() {
    let keyword = this.state.keyword
    axios.get('https://www.giantbomb.com/api/search/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254&query='+keyword+'&resources=game')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let searchResult = jsonObj.response.results.game
      // this.setState({
        // searchResult: searchResult
      // })
      this.props.searchResult(searchResult)
    })
  }
  
  searchKeyword(event) {
    this.setState({
      keyword: event.target.value
    })
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="dropdown navigation">
        <a className="navbar-item">
          Home
        </a>
        <a className="navbar-item">
          Category
         </a>
        <div class="navbar-item">
          <div class="control">
            <input class="input" type="text" placeholder="Find a repository" onChange={(e) => this.searchKeyword(e)}/>
           </div>
          <div class="control">
            <a class="button is-info" onClick={() => this.searchGame()}>
              Search
            </a>
          </div>
        </div>
      </nav>
    )
  }
}