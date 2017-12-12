import React, { Component } from 'react';
import logo from './logo.svg';
import Hero from './Hero'
import './App.css';
import axios from 'axios'
const heroApi = `http://api.herostats.io/heroes/all`


class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: []
    }
  }
  componentDidMount() {
    axios.get(heroApi)
    .then(response => {
      let tempHero = []
      for (let hero in response.data){
        tempHero.push(response.data[hero])
      }
      this.setState({
        heroes: tempHero
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
            { this.state.heroes.map(((hero,i) => {
              return (
                <Hero heroList={hero} key={i}/>
              )
          }))}
      </div>
    );
  }
}

export default App;
