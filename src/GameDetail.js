import React, { Component } from 'react'
import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'
import ReactHtmlParser from 'react-html-parser'

export default class GameDetail extends Component {
  constructor() {
    super()
    this.state = {
      gameData: '',
      videos: []
    }
  }

  componentWillMount() {
    let id = this.props.match.params.id
    axios.get('https://www.giantbomb.com/api/game/'+id+'/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let gameData = jsonObj.response.results
      this.setState({
        gameData: gameData
      })
    })
  }

  render() {
    return(
      <div>
      <p className="title">{this.state.gameData.name}</p>
      <div className="column is-12 article">
        {ReactHtmlParser(this.state.gameData.description || this.state.gameData.deck)}
      </div>
      </div>
    )
  }
}