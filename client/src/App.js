import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Dota from './Dota'
import Home from './Home'

class App extends Component {

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
              <li ><a href="#">Login</a></li>
            </ul>
          </div>
          <Route exact path="/" component={Home}/>
           <Route exact path="/dota" component={Dota}/>
        </div>
      </nav>
      </div>
    </div>
  </Router>
  )}}

export default App;
