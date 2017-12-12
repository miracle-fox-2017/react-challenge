import React, { Component } from 'react';
import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'

import Navbar from './Navbar'
import GameItem from './GameItem'

class App extends Component {
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

  render() {
    return (
      <div className="columns is-centered">
        <div class="column is-6">
          <div className="tile is-vertical">
            <Navbar />
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">Game List</p>
                <p className="subtitle">Featured Game</p>
                <div className="content">
                <div className="column">
                  {this.state.gameList.map((g, i) => {
                    return <div>
                      <GameItem key={i} gameItem={g}/>
                      <br/>
                    </div>
                  })}
                </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
