import React, { Component } from 'react';
import axios from 'axios'
import logo from './starwarslogo.png';
import './App.css'
import CardPerson from './CardPerson';

const swapi = axios.create({
  baseURL: 'https://swapi.co/api/'
})

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      planets: []
    }
  }

  componentWillMount() {
    swapi.get('/people')
      .then(({ data }) => {
        this.setState({
          people: data.results
        }, () => {
          console.log('Data yang disimpan di state ', this.state.people)
        })
      })
      .catch(err => console.error(err))
    swapi.get('/planets')
    .then(({ data }) => {
      this.setState({
        planets: data.results
      }, () => {
        console.log('Daftar planet sekarang ', this.state.planets)
      })
    })
    .catch(err => console.error(err))
  }

  render () {
      return (
        <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="row">
          {this.state.people.map((data, index) => {
              return <CardPerson key={index} person={data} index={index} planets={this.state.planets}> </ CardPerson>
          })
        }
        </div>
        </div>
      )
  }
}


export default HomePage