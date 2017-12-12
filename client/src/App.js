import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
        console.log('ISI DATA ----> ', response.data);
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
    <Router>
    <div className="App">
      <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Router</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">

            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li className="active"><Link to="/dota">Dota</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="table-responsive" >
                         <h1>TABLE HERO DOTA</h1>
           <table className="table" border="2px">
             <thead>
               <tr>
                 <th>Nomor</th>
                 <th>Name</th>
                 <th>HP</th>
                 <th>Mana</th>
                 <th>Armor</th>
                 <th>MaxDmg</th>
                 <th>MinDmg</th>
                 <th>Range</th>
                 <th>Legs</th>
                 <th>BaseStr</th>
                 <th>BaseAgi</th>
                 <th>BaseInt</th>
                 <th>Movespeed</th>
                 <th>HPRegen</th>
                 <th>CastPoint</th>
                 <th>CastSwing</th>
                 <th>DayVision</th>
                 <th>IntGain</th>
                 <th>Alignment</th>
                 <th>PrimaryStat</th>
               </tr>
             </thead>
                {this.state.hero.map((d,i) => {
                  return (<Hero hero={d} key={i}/>)
                })}
          </table>
        </div>
      </div>
    </div>
  </div>
  </Router>
  )}}

export default App;
