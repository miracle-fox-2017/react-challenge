import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Hero from './Hero'

class App extends Component {
  componentWillMount() {
    axios.get('http://api.herostats.io/heroes/all')
    .then(response => {
      let tampung = []
      for (var index in response.data) {
          tampung.push(response.data[index])
      }
      this.setState({
        hero: tampung
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  constructor () {
    super ()
    this.state = {
      hero: []
    }
  }

  render() {
    return (
    <div className="App">
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dota Heroes</h1>
        </header>
      </div>
      {this.state.hero.map((d,i) => {
        return (<Hero hero={d} key={i}/>)
      })}
      </div>
    );
  }
}

export default App;
