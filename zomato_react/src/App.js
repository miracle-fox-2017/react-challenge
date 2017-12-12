import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css';
import MainList from './components/MainList'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collections">Zomato Collections</Link></li>
            </ul>
            <hr/>
            <div className="container-fluid">
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/collections" component={MainList}></Route>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
