import React, {Component} from 'react'
import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'

import GameList from './GameList'

export default class SearchPage extends Component {
  constructor() {
    super()
    this.state = {
      loadingSearch: false,
      searchResult: []
    }
  }

  componentWillMount() {
    this.setState({
      loadingSearch: true
    })
    let keyword = this.props.match.params.keyword
    axios.get('https://www.giantbomb.com/api/search/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254&query='+keyword+'&resources=game')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let searchResult = jsonObj.response.results.game
      console.log(searchResult)
      this.setState({
        loadingSearch: false,
        searchResult: searchResult || []
      })
    })
  }

  render() {
    return(
      <div>
        <p className="title">Search Game</p>
        <p className="subtitle">Search Result</p>
        <div className="content">
          <GameList gameList={this.state.searchResult} />
        </div>
      </div>
    )
  }
}