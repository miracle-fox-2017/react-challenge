import React, { Component } from 'react';
import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'

import Navbar from './Navbar'
import GameItem from './GameItem'

class App extends Component {
  componentWillMount() {
    axios.get('https://www.giantbomb.com/api/games/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254&limit=10')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let gameList = jsonObj.response.results.game
      console.log(gameList)
    })
  }

  render() {
    return (
      <div class="container is-widescreen">
        <Navbar />
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile is-parent">
              <article class="tile is-child notification is-danger">
                <p class="title">Game List</p>
                <p class="subtitle">Featured Game</p>
                <div class="content">
                <div class="column">
                  <div class="card">
                    <GameItem/>
                  </div>
                </div>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-success">
              <div class="content">
                <p class="title">Tall tile</p>
                <p class="subtitle">With even more content</p>
                <div class="content">
                  Content
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
