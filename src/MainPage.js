import React, { Component } from 'react'
import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'

import Navbar from './Navbar'
import GameItem from './GameItem'
import GameList from './GameList'
import GameDetail from './GameDetail'

export default class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      gameList: []
    }
  }

  componentWillMount() {
    axios.get('https://www.giantbomb.com/api/games/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254&filter=expected_release_year:2017&limit=20')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let gameList = jsonObj.response.results.game
      console.log(gameList[0])
      this.setState({
        gameList: gameList
      })
    })
  }

  searchResult(searchResult) {
    this.setState({
      gameList: searchResult
    })
  }

  render() {
    return(
      <div>
        <p className="title">Game List</p>
        <p className="subtitle">Featured Game</p>
        <div className="content">
          <GameList gameList={this.state.gameList} />
        </div>
      </div>
    )
  }
}