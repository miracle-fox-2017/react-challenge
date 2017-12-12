import React, { Component } from 'react';
import logo from './starwarslogo.png';
import axios from 'axios';
import './App.css';
import CardPerson from './CardPerson'

const swapi = axios.create({
  baseURL: 'https://swapi.co/api/'
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      planets: []
    }
  }
  componentWillMount() {
    swapi.get('/people')
    .then(({data}) => {
      this.setState({
        people: data.results
      }, () => {
        console.log('Data yang disimpan di state ', this.state.people)
      })
    })
    .catch(err => console.error(err))
    swapi.get('/planets')
    .then(({data}) => {
      this.setState({
        planets: data.results
      }, () => {
        console.log('Daftar planet sekarang ', this.state.planets)
      })
    })
    .catch(err => console.error(err))
  }
  render() {
    if (!this.state.people) return <p> Loading ... </p>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row">
        {this.state.people.map((data, index) => {
          return <CardPerson key={index} person={data} planets={this.state.planets}> </ CardPerson>
        })}
        </div>
      </div>
    );
  }
}

export default App;
