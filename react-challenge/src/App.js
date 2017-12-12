import React, { Component } from 'react';
import axios from 'axios';
import Hero from './Hero';

class App extends Component {
  
  constructor() {
    super()
    this.state =  {
      heroes: []
    }
  }
  
  render() {
    return (
      <div className="App">
        {this.state.heroes.map((hero, index) => {
          return <Hero heroData={hero} key={index}></Hero>
        })}
      </div>
    );
  }
  
  componentDidMount() {
    axios.get('http://api.herostats.io/heroes/all')
      .then(({data}) => {
        let temp = []
        for (let hero in data) {
          temp.push(data[hero])
        }
        this.setState({
          heroes: temp
        })
      })
      .catch(error => console.log(error))
  }
}

export default App;
