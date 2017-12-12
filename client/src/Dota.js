import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'

class Dota extends React.Component {
  constructor () {
    super ()

  }

  render () {
    return (
      <div>
        <h1>INFORMASI DETAILS {this.props.match.params.heroName}</h1>
      </div>
    )
  }
}

export default Dota
